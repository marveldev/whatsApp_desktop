import switchCurrentPage from "../helper.js"

const statusPageEvent = () => {
  document.querySelector('#closeButton').addEventListener('click', () => {
    switchCurrentPage('defaultPage')
  })
}

export default statusPageEvent
