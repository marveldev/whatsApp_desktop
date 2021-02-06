import DefaultPage from "./defaultPage/DefaultPage.js"
import ChatPage from "./chatPage/ChatPage.js"
import chatPageEvents, { chatItemEvents } from "./chatPage/events.js"
import ContactPane from "./contactPane/ContactPane.js"
import contactPaneEvents from "./contactPane/events.js"
import SettingsPane from "./settingsPane/SettingsPane.js"
import settingsPaneEvents from "./settingsPane/events.js"
import StatusPage from "./statusPage/StatusPage.js"
import StatusPane from "./statusPane/StatusPane.js"
import statusPageEvent from "./statusPage/events.js"
import statusPaneEvent from "./statusPane/events.js"
import StatusTextEntry from "./statusTextEntry/StatusTextEntry.js"
import statusTextEntryEvent from "./statusTextEntry/events.js"
import ViewStatusPage from "./viewStatusPage/ViewStatusPage.js"
import viewStatusPageEvent from "./viewStatusPage/events.js"

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('.current-page')
  const currentNav = document.querySelector('.current-nav')

  switch (page) {
    case 'contactPane':
      currentNav.innerHTML = ContactPane()
      contactPaneEvents()
      break;
    case 'settingsPane':
      currentNav.innerHTML = SettingsPane()
      settingsPaneEvents()
      break;
    case 'chatPage':
      currentPage.innerHTML = await ChatPage()
      chatPageEvents()
      chatItemEvents()
      break;
    case 'statusPage':
      currentPage.innerHTML = await StatusPage()
      currentNav.innerHTML = await StatusPane()
      statusPaneEvent()
      statusPageEvent()
      break;
    case 'statusPane':
      currentNav.innerHTML = await StatusPane()
      statusPaneEvent()
      break;
    case 'statusTextEntry':
      currentNav.innerHTML = StatusTextEntry()
      statusTextEntryEvent()
      break;
    case 'viewStatusPage':
      currentPage.innerHTML = await ViewStatusPage()
      viewStatusPageEvent()
      break;
    case 'defaultPage':
      currentNav.innerHTML = ContactPane()
      currentPage.innerHTML = DefaultPage()
      contactPaneEvents()
      break;
    default:
      currentPage.innerHTML = DefaultPage()
      break;
  }
}

export default switchCurrentPage
