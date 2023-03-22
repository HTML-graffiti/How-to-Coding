function fullscreenchanged (event) {
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    console.log('Leaving fullscreen mode.');
  }
};

const full = document.querySelector('#cover');
full.addEventListener('fullscreenchange', fullscreenchanged);

document.querySelector('#full-btn').addEventListener('click', (event) => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    full.requestFullscreen();
  }
});
