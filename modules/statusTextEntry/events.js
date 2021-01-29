import statusNavEvent from "../statusNav/events.js"
import StatusNav from "../statusNav/StatusNav.js"

const statusTextEntryEvent = () => {
  const statusTextInput = document.querySelector('#statusTextInput')
  statusTextInput.addEventListener('keyup', () => {
    if (statusTextInput.value.trim().length >= 1) {
      document.querySelector('#sendTextButton').style.display = 'block'
    } else {
      document.querySelector('#sendTextButton').style.display = 'none'
    }
  })

  document.querySelector('#backButton').addEventListener('click', () => {
    document.querySelector('.current-nav').innerHTML = StatusNav()
    statusNavEvent()
  })

  document.querySelector('#colorButton').addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    document.querySelector('#statusTextContainer').style.backgroundColor = "#" + randomColor
  })
}

export default statusTextEntryEvent
