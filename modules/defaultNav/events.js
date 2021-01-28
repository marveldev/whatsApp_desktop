import switchCurrentPage from "../helper.js"

const defaultNavEvents = () => {
  const chatPersonButtons = document.querySelectorAll('.chat-person')
  for (let index = 0; index < chatPersonButtons.length; index++) {
    const chatPersonButton = chatPersonButtons[index];
    chatPersonButton.addEventListener('click', () => {
      switchCurrentPage('chatPage')
    })
  }

  document.querySelector('.top-nav-dropdown').addEventListener('click', () => {
    document.querySelector('.nav-dropdown-modal').style.display = 'block'
  })
}

export default defaultNavEvents
