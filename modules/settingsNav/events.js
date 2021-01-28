import switchCurrentPage from "../helper.js"

const settingsNavEvents = () => {
  document.querySelector('.back-button').addEventListener('click', () => {
    switchCurrentPage('defaultNav')
  })
}

export default settingsNavEvents
