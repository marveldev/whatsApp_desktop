import { request } from "./dataStorage.js"
import DefaultNav from "./modules/defaultNav/defaultNav.js"
import defaultNavEvents from "./modules/defaultNav/events.js"
import DefaultPage from "./modules/defaultPage/DefaultPage.js"

const App = () => {
  return `
    <section class="page-overlay"></section>
    <section class="page-container">
      <div class="current-nav">
        ${DefaultNav()}
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
  defaultNavEvents()
}
