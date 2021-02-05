import DefaultPage from "./defaultPage/DefaultPage.js"
import ChatPage from "./chatPage/ChatPage.js"
import chatPageEvents, { chatItemEvents } from "./chatPage/events.js"
import contactPane from "./contactPane/contactPane.js"
import contactPaneEvents from "./contactPane/events.js"
import settingsPane from "./settingsPane/settingsPane.js"
import settingsPaneEvents from "./settingsPane/events.js"
import StatusPage from "./statusPage/statusPage.js"
import statusPane from "./statusPane/statusPane.js"
import statusPageEvent from "./statusPage/events.js"
import statusPaneEvent from "./statusPane/events.js"
import statusTextEntry from "./statusTextEntry/statusTextEntry.js"
import statusTextEntryEvent from "./statusTextEntry/events.js"
import viewStatusPage from "./viewStatusPage/ViewStatusPage.js"
import viewStatusPageEvent from "./viewStatusPage/events.js"

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('.current-page')
  const currentNav = document.querySelector('.current-nav')

  switch (page) {
    case 'contactPane':
      currentNav.innerHTML = contactPane()
      contactPaneEvents()
      break;
    case 'settingsPane':
      currentNav.innerHTML = settingsPane()
      settingsPaneEvents()
      break;
    case 'chatPage':
      currentPage.innerHTML = await ChatPage()
      chatPageEvents()
      chatItemEvents()
      break;
    case 'statusPage':
      currentPage.innerHTML = await StatusPage()
      currentNav.innerHTML = await statusPane()
      statusPaneEvent()
      statusPageEvent()
      break;
    case 'statusPane':
      currentNav.innerHTML = await statusPane()
      statusPaneEvent()
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
      currentNav.innerHTML = contactPane()
      currentPage.innerHTML = DefaultPage()
      contactPaneEvents()
      break;
    default:
      currentPage.innerHTML = DefaultPage()
      break;
  }
}

export default switchCurrentPage
