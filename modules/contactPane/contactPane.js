const contactPane = () => {
  return `
    <div class="contact-pane">
      <div id="topPageOverlay"></div>
      <div class="top-nav">
        <div class="top-nav-buttons">
          <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="profile-photo" alt="">
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

export default contactPane