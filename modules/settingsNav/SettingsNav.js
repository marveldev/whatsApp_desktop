const SettingsNav = () => {
  return `
    <div class="settings-nav">
      <div class="settings-header">
        <button type="button" class="back-button"><i class="material-icons">&#xe5c4;</i></button>
        <strong>Settings</strong>
      </div>
      <div class="profile-settings">
        <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          class="image" alt="photo">
        <div class="more-info">
          <p>Jack Williams</p>
          <p>Hey, I am available</p>
        </div>
      </div>
      <div class="chat-settings-options">
        <button>
          <span><i class="material-icons">&#xe7f4;</i></span>
          <p>Notifications</p>
        </button>
        <button>
          <span><i class="material-icons">&#xe3ab;</i></span>
          <p class="theme-button">Theme</p>
        </button>
        <button>
          <span><i class="material-icons">&#xe1bc;</i></span>
          <p>Chat Wallpaper</p>
        </button>
        <button>
          <span><i class="material-icons">&#xe14b;</i></span>
          <p>Blocked</p>
        </button>
        <button>
          <span><i class="material-icons">&#xe887;</i></span>
          <p>Help</p>
        </button>
      </div>
      <div class="theme-container">
        <h3>Choose theme</h3>
        <div class="theme-option">
          <label class="radio input-options">
            <input type="radio" name="radio" value="system-default">
            <span class="checkmark"></span>
          </label>
          <p>System default</p>
        </div>
        <div class="theme-option">
          <label class="radio input-options">
            <input type="radio" name="radio" value="light" checked>
            <span class="checkmark"></span>
          </label>
          <p>Light</p>
        </div>
        <div class="theme-option">
          <label class="radio input-options">
            <input type="radio" name="radio" value="dark">
            <span class="checkmark"></span>
          </label>
          <p>Dark</p>
        </div>
        <button class="close-theme-button">CANCEL</button>
        <button class="confirm-theme-button">OK</button>
      </div>
    </div>
  `
}

export default SettingsNav
