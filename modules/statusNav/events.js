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
        <img src="${photoSource}" 
          class="status-entry image" alt="photo">
        <small>today</small>
      </div>
    `
  }

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
      console.log(photoReader.result);
      addStatusFile(null, photoReader.result)
      // recentEntryDiv.innerText = ''
      // recentEntryDiv.style.backgroundImage = `url(${photoReader.result})`
    })
  })
}

export default statusNavEvent
