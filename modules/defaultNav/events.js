const defaultNavEvents = () => {
  const chatPersonButtons = document.querySelectorAll('.chat-person')
  for (let index = 0; index < chatPersonButtons.length; index++) {
    const chatPersonButton = chatPersonButtons[index];
    chatPersonButton.addEventListener('click', () => {
      console.log('ok');
    })
  }
}

export default defaultNavEvents
