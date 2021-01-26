import DefaultPage from "./defaultPage/defaultPage.js"
import ChatPage from "./chatPage/chatPage.js"
import chatPageEvents from "./chatPage/events.js"

const switchCurrentPage = (nav, page) => {
  const currentPage = document.querySelector('.current-page')
  localStorage.setItem('currentNav', nav)
  localStorage.setItem('currentPage', page)

  switch (page) {
    case 'defaultPage':
      currentPage.innerHTML = DefaultPage()
      break;
    case 'chatPage':
      currentPage.innerHTML = ChatPage()
      chatPageEvents()
      break;
    default:
      currentPage.innerHTML = DefaultPage()
      break;
  }
}

export default switchCurrentPage
