import switchCurrentPage from "../helper.js"

const viewStatusPageEvent = () => {
  document.querySelector('.entry-container').firstElementChild.classList.add('current')
  const statusItems = document.querySelectorAll('.status-item')
  const bars = document.querySelectorAll('.bar')
  let width = 1

  const addEntryBackground = () => {
    const entryBackground = document.querySelector('#entryBackground')
    const entry = document.querySelector('.current').lastElementChild
    if (entry.className === 'entry-text') {
      entryBackground.style.backgroundColor = entry.style.backgroundColor
    } else {
      entryBackground.style.backgroundImage = `url(${entry.src})`
    }
  }

  addEntryBackground()

  let interval = setInterval(() => {
    if (width >= 100) {
      const currentStatusItem = document.querySelector('.current')
      currentStatusItem.classList.remove('current')
      if (currentStatusItem.nextElementSibling) {
        currentStatusItem.nextElementSibling.classList.add('current')
        addEntryBackground()
        width = 1
      } else {
        statusItems[0].classList.add('current')
        document.querySelector('.current-nav').style.display = 'block'
        switchCurrentPage('statusPage')
        clearInterval(interval)
      }
    } else {
      width++
      for (let index = 0; index < bars.length; index++) {
        const bar = bars[index]
        bar.style.width = width + '%'
      }
    }
  }, 30)

  document.querySelector('.previous-button').addEventListener('click', () => {
    document.querySelector('.current-nav').style.display = 'block'
    switchCurrentPage('statusPage')
    clearInterval(interval)
  })

  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.current-nav').style.display = 'block'
    switchCurrentPage('defaultPage')
    clearInterval(interval)
  })

  document.querySelector('#previousButton').addEventListener('click', () => {
    clearInterval(interval)
    const currentStatusItem = document.querySelector('.current')
    currentStatusItem.classList.remove('current')
    if (currentStatusItem.previousElementSibling) {
      currentStatusItem.previousElementSibling.classList.add('current')
      addEntryBackground()
    } else {
      statusItems[statusItems.length - 1].classList.add('current')
      document.querySelector('.current-nav').style.display = 'block'
      switchCurrentPage('statusPage')
    }
  })

  document.querySelector('#nextButton').addEventListener('click', () => {
    clearInterval(interval)
    const currentStatusItem = document.querySelector('.current')
    currentStatusItem.classList.remove('current')
    if (currentStatusItem.nextElementSibling) {
      currentStatusItem.nextElementSibling.classList.add('current')
      addEntryBackground()
    } else {
      statusItems[0].classList.add('current')
      document.querySelector('.current-nav').style.display = 'block'
      switchCurrentPage('statusPage')
    }
  })
}

export default viewStatusPageEvent
