import { deleteEntry } from "../../dataStorage.js"
import switchCurrentPage from "../helper.js"

const statusPageEvent = () => {
  const statusEntryItems = document.querySelectorAll('.status-entry-item')
  let itemId

  document.querySelector('#closeButton').addEventListener('click', () => {
    switchCurrentPage('defaultPage')
  })

  for (let index = 0; index < statusEntryItems.length; index++) {
    const statusEntryItem = statusEntryItems[index];
    statusEntryItem.addEventListener('mouseover', () => {
      statusEntryItem.firstElementChild.style.visibility = 'visible'
    })

    statusEntryItem.addEventListener('mouseout', () => {
      statusEntryItem.firstElementChild.style.visibility = 'hidden'
    })
  }

  const deleteEntryButtons = document.querySelectorAll('.delete-entry-button')
  for (let index = 0; index < deleteEntryButtons.length; index++) {
    const deleteEntryButton = deleteEntryButtons[index]
    deleteEntryButton.addEventListener('click', () => {
      document.querySelector('.page-overlay').style.display = 'block'
      document.querySelector('.status-delete-modal').style.display = 'block'
      itemId = deleteEntryButton.parentElement.id
    })
  }

  document.querySelector('.close-modal-button').addEventListener('click', () => {
    document.querySelector('.page-overlay').style.display = 'none'
    document.querySelector('.status-delete-modal').style.display = 'none'
  })

  document.querySelector('.delete-item-button').addEventListener('click', () => {
    const statusData = document.querySelector(`#${itemId}`)
    const statusEntryContainer = document.querySelector('.status-entry-container')
    statusEntryContainer.removeChild(statusData)
    if (statusEntryContainer.innerHTML.trim().length === 0) {
      document.querySelector('.view-status').style.display = 'none'
      document.querySelector('.add-status').style.display = 'flex'
      document.querySelector('#statusMessage').innerHTML = `You've not added any status yet`
    }

    document.querySelector('.page-overlay').style.display = 'none'
    document.querySelector('.status-delete-modal').style.display = 'none'
    deleteEntry('statusData', itemId)
  })
}

export default statusPageEvent
