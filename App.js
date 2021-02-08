import { request } from "./dataStorage.js"
import ContactPane from "./modules/contactPane/ContactPane.js"
import addContactPaneEvents from "./modules/contactPane/events.js"
import DefaultPage from "./modules/defaultPage/DefaultPage.js"
import { addChatPusherEvents, addStatusPusherEvents } from "./pusher.js"

const App = () => {
  return `
    <section class="page-overlay"></section>
    <section class="page-container">
      <div class="current-pane">
        ${ContactPane()}
      </div>
      <div class="current-page">
        ${DefaultPage()}
      </div>
    </section>
  `
}

request.onsuccess = async () => {
  document.querySelector('.root').innerHTML = App()
  document.body.className = localStorage.getItem('theme')
  addContactPaneEvents()
  addChatPusherEvents()
  addStatusPusherEvents()
}
