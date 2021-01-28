import { getEntryFromDb } from "../../dataStorage.js"

const personOneDropDown = `
  <div id="personOneDropdown" class="dropdown-modal">
    <button>Message info</button>
    <button>Reply</button>
    <button>Forward message</button>
    <button>Star message</button>
    <button class="delete-modal-button">Delete message</button>
  </div>
`

const personTwoDropDown = `
  <div id="personTwoDropdown" class="dropdown-modal">
    <button>Reply</button>
    <button>Forward message</button>
    <button>Star message</button>
    <button class="delete-modal-button">Delete message</button>
  </div>
`

const ChatPage = async () => {
  const chatData = await getEntryFromDb('chatData')
  const chatItems = chatData.map(chatItem => {
    const { itemId, person, chatTime,  chatBoxValue } = chatItem
    return `
      <div class="${itemId}">
        <div class="${person === 'person-one' ? 'arrow-right' : 'arrow-left'}"></div>
        <div class="${person} chat-item">
          <div id="${person}" class="chat-text">
            <span class="message-value">${chatBoxValue}</span>
            <sub class="chat-time">${chatTime}</sub>
            <button class="chat-item-dropdown" title="${itemId}"><i class="material-icons">&#xe313;</i><sup>
          </div>
        </div>
      </div>
    `
  })

  return `
    <div class="chat-page">
      <div id="chatPageOverlay"></div>
      <div class="chat-top-nav">
        <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          class="image" alt="photo">
        <div class="person-info">
          <strong>Jack Williams</strong>
          <p>online</p>
        </div>
        <button type="button" class="chat-nav-dropdown">
          <i class="material-icons">&#xe5d4;</i>
        </button>
      </div>
      <div class="delete-modal">
        <p>Delete message?</p>
        <div>
          <button class="cancel-button">CANCEL</button>
          <button class="delete-button">DELETE FOR ME</button>
        </div>
      </div>
      ${personOneDropDown}
      ${personTwoDropDown}
      <div class="chat-container">${chatItems.join('')}</div>
      <div id="chatInputContent">
        <div>
          <div class="add-buttons">
            <button class="smiley-icon"><i class="material-icons">&#xe7f2;</i></button>
            <button class="clip-icon"><i class="fa fa-paperclip"></i></button>
          </div>
          <textarea class="chat-box" placeholder="Type a message"></textarea>
          <div class="add-buttons">
            <button type="button" class="record-button"><i class="fa fa-microphone"></i></button>
            <button type="button" class="send-button"><i class="material-icons">&#xe163;</i></button>
          </div>
        </div>
        <span class="person-button-container">
          <button type="button" class="person-one-button">Person1</button>
          <button type="button" class="person-two-button">Person2</button>
        </span>
      </div>
    </div>
  `
}

export default ChatPage
