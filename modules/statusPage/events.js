import switchCurrentPage from "../helper.js"

const statusPageEvent = () => {
  const statusEntryItems = document.querySelectorAll('.status-entry-item')

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
}

export default statusPageEvent
