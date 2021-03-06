import { deleteEntry, getEntryFromDb } from "../../dataStorage.js"
import switchCurrentPage from "../helper.js"

const StatusPane = async () => {
  const statusData = await getEntryFromDb('statusData')
  statusData.map(statusItem => {
    const { timeOfStatusUpload } = statusItem
    const timeDifference = (new Date().getTime() - timeOfStatusUpload.getTime())
    const statusDuration = Math.floor(timeDifference/1000/60/60)
    if (statusDuration >= '24') {
      deleteEntry('statusData', statusItem.itemId)
      switchCurrentPage('statusPage')
    }
  })

  const photoSource = statusData[0] ? statusData[statusData.length - 1].photoSource : ''
  const textValue = statusData[0] ? statusData[statusData.length - 1].textValue : ''
  const entryBackgroundColor = statusData[0] ? statusData[statusData.length - 1].entryBackgroundColor : ''

  return `
    <div class="status-pane">
      <input type="file" id="addPhotoStatus">
      <button class="add-status photo-button" style="display:${statusData.length >= 1 ? 'none' : 'flex'};">
        <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          class="image" alt="photo">
        <div class="more-info">
          <label for="addPhotoStatus">
            <strong>My status</strong>
            <p>Tap to add status update</p>
          </label>
        </div>
      </button>
      <button class="view-status photo-button" style="display:${statusData.length >= 1 ? 'flex' : 'none'};">
        <div class="recent-entry" style="background-color:${entryBackgroundColor};background-image:url(${photoSource});">
          ${textValue}
        </div>
        <div class="more-info">
          <strong>My status</strong>
          <p>Tap to view status update</p>
        </div>
      </button>
      <div class="add-status-button">
        <button id="addTextStatusButton"><i class="material-icons">&#xe3c9;</i></button>
        <div>
          <label for="addPhotoStatus">
            <div id="addPhotoStatusButton"><i class="fa fa-camera"></i></div>
          </label>
        </div>
      </div>
    </div>
  `
}

export default StatusPane
