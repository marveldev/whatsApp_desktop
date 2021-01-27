const chatDropDownModal = `
  <div id="chatDropdown" class="dropdown-modal">
    <button>Reply</button>
    <button>Forward message</button>
    <button>Star message</button>
    <button>Delete message</button>
  </div>
`

const ChatPage = () => {
  return `
    <div class="chat-page">
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
      ${chatDropDownModal}
      <div class="chat-container"></div>
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
