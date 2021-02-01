import { getEntryFromDb } from "../../dataStorage.js"

const StatusPage = async () => {
  const statusData = await getEntryFromDb('statusData')
  const statusPhotoItems = statusData.map(statusPhotoItem => {
    const { itemId, photoSource } = statusPhotoItem
    if (photoSource) {
      return `
        <div id="${itemId}" class="status-entry-item">
          <button class="delete-entry-button"><i class="fa fa-trash"></i></button>
          <img src="${photoSource}" class="status-entry image" alt="photo">
          <small>today</small>
        </div>
      `
    }
  })

  const statusTextItems = statusData.map(statusTextItem => {
    const { itemId, textValue, entryBackgroundColor } = statusTextItem
    if (textValue.length >= 1) {
      return `
        <div id="${itemId}" class="status-entry-item">
          <button class="delete-entry-button"><i class="fa fa-trash"></i></button>
          <div class="status-text" style="background-color:${entryBackgroundColor};">
            ${textValue}
          </div>
          <small>today</small>
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
          ${statusTextItems.join('') || ''}
          ${statusPhotoItems.join('') || ''}
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
