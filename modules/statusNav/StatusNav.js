const StatusNav = () => {
  return `
    <div class="status-nav">
      <input type="file" id="addPhotoStatus">
      <button class="add-status photo-button">
        <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          class="image" alt="photo">
        <div class="status-info">
          <label for="addPhotoStatus">
            <strong>My status</strong>
            <p>Tap to add status update</p>
          </label>
        </div>
      </button>
      <button class="view-status photo-button">
        <img src="https://images.pexels.com/photos/4119310/pexels-photo-4119310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
          class="image" alt="photo">
        <div class="status-info">
          <strong>My status</strong>
          <p>Tap to view status update</p>
        </div>
      </button>
      <div class="add-status-button">
        <button id="addTextStatusButton"><i class="material-icons">&#xe3c9;</i></button>
        <div>
          <label for="addPhotoStatus">
            <div id="addPhotoStatusButton"><i class="fa fa-camera"></i></div>
          </label>
        </div>
      </div>
    </div>
  `
}

export default StatusNav
