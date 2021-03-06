import { addEntryToDb } from "../../dataStorage.js"
import switchCurrentPage from "../helper.js"

const addStatusFile = (textValue, photoSource, entryBackgroundColor) => {
  const itemId = 'id' + Date.parse(new Date()).toString()
  let statusData

  if (textValue) {
    statusData =  `
      <div id="${itemId}" class="status-entry-item">
        <button class="delete-entry-button"><i class="fa fa-trash"></i></button>
        <div class="status-text" style="background-color:${entryBackgroundColor};">
          ${textValue}
        </div>
        <small>today</small>
      </div>
    `
  } else {
    statusData =  `
      <div id="${itemId}" class="status-entry-item">
        <button class="delete-entry-button"><i class="fa fa-trash"></i></button>
        <img src="${photoSource}" class="status-entry image" alt="photo">
        <small>today</small>
      </div>
    `
  }

  document.querySelector('#statusMessage').innerHTML = 'View your update'
  document.querySelector('.status-entry-container').innerHTML += statusData

  const statusObject = {
    itemId: itemId,
    textValue: textValue || '',
    photoSource: photoSource || '',
    entryBackgroundColor: entryBackgroundColor,
    timeOfStatusUpload: new Date()
  }

  addEntryToDb('statusData', statusObject)
}

const addStatusPaneEvents = () => {
  const statusFilePicker = document.querySelector('#addPhotoStatus')
  statusFilePicker.addEventListener('change', () => {
    const photoReader = new FileReader()
    photoReader.readAsDataURL(statusFilePicker.files[0])
    photoReader.addEventListener('load', () => {
      addStatusFile(null, photoReader.result)
      switchCurrentPage('statusPane')
    })
  })

  document.querySelector('#addTextStatusButton').addEventListener('click', () => {
    switchCurrentPage('statusTextEntry')
    document.querySelector('.page-overlay').style.display = 'block'
    document.querySelector('.page-overlay').style.backgroundColor = '#00000085'
  })

  document.querySelector('.view-status').addEventListener('click', () => {
    document.querySelector('.current-pane').style.display = 'none'
    switchCurrentPage('viewStatusEntry')
  })
}

export default addStatusPaneEvents
export { addStatusFile }
