import ChatPage from "./modules/chatPage/chatPage.js"
import chatPageEvents from "./modules/chatPage/events.js"
import DefaultNav from "./modules/defaultNav/defaultNav.js"

const App = () => {
  return `
    <section class="page-container">
      <div>
        ${DefaultNav()}
      </div>
      ${ChatPage()}
    </section>
  `
}

document.querySelector('.root').innerHTML = App()
chatPageEvents()
