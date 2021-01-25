import chatPage from "./modules/chatPage/chatPage.js"
import defaultNav from "./modules/defaultNav/defaultNav.js"

const App = () => {
  return `
    <section class="page-container">
      <div>
        ${defaultNav()}
      </div>
      ${chatPage()}
    </section>
  `
}

document.querySelector('.root').innerHTML = App()
