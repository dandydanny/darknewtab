chrome.storage.sync.get({ fadeSetting: true }, ({ fadeSetting }) => {
  if (fadeSetting) {
    // If the fade setting is enabled (default), apply animation to body.
    document.body.style = "animation-name: turnUpBrightness; animation-duration: 3s;"
  }
});