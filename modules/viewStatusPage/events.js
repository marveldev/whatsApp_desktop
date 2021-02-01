import switchCurrentPage from "../helper.js"

const viewStatusPageEvent = () => {
  const statusItems = document.querySelectorAll('.status-item')
  const bars = document.querySelectorAll('.bar')
  let interval
  let index = 0

  const addEntryBackground = () => {
    const entryBackground = document.querySelector('#entryBackground')
    const entry = document.querySelector('.current').lastElementChild
    if (entry.className === 'entry-text') {
      entryBackground.style.backgroundColor = entry.style.backgroundColor
    } else {
      entryBackground.style.backgroundImage = `url(${entry.src})`
    }
  }

  const statusSlideShow = () => {
    let width = 1
    statusItems[index].classList.add('current')
    addEntryBackground()

    interval = setInterval( () => {
      if (width >= 100) {
        statusItems[index].classList.remove('current')
        index++
        width = 1
        if (index === statusItems.length) {
          index = 0
          clearInterval(interval)
          document.querySelector('.current-nav').style.display = 'block'
          switchCurrentPage('statusPage')
        }
        statusItems[index].classList.add('current')
        addEntryBackground()
      } else {
        width++
        for (let index = 0; index < bars.length; index++) {
          const bar = bars[index]
          bar.style.width = width + '%'
        }
      }
    }, 30)
  }

  statusSlideShow()

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

  document.querySelector('#nextButton').addEventListener('click', () => {
    clearInterval(interval)
    statusItems[index].classList.remove('current')
    index++
    if (index === statusItems.length) {
      index = 0
      document.querySelector('.current-nav').style.display = 'block'
      switchCurrentPage('statusPage')
    }

    statusItems[index].classList.add('current')
    addEntryBackground()
  })

  document.querySelector('#previousButton').addEventListener('click', () => {
    clearInterval(interval)
    statusItems[index].classList.remove('current')
    index++
    statusItems[statusItems.length - index].classList.add('current')
    addEntryBackground()
    if (index === statusItems.length) {
      index = 0
      document.querySelector('.current-nav').style.display = 'block'
      switchCurrentPage('statusPage')
    }
  })
}

export default viewStatusPageEvent
