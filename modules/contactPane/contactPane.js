const ContactPane = () => {
  return `
    <div class="contact-pane">
      <div id="topPageOverlay"></div>
      <div class="top-nav">
        <div class="top-nav-buttons">
          <img src="https://images.pexels.com/photos/6306487/pexels-photo-6306487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="profile-photo" alt="photo">
          <button class="status-button"><i class="material-icons">&#xe1af;</i></button>
          <button><i class="material-icons">&#xe0b7;</i></button>
          <button class="top-nav-dropdown"><i class="material-icons">&#xe5d4;</i></button>
        </div>
        <div id="searchBoxContainer">
          <i class="material-icons search-icon">&#xe8b6;</i>
          <textarea class="search-box" placeholder="Search or start a new chat"></textarea>
        </div>
      </div>
      <div class="nav-dropdown-modal">
        <button>New group</button>
        <button>Create a room</button>
        <button>Profile</button>
        <button>Archived</button>
        <button>Starred</button>
        <button class="settings-button">Settings</button>
        <button>Log out</button>
      </div>
      <div class="chat-person-list">
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/6306487/pexels-photo-6306487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <p class="name">Liam Benjamin</p>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/2880122/pexels-photo-2880122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <strong>Jude Ugo</strong>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/6706036/pexels-photo-6706036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <strong>Testimony Gift</strong>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/6124401/pexels-photo-6124401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <p class="name">Jane White</p>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/6677447/pexels-photo-6677447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <strong>Ferenda Little</strong>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/6550709/pexels-photo-6550709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <p class="name">Charlotte Emma</p>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/6561125/pexels-photo-6561125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <strong>Adanna Fiona</strong>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <p class="name">Jack Williams</p>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <strong>Jack Williams</strong>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
        <button class="chat-person">
          <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            class="image" alt="photo">
          <div class="more-info">
            <strong>Jack Williams</strong>
            <div>
              <p>Hello</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  `
}

export default ContactPane
