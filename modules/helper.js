import DefaultPage from "./defaultPage/DefaultPage.js"
import ChatPage from "./chatPage/ChatPage.js"
import chatPageEvents, { chatItemEvents } from "./chatPage/events.js"
import DefaultNav from "./defaultNav/DefaultNav.js"
import defaultNavEvents from "./defaultNav/events.js"
import SettingsNav from "./settingsNav/settingsNav.js"
import settingsNavEvents from "./settingsNav/events.js"

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('.current-page')
  const currentNav = document.querySelector('.current-nav')

  switch (page) {
    case 'defaultNav':
      currentNav.innerHTML = DefaultNav()
      defaultNavEvents()
      break;
    case 'settingsNav':
      currentNav.innerHTML = SettingsNav()
      settingsNavEvents()
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
