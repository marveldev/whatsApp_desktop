import { addEntryToDb } from "./dataStorage.js"
import { addChatItemToDom } from "./modules/chatPage/events.js"
import { addStatusFile } from "./modules/statusPane/events.js"

const addChatPusherEvents = () => {
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

    const chatPageDiv = document.querySelector('.chat-page')
    if (chatPageDiv) {
      addChatItemToDom(person, message)
    } else {
      addEntryToDb('chatData', chatObject)
    }
  })
}

const addStatusPusherEvents = () => {
  const pusher = new Pusher('2de3c2f998e996603b10', {
    cluster: 'eu'
  })

  const channel = pusher.subscribe('status')
  channel.bind('update-status', data => {
    const { textValue, backgroundColor } = data
    const itemId = 'id' + Date.parse(new Date()).toString()

    const statusObject = {
      itemId: itemId,
      textValue: textValue,
      photoSource: '',
      entryBackgroundColor: backgroundColor,
      timeOfStatusUpload: new Date()
    }

    const statusPageDiv = document.querySelector('.status-page')
    if (statusPageDiv) {
      addStatusFile(textValue, null, backgroundColor)
    } else {
      addEntryToDb('statusData', statusObject)
    }
  })
}

export { addChatPusherEvents, addStatusPusherEvents }
