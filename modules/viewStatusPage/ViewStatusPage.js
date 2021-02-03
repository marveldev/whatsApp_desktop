import { getEntryFromDb } from "../../dataStorage.js"

const viewStatusPage = async () => {
  const statusData = await getEntryFromDb('statusData')

  const statusEntryItems = statusData.map(statusEntryItem => {
    const { textValue, photoSource, entryBackgroundColor } = statusEntryItem
    if (textValue.length >= 1) {
      return `
        <div class="status-item">
          <div class="progress-bar"><div class="bar"></div></div>
          <div class="entry-text" style="background-color:${entryBackgroundColor};">
            ${textValue}
          </div>
        </div>
      `
    } else {
      return `
        <div class="status-item">
          <div class="progress-bar"><div class="bar"></div></div>
          <img src="${photoSource}" class="entry-photo" alt="photo">
        </div>
      `
    }
  })

  return `
    <div class="view-status-page">
      <div class="button-container">
        <button class="previous-button"><i class="material-icons">&#xe5c4;</i></button>
        <button class="close-button">X</button>
        <button id="previousButton"><i class="material-icons">&#xe314;</i></button>
        <button id="nextButton"><i class="material-icons">&#xe315;</i></button>
      </div>
      <div class="entry-container">
        ${statusEntryItems.join('')}
      </div>
    </div>
  `
}

export default viewStatusPage
