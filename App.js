import { request } from "./dataStorage.js"
import contactPane from "./modules/contactPane/contactPane.js"
import contactPaneEvents from "./modules/contactPane/events.js"
import DefaultPage from "./modules/defaultPage/DefaultPage.js"

const App = () => {
  return `
    <section class="page-overlay"></section>
    <section class="page-container">
      <div class="current-nav">
        ${contactPane()}
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
  contactPaneEvents()
}
