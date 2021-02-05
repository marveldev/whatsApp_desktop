import switchCurrentPage from "../helper.js";

const contactPaneEvents = () => {
  const chatPersonButtons = document.querySelectorAll('.chat-person')
  for (let index = 0; index < chatPersonButtons.length; index++) {
    const chatPersonButton = chatPersonButtons[index];
    chatPersonButton.addEventListener('click', () => {
      switchCurrentPage('chatPage')
    })
  }

  document.querySelector('.top-nav-dropdown').addEventListener('click', () => {
    document.querySelector('.nav-dropdown-modal').style.display = 'block'
    document.querySelector('#topPageOverlay').style.display = 'block'
  })

  document.querySelector('.settings-button').addEventListener('click', () => {
    document.querySelector('.nav-dropdown-modal').style.display = 'none'
    switchCurrentPage('settingsPane')
  })

  document.querySelector('.status-button').addEventListener('click', () => {
    switchCurrentPage('statusPage')
  })

  document.querySelector('#topPageOverlay').addEventListener('click', () => {
    document.querySelector('.nav-dropdown-modal').style.display = 'none'
    document.querySelector('#topPageOverlay').style.display = 'none'
  })
}

export default contactPaneEvents
