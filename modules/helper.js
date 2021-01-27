import DefaultPage from "./defaultPage/defaultPage.js"
import ChatPage from "./chatPage/chatPage.js"
import chatPageEvents, { chatItemEvents } from "./chatPage/events.js"
import DefaultNav from "./defaultNav/defaultNav.js"
import defaultNavEvents from "./defaultNav/events.js"

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('.current-page')
  const currentNav = document.querySelector('.current-nav')
  localStorage.setItem('currentPage', page)

  switch (page) {
    case 'defaultNav':
      currentNav.innerHTML = DefaultNav()
      defaultNavEvents()
      break;
    case 'chatPage':
      currentPage.innerHTML = await ChatPage()
      chatPageEvents()
      chatItemEvents()
      break;
    default:
      currentPage.innerHTML = DefaultPage()
      break;
  }
}

export default switchCurrentPage
