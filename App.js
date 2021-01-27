import { request } from "./dataStorage.js"
import DefaultNav from "./modules/defaultNav/defaultNav.js"
import defaultNavEvents from "./modules/defaultNav/events.js"
import DefaultPage from "./modules/defaultPage/defaultPage.js"
import switchCurrentPage from "./modules/helper.js"

const App = () => {
  return `
    <section class="page-container">
      <div class="current-nav">
        ${DefaultNav()}
      </div>
      <div class="current-page">
      </div>
    </section>
  `
}

request.onsuccess = async () => {
  document.querySelector('.root').innerHTML = App()
  const currentPage = localStorage.getItem('currentPage')
  if (currentPage === 'chatPage') {
    await switchCurrentPage(currentPage)
  } else {
    switchCurrentPage(currentPage)
  }
  defaultNavEvents()
}
