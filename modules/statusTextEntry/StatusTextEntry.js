const statusTextEntry = () => {
  return `
    <div id="statusTextContainer">
      <textarea id="statusTextInput" placeholder="Type a status"></textarea>
      <button id="backButton" class="icon"><i class="material-icons">&#xe5c4;</i></button>
      <button id="colorButton" class="icon"><i class="fa fa-paint-brush"></i></button>
      <button id="sendTextButton" class="icon"><i class="material-icons">&#xe163;</i></button>
    </div>
  `
}

export default statusTextEntry
