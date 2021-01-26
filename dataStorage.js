const request = indexedDB.open('whatsApp_desktop', 2)

request.onsuccess = () => {
  const database = request.result
  database.transaction(['whatsApp_desktop'], 'readwrite')
}

request.onupgradeneeded = () => {
  const database = request.result
  // database.createObjectStore('chatPageBackground', { autoIncrement: true })
  database.createObjectStore('chatData', { keyPath: 'itemId' })
  // database.createObjectStore('statusData', { keyPath: 'itemId' })
}

request.onerror = () => {
  console.log('request unsuccessful')
}

const addEntryToDb = (storeName, entry) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.add(entry)

  transaction.oncomplete = () => {
    console.log('success')
  }

  transaction.onerror = () => {
    console.log(`error adding to ${storeName}`)
  }
}

const getEntryFromDb = (storeName) => {
  const data = new Promise((resolve, reject) => {
    const database = request.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const getData = store.getAll()

    getData.onsuccess = () => {
      resolve(getData.result)
    }

    getData.onerror = () => {
      reject(getData.error)
    }
  })
  return Promise.resolve(data)
}

const clearAllEntries = (storeName) => {
  const database = request.result;
  const transaction = database.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  store.clear();
}

const deleteEntry = (storeName, itemId) => {
  const database = request.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  if (typeof itemId === 'string') {
    store.delete(itemId)
  } else {
    for (let index = 0; index < itemId.length; index++) {
      const singleItemId = itemId[index]
      store.delete(singleItemId)
    }
  }
}

export { request, addEntryToDb, getEntryFromDb, clearAllEntries, deleteEntry }
