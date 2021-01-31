import switchCurrentPage from "../helper.js"

const viewStatusPageEvent = () => {
  document.querySelector('.entry-container').firstElementChild.classList.add('current')
  const entryBackground = document.querySelector('#entryBackground')

  const bars = document.querySelectorAll('.bar')
  let width = 1
  let interval = setInterval(() => {
    if (width >= 100) {
      const slides = document.querySelectorAll('.status-item')
      const currentSlide = document.querySelector('.current')
      currentSlide.classList.remove('current')
      if (currentSlide.nextElementSibling) {
        currentSlide.nextElementSibling.classList.add('current')
        const entry = document.querySelector('.current').lastElementChild
        if (entry.className === 'entry-text') {
          entryBackground.style.backgroundColor = entry.style.backgroundColor
        } else {
          entryBackground.style.backgroundImage = `url(${entry.src})`
        }
        width = 1
      } else {
        slides[0].classList.add('current')
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
