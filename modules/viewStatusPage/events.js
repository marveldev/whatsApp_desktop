import switchCurrentPage from "../helper.js"

const viewStatusPageEvent = () => {
  document.querySelector('.previous-button').addEventListener('click', () => {
    document.querySelector('.current-nav').style.display = 'block'
    switchCurrentPage('statusPage')
  })

  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.current-nav').style.display = 'block'
    switchCurrentPage('defaultPage')
  })
}

export default viewStatusPageEvent
