import { addEntryToDb } from "../../dataStorage.js"

const chatItemEvents = () => {
  const personOneDropdown = document.querySelector('#personOneDropdown')
  const personTwoDropdown = document.querySelector('#personTwoDropdown')
  const chatTexts = document.querySelectorAll('.chat-text')
  const chatItemDropdowns = document.querySelectorAll('.chat-item-dropdown')
  const chatPageOverlay = document.querySelector('#chatPageOverlay')

  for (let index = 0; index < chatTexts.length; index++) {
    const chatText = chatTexts[index]
    chatText.addEventListener('mouseover', () => {
      chatText.lastElementChild.style.visibility = 'visible'
    })

    chatText.addEventListener('mouseout', () => {
      chatText.lastElementChild.style.visibility = 'hidden'
    })
  }

  for (let index = 0; index < chatItemDropdowns.length; index++) {
    const chatItemDropdown = chatItemDropdowns[index];
    chatItemDropdown.addEventListener('click', (event) => {
      const person = chatItemDropdown.parentElement.id
      const horizontalPosition = event.clientX
      const verticalPosition = event.clientY
      if (person === 'person-one') {
        personOneDropdown.style.display = 'block'
        personOneDropdown.style.top = verticalPosition + 'px'
        chatPageOverlay.style.display = 'block'
      } else {
        personTwoDropdown.style.display = 'block'
        personTwoDropdown.style.top = verticalPosition + 'px'
        personTwoDropdown.style.left = horizontalPosition + 'px'
        chatPageOverlay.style.display = 'block'
      }
    })
  }

  chatPageOverlay.addEventListener('click', () => {
    personOneDropdown.style.display = 'none'
    personTwoDropdown.style.display = 'none'
    chatPageOverlay.style.display = 'none'
  })
}

const addChatItemToDom = person => {
  const chatContainer = document.querySelector('.chat-container')
  const personContainerButton = document.querySelector('.person-button-container')
  const recordButton = document.querySelector('.record-button')
  const sendChatButton = document.querySelector('.send-button')
  const chatBox = document.querySelector('.chat-box')
  const chatBoxValue = chatBox.value.trim()
  const itemId = 'id' + Date.parse(new Date()).toString()
  const chatTime = new Date().toTimeString().substr(0, 5)

  const chatItem = `
    <div id="${itemId}">
      <div class="${person === 'person-one' ? 'arrow-right' : 'arrow-left'}"></div>
      <div class="${person} chat-item">
        <div id="${person}" class="chat-text">
          <span class="message-value">${chatBoxValue}</span>
          <sub class="chat-time">${chatTime}</sub>
          <button class="chat-item-dropdown ${itemId}"><i class="material-icons">&#xe313;</i><sup>
        </div>
      </div>
    </div>
  `

  chatContainer.innerHTML += chatItem
  chatContainer.scrollTop = chatContainer.scrollHeight
  chatBox.style.height = ''
  chatBox.value = ''
  recordButton.style.display = 'block'
  sendChatButton.style.display = 'none'
  personContainerButton.style.display = 'none'

  const chatObject = {
    itemId: itemId,
    person: person,
    chatTime: chatTime,
    chatBoxValue: chatBoxValue
  }

  addEntryToDb('chatData', chatObject)
  chatItemEvents(person)
}

const chatPageEvents = () => {
  const chatBox = document.querySelector('.chat-box')
  const sendChatButton = document.querySelector('.send-button')
  const recordButton = document.querySelector('.record-button')
  const personOneChatButton = document.querySelector('.person-one-button')
  const personTwoChatButton = document.querySelector('.person-two-button')

  chatBox.addEventListener('input', () => {
    chatBox.style.height = "1px"
    chatBox.style.height = (3+chatBox.scrollHeight)+"px"
    if (chatBox.value.trim().length >= 1) {
      sendChatButton.style.display = 'block'
      recordButton.style.display = 'none'
    } else {
      sendChatButton.style.display = 'none'
      recordButton.style.display = 'block'
      document.querySelector('.person-button-container').style.display = 'none'
    }
  })

  sendChatButton.addEventListener('click', () => {
    document.querySelector('.person-button-container').style.display = 'block'
  })

  personOneChatButton.addEventListener('click', () => addChatItemToDom('person-one'))
  personTwoChatButton.addEventListener('click', () => addChatItemToDom('person-two'))
}

export default chatPageEvents
export { chatItemEvents }
