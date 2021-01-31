import switchCurrentPage from "../helper.js"

const viewStatusPageEvent = () => {
  const entryBackground = document.querySelector('#entryBackground')
  document.querySelector('.entry-container').firstElementChild.classList.add('current')

  const addEntryBackground = () => {
    const entry = document.querySelector('.current').lastElementChild
    if (entry.className === 'entry-text') {
      entryBackground.style.backgroundColor = entry.style.backgroundColor
    } else {
      entryBackground.style.backgroundImage = `url(${entry.src})`
    }
  }

  addEntryBackground()

  const bars = document.querySelectorAll('.bar')
  let width = 1
  let interval = setInterval(() => {
    if (width >= 100) {
      const statusItems = document.querySelectorAll('.status-item')
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

  // const statusItems = document.querySelectorAll('.status-item')
  // for (let index = 0; index < statusItems.length; index++) {
  //   const statusItem = statusItems[index];
  //   statusItem.addEventListener('', () => {

  //   })
  // }
}

export default viewStatusPageEvent
