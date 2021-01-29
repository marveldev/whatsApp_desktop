const StatusPage = () => {
  return `
    <div class="status-page">
      <button>X</button>
      <div>
        <p>View your updates</p>
        <div class="status-entry-container">
          <div class="status-entry-item">
            <button class="delete-entry-button">X</button>
            <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
              class="status-entry image" alt="photo">
            <small>yesterday at 16:14</small>
          </div>
        </div>
      </div>
    </div>
  `
}

export default StatusPage
