import { addEntryToDb, deleteEntry } from "../../dataStorage.js"

const deleteChatItem = () => {
  const chatPageOverlay = document.querySelector('#chatPageOverlay')
  const deleteModalButtons = document.querySelectorAll('.delete-modal-button')

  chatPageOverlay.addEventListener('click', () => {
    document.querySelector('#personOneDropdown').style.display = 'none'
    document.querySelector('#personTwoDropdown').style.display = 'none'
    chatPageOverlay.style.display = 'none'
  })

  for (let index = 0; index < deleteModalButtons.length; index++) {
    const deleteModalButton = deleteModalButtons[index]
    deleteModalButton.addEventListener('click', () => {
      document.querySelector('.page-overlay').style.display = 'block'
      document.querySelector('.delete-modal').style.display = 'block'
      chatPageOverlay.style.display = 'none'
      deleteModalButton.parentElement.style.display = 'none'
    })
  }

  document.querySelector('.cancel-button').addEventListener('click', () => {
    document.querySelector('.delete-modal').style.display = 'none'
    document.querySelector('.page-overlay').style.display = 'none'
  })

  const deleteButton = document.querySelector('.delete-button')
  deleteButton.addEventListener('click', () => {
    const element = deleteButton.title
    const chatContainer = document.querySelector('.chat-container')
    const chatItemDiv = document.querySelector(`.${element}`)
    chatContainer.removeChild(chatItemDiv)
    document.querySelector('.delete-modal').style.display = 'none'
    document.querySelector('.page-overlay').style.display = 'none'
    deleteEntry('chatData', element)
  })
}

const addChatItemEvents = () => {
  const personOneDropdown = document.querySelector('#personOneDropdown')
  const personTwoDropdown = document.querySelector('#personTwoDropdown')
  const chatTexts = document.querySelectorAll('.chat-text')
  const chatItemDropdowns = document.querySelectorAll('.chat-item-dropdown')
  const chatPageOverlay = document.querySelector('#chatPageOverlay')

  chatTexts.forEach(chatText => {
    chatText.addEventListener('mouseover', () => {
      const element = chatText.title
      document.querySelector(`#${element}`).style.visibility = 'visible'
    })

    chatText.addEventListener('mouseout', () => {
      const element = chatText.title
      document.querySelector(`#${element}`).style.visibility = 'hidden'
    })
  })

  chatItemDropdowns.forEach(chatItemDropdown => {
    chatItemDropdown.addEventListener('click', (event) => {
      const person = chatItemDropdown.parentElement.parentElement.id
      const horizontalPosition = event.clientX
      const verticalPosition = event.clientY
      document.querySelector('.delete-button').title = chatItemDropdown.id
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
  });
}

const addChatItemToDom = (person, message) => {
  const chatContainer = document.querySelector('.chat-container')
  const personContainerButton = document.querySelector('.person-button-container')
  const recordButton = document.querySelector('.record-button')
  const sendChatButton = document.querySelector('.send-button')
  const chatBox = document.querySelector('.chat-box')
  const chatBoxValue = chatBox.value.trim() || message
  const itemId = 'id' + Date.parse(new Date()).toString()
  const chatTime = new Date().toTimeString().substr(0, 5)

  const chatItem = `
    <div class="${itemId}">
      <div class="${person === 'person-one' ? 'arrow-right' : 'arrow-left'}"></div>
      <div class="${person} chat-item">
        <div id="${person}" class="chat-text" title="${itemId}">
          <span class="message-value">${chatBoxValue}</span>
          <div>
            <sub class="chat-time">${chatTime}</sub>
            <button id="${itemId}" class="chat-item-dropdown"><i class="material-icons">&#xe313;</i><sup>
          </div>
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
  addChatItemEvents()
}

const addChatPageEvents = () => {
  const chatBox = document.querySelector('.chat-box')
  const sendChatButton = document.querySelector('.send-button')
  const recordButton = document.querySelector('.record-button')
  const personOneChatButton = document.querySelector('.person-one-button')
  const personTwoChatButton = document.querySelector('.person-two-button')

  chatBox.addEventListener('keypress', (event) => {
    chatBox.style.height = "1px"
    chatBox.style.height = (3+chatBox.scrollHeight)+"px"
    if (chatBox.value.trim().length >= 1) {
      sendChatButton.style.display = 'block'
      recordButton.style.display = 'none'
      if (event.keyCode == 13 && !event.shiftKey) {
        event.preventDefault()
        document.querySelector('.person-button-container').style.display = 'block'
      }
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
  deleteChatItem()
}

export default addChatPageEvents
export { addChatItemEvents, addChatItemToDom }
