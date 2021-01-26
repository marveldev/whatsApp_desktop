import DefaultPage from "./defaultPage/defaultPage.js"
import ChatPage from "./chatPage/chatPage.js"
import chatPageEvents from "./chatPage/events.js"
import DefaultNav from "./defaultNav/defaultNav.js"
import defaultNavEvents from "./defaultNav/events.js"

const switchCurrentPage = (page) => {
  const currentPage = document.querySelector('.current-page')
  const currentNav = document.querySelector('.current-nav')
  localStorage.setItem('currentPage', page)

  switch (page) {
    case 'defaultNav':
      currentNav.innerHTML = DefaultNav()
      defaultNavEvents()
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
