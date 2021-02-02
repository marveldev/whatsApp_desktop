import switchCurrentPage from "../helper.js"

const settingsNavEvents = () => {
  const theme = localStorage.getItem('theme')
  const radioButtons = document.querySelectorAll('.radio')
  const checkedRadioButton = document.querySelector(`input[value=${theme}]`)
  let checkBox

  theme ? checkedRadioButton.setAttribute('checked', '') : ''

  document.querySelector('.back-button').addEventListener('click', () => {
    switchCurrentPage('defaultNav')
  })

  document.querySelector('.theme-button').addEventListener('click', () => {
    document.querySelector('.page-overlay').style.display = 'block'
    document.querySelector('.theme-container').style.display = 'block'
  })

  document.querySelector('.close-theme-button').addEventListener('click', () => {
    document.querySelector('.page-overlay').style.display = 'none'
    document.querySelector('.theme-container').style.display = 'none'
  })

  for (let index = 0; index <  radioButtons.length; index++) {
    const  radioButton =  radioButtons[index]
    radioButton.addEventListener('change', () => {
      checkBox = radioButton.firstElementChild
    })
  }

  document.querySelector('.confirm-theme-button').addEventListener('click', () => {
    const checkBoxValue = checkBox.value
    localStorage.setItem('theme', checkBoxValue)
    document.body.className = checkBoxValue
    checkBox.setAttribute('checked', '')
    document.querySelector('.page-overlay').style.display = 'none'
    document.querySelector('.theme-container').style.display = 'none'
  })
}

export default settingsNavEvents
