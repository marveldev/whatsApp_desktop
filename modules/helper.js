import DefaultPage from "./defaultPage/DefaultPage.js"
import ChatPage from "./chatPage/ChatPage.js"
import addChatPageEvents, { addChatItemEvents } from "./chatPage/events.js"
import ContactPane from "./contactPane/ContactPane.js"
import addContactPaneEvents from "./contactPane/events.js"
import SettingsPane from "./settingsPane/SettingsPane.js"
import addSettingsPaneEvents from "./settingsPane/events.js"
import StatusPage from "./statusPage/StatusPage.js"
import StatusPane from "./statusPane/StatusPane.js"
import addStatusPageEvents from "./statusPage/events.js"
import addStatusPaneEvents from "./statusPane/events.js"
import StatusTextEntry from "./statusTextEntry/StatusTextEntry.js"
import addStatusEntryEvents from "./statusTextEntry/events.js"
import ViewStatusEntry from "./viewStatusEntry/ViewStatusEntry.js"
import addViewStatusEvents from "./viewStatusEntry/events.js"

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('.current-page')
  const currentNav = document.querySelector('.current-pane')

  switch (page) {
    case 'contactPane':
      currentNav.innerHTML = ContactPane()
      addContactPaneEvents()
      break;
    case 'settingsPane':
      currentNav.innerHTML = SettingsPane()
      addSettingsPaneEvents()
      break;
    case 'chatPage':
      currentPage.innerHTML = await ChatPage()
      addChatPageEvents()
      addChatItemEvents()
      break;
    case 'statusPage':
      currentPage.innerHTML = await StatusPage()
      currentNav.innerHTML = await StatusPane()
      addStatusPaneEvents()
      addStatusPageEvents()
      break;
    case 'statusPane':
      currentNav.innerHTML = await StatusPane()
      addStatusPaneEvents()
      break;
    case 'statusTextEntry':
      currentNav.innerHTML = StatusTextEntry()
      addStatusEntryEvents()
      break;
    case 'viewStatusEntry':
      currentPage.innerHTML = await ViewStatusEntry()
      addViewStatusEvents()
      break;
    case 'defaultPage':
      currentNav.innerHTML = ContactPane()
      currentPage.innerHTML = DefaultPage()
      addContactPaneEvents()
      break;
    default:
      currentPage.innerHTML = DefaultPage()
      break;
  }
}

export default switchCurrentPage
