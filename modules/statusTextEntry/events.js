import switchCurrentPage from "../helper.js"
import { addStatusFile } from "../statusPane/events.js"

const statusTextEntryEvent = () => {
  const statusTextInput = document.querySelector('#statusTextInput')
  const statusTextContainer = document.querySelector('#statusTextContainer')

  statusTextInput.addEventListener('keyup', () => {
    if (statusTextInput.value.trim().length >= 1) {
      document.querySelector('#sendTextButton').style.display = 'block'
    } else {
      document.querySelector('#sendTextButton').style.display = 'none'
    }
  })

  document.querySelector('#backButton').addEventListener('click', () => {
    switchCurrentPage('statusPage')
    document.querySelector('.page-overlay').style.display = 'none'
    document.querySelector('.page-overlay').style.backgroundColor = '#fbfaf9b4'
  })

  document.querySelector('#colorButton').addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    statusTextContainer.style.backgroundColor = "#" + randomColor
  })

  document.querySelector('#sendTextButton').addEventListener('click', () => {
    const textValue = statusTextInput.value
    const entryBackgroundColor = statusTextContainer.style.backgroundColor || '#1C8B82'
    addStatusFile(textValue, null, entryBackgroundColor)
    statusTextInput.value = ''
    document.querySelector('.page-overlay').style.display = 'none'
    document.querySelector('.page-overlay').style.backgroundColor = '#fbfaf9b4'
    switchCurrentPage('statusPage')
  })
}

export default statusTextEntryEvent
