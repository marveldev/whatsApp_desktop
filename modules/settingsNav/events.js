import switchCurrentPage from "../helper.js"

const settingsNavEvents = () => {
  document.querySelector('.back-button').addEventListener('click', () => {
    switchCurrentPage('defaultNav')
  })

  document.querySelector('.theme-button').addEventListener('click', () => {
    document.querySelector('.page-overlay').style.display = 'block'
    document.querySelector('.theme-container').style.display = 'block'
  })
}

export default settingsNavEvents
