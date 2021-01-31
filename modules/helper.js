import DefaultPage from "./defaultPage/DefaultPage.js"
import ChatPage from "./chatPage/ChatPage.js"
import chatPageEvents, { chatItemEvents } from "./chatPage/events.js"
import DefaultNav from "./defaultNav/DefaultNav.js"
import defaultNavEvents from "./defaultNav/events.js"
import SettingsNav from "./settingsNav/settingsNav.js"
import settingsNavEvents from "./settingsNav/events.js"
import StatusPage from "./statusPage/statusPage.js"
import StatusNav from "./statusNav/StatusNav.js"
import statusPageEvent from "./statusPage/events.js"
import statusNavEvent from "./statusNav/events.js"
import statusTextEntry from "./statusTextEntry/statusTextEntry.js"
import statusTextEntryEvent from "./statusTextEntry/events.js"
import viewStatusPage from "./viewStatusPage/ViewStatusPage.js"
import viewStatusPageEvent from "./viewStatusPage/events.js"

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
    case 'statusPage':
      currentPage.innerHTML = await StatusPage()
      currentNav.innerHTML = await StatusNav()
      statusNavEvent()
      statusPageEvent()
      break;
    case 'statusTextEntry':
      currentNav.innerHTML = statusTextEntry()
      statusTextEntryEvent()
      break;
    case 'viewStatusPage':
      currentPage.innerHTML = await viewStatusPage()
      viewStatusPageEvent()
      break;
    case 'defaultPage':
      currentNav.innerHTML = DefaultNav()
      currentPage.innerHTML = DefaultPage()
      defaultNavEvents()
      break;
    default:
      currentPage.innerHTML = DefaultPage()
      break;
  }
}

export default switchCurrentPage
