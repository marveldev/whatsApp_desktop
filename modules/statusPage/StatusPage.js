import { getEntryFromDb } from "../../dataStorage.js"

const StatusPage = async () => {
  const statusData = await getEntryFromDb('statusData')
  const statusPhotoItems = statusData.map(statusPhotoItem => {
    const { photoSource } = statusPhotoItem
    if (photoSource) {
      return `
        <div class="status-entry-item">
          <button class="delete-entry-button">X</button>
          <img src="${photoSource}" class="status-entry image" alt="photo">
          <small>today</small>
        </div>
      `
    }
  })

  const statusTextItems = statusData.map(statusTextItem => {
    const { textValue, entryBackgroundColor } = statusTextItem
    if (textValue.length >= 1) {
      return `
        <div class="status-entry-item">
          <button class="delete-entry-button">X</button>
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
          ${statusPhotoItems.join('') || ''}
          ${statusTextItems.join('') || ''}
        </div>
      </div>
    </div>
  `
}

export default StatusPage
