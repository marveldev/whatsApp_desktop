import { deleteEntry, getEntryFromDb } from "../../dataStorage.js"

const StatusPage = async () => {
  const statusData = await getEntryFromDb('statusData')
  statusData.map(statusItem => {
    const { timeOfStatusUpload } = statusItem
    const timeDifference = (new Date().getTime() - timeOfStatusUpload.getTime())
    const statusDuration = Math.floor(timeDifference/1000/60/60)
    if (statusDuration >= '24') {
      deleteEntry('statusData', statusItem.itemId)
    }
  })

  const statusEntryItems = statusData.map(statusEntryItem => {
    const {
      itemId, textValue, photoSource, entryBackgroundColor, timeOfStatusUpload
    } = statusEntryItem
    const day = timeOfStatusUpload.getDay()
    const hour = timeOfStatusUpload.getHours()
    const minute = timeOfStatusUpload.getMinutes()
    const entryTime = new Date().getDay() > day ?
    `yesterday at ${hour + ":" + minute}` : `today at ${hour + ":" + minute}`

    if (textValue.length >= 1) {
      return `
        <div id="${itemId}" class="status-entry-item">
          <button class="delete-entry-button"><i class="fa fa-trash"></i></button>
          <div class="status-text" style="background-color:${entryBackgroundColor};">
            ${textValue}
          </div>
          <small>${entryTime}</small>
        </div>
      `
    } else {
      return `
        <div id="${itemId}" class="status-entry-item">
          <button class="delete-entry-button"><i class="fa fa-trash"></i></button>
          <img src="${photoSource}" class="status-entry image" alt="photo">
          <small>${entryTime}</small>
        </div>
      `
    }
  })

  return `
    <div class="status-page">
      <button id="closeButton">X</button>
      <div class="view-update-page">
        <p id="statusMessage">
          ${statusData.length == 0 ? "You've not added any status yet": 'View your update'}
        </p>
        <div class="status-entry-container">
          ${statusEntryItems.join('')}
        </div>
      </div>
      <div class="status-delete-modal">
        <p>Delete this status update? It will also be deleted for everyone who received it.</p>
        <button class="delete-item-button">DELETE</button>
        <button class="close-modal-button">CANCEL</button>
      </div>
    </div>
  `
}

export default StatusPage
