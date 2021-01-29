import { addEntryToDb } from "../../dataStorage.js"

const addStatusFile = (textValue, photoSource, entryBackgroundColor) => {
  const itemId = 'id' + Date.parse(new Date()).toString()
  let statusData

  if (textValue) {
    statusData =  `
      <div class="status-text status-data" style="background-color:${entryBackgroundColor};">
        ${textValue}
      </div>
    `
  } else {
    statusData =  `
      <div class="status-entry-item">
        <button class="delete-entry-button">X</button>
        <img src="${photoSource}" class="status-entry image" alt="photo">
        <small>today</small>
      </div>
    `
  }

  document.querySelector('#statusMessage').innerHTML = 'View your update'
  document.querySelector('.status-entry-container').innerHTML += statusData
  document.querySelector('.view-status').style.display = 'flex'
  document.querySelector('.add-status').style.display = 'none'

  const statusObject = {
    itemId: itemId,
    textValue: textValue || '',
    photoSource: photoSource || '',
    entryBackgroundColor: entryBackgroundColor,
    timeOfStatusUpload: new Date()
  }
  addEntryToDb('statusData', statusObject)
}

const statusNavEvent = () => {
  const statusFilePicker = document.querySelector('#addPhotoStatus')
  statusFilePicker.addEventListener('change', () => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(statusFilePicker.files[0])
    photoReader.addEventListener('load', () => {
      addStatusFile(null, photoReader.result)
    })
  })

  // const statusTextInput = document.querySelector('#statusTextInput')
  // statusTextInput.addEventListener('keyup', () => {
  //   statusTextInput.style.height = "1px"
  //   statusTextInput.style.height = (3+statusTextInput.scrollHeight)+"px"
  //   if (statusTextInput.value.trim().length >= 1) {
  //     document.querySelector('#sendTextButton').style.display = 'block'
  //   } else {
  //     document.querySelector('#sendTextButton').style.display = 'none'
  //   }
  // })

  document.querySelector('#addTextStatusButton').addEventListener('click', () => {
    switchCurrentPage('statusTextEntry')
  })

  // document.querySelector('#backButton').addEventListener('click', () => {
  //   topNav.style.display = 'block'
  //   statusMainContent.style.display = 'block'
  //   statusTextContainer.style.display = 'none'
  // })

  // document.querySelector('#colorButton').addEventListener('click', () => {
  //   const randomColor = Math.floor(Math.random()*16777215).toString(16)
  //   statusTextContainer.style.backgroundColor = "#" + randomColor
  // })
}

export default statusNavEvent
