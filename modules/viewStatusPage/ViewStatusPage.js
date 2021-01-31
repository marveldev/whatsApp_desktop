import { getEntryFromDb } from "../../dataStorage.js"

const viewStatusPage = async () => {
  const statusData = await getEntryFromDb('statusData')
  const statusPhotoItems = statusData.map(statusPhotoItem => {
    const { photoSource } = statusPhotoItem
    if (photoSource) {
      return `
        <div class="status-item">
          <div class="progress-bar"><div class="bar"></div></div>
          <img src="${photoSource}" class="entry-photo" alt="photo">
        </div>
      `
    }
  })

  const statusTextItems = statusData.map(statusTextItem => {
    const { textValue, entryBackgroundColor } = statusTextItem
    if (textValue.length >= 1) {
      return `
        <div class="status-item">
          <div class="progress-bar"><div class="bar"></div></div>
          <div class="entry-text" style="background-color:${entryBackgroundColor};">
            ${textValue}
          </div>
        </div>
      `
    }
  })

  return `
    <div class="view-status-page">
      <div id="entryBackground" style="background-image:url(${statusData[0].photoSource || ''});
        background-color:${statusData[0].entryBackgroundColor || ''};">
      </div>
      <button class="previous-button"><i class="material-icons">&#xe5c4;</i></button>
      <button class="close-button">X</button>
      <div class="entry-container">
        ${statusTextItems.join('')}
        ${statusPhotoItems.join('')}
      </div>
    </div>
  `
}

export default viewStatusPage
