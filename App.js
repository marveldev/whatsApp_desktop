import { addEntryToDb, request } from "./dataStorage.js"
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

  const pusher = new Pusher('2de3c2f998e996603b10', {
    cluster: 'eu'
  })

  const channel = pusher.subscribe('chat')
  channel.bind('send-message', data => {
    const { person, message } = data
    const itemId = 'id' + Date.parse(new Date()).toString()
    const chatTime = new Date().toTimeString().substr(0, 5)
    const chatObject = {
      itemId: itemId,
      person: person,
      chatTime: chatTime,
      chatBoxValue: message
    }
    addEntryToDb('chatData', chatObject)
  })
}
