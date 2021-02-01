import DefaultPage from "./defaultPage/DefaultPage.js"
import ChatPage from "./chatPage/ChatPage.js"
import chatPageEvents, { addChatItemToDom, chatItemEvents } from "./chatPage/events.js"
import DefaultNav from "./defaultNav/DefaultNav.js"
import defaultNavEvents from "./defaultNav/events.js"
import SettingsNav from "./settingsNav/settingsNav.js"
import settingsNavEvents from "./settingsNav/events.js"
import StatusPage from "./statusPage/statusPage.js"
import StatusNav from "./statusNav/StatusNav.js"
import statusPageEvent from "./statusPage/events.js"
import statusNavEvent, { addStatusFile } from "./statusNav/events.js"
import statusTextEntry from "./statusTextEntry/statusTextEntry.js"
import statusTextEntryEvent from "./statusTextEntry/events.js"
import viewStatusPage from "./viewStatusPage/ViewStatusPage.js"
import viewStatusPageEvent from "./viewStatusPage/events.js"
import { addEntryToDb } from "../dataStorage.js"

const pusherMessage = (page) => {
  const itemId = 'id' + Date.parse(new Date()).toString()
  const chatTime = new Date().toTimeString().substr(0, 5)
  const pusher = new Pusher('2de3c2f998e996603b10', {
    cluster: 'eu'
  })

  if (page === 'chatPage') {
    const channel = pusher.subscribe('chat')
    channel.bind('send-message', data => {
      const { person, message } = data
      addChatItemToDom(person, message)
      console.log('pusher success');
    })
  } else {
    const channel = pusher.subscribe('chat')
    channel.bind('send-message', data => {
      const { person, message } = data
      const chatObject = {
        itemId: itemId,
        person: person,
        chatTime: chatTime,
        chatBoxValue: message
      }
      addEntryToDb('chatData', chatObject)
      console.log('pusher success');
    })
  }

  if (page === 'statusPage') {
    const channel = pusher.subscribe('status')
    channel.bind('update-status', data => {
      const { textValue, backgroundColor } = data
      addStatusFile(textValue, null, backgroundColor)
      console.log('pusher success');
    })
  } else {
    const channel = pusher.subscribe('status')
    channel.bind('update-status', data => {
      const { textValue, backgroundColor } = data
      const statusObject = {
        itemId: itemId,
        textValue: textValue || '',
        photoSource: photoSource || '',
        entryBackgroundColor: entryBackgroundColor,
        timeOfStatusUpload: new Date()
      }
      addEntryToDb('statusData', statusObject)
      console.log('pusher success');
    })
  }
}

const switchCurrentPage = async (page) => {
  const currentPage = document.querySelector('.current-page')
  const currentNav = document.querySelector('.current-nav')
  pusherMessage(page)
  switch (page) {
    case 'defaultNav':
      currentNav.innerHTML = DefaultNav()
      defaultNavEvents()
      break;
    case 'settingsNav':
      currentNav.innerHTML = SettingsNav()
      settingsNavEvents()
      break;
    case 'chatPage':
      currentPage.innerHTML = await ChatPage()
      chatPageEvents()
      chatItemEvents()
      break;
    case 'statusPage':
      currentPage.innerHTML = await StatusPage()
      currentNav.innerHTML = await StatusNav()
      statusNavEvent()
      statusPageEvent()
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
      currentNav.innerHTML = DefaultNav()
      currentPage.innerHTML = DefaultPage()
      defaultNavEvents()
      break;
    default:
      currentPage.innerHTML = DefaultPage()
      break;
  }
}

export default switchCurrentPage
