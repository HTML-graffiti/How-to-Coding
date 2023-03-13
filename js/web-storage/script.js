const storage = localStorage;

const bgcolorForm = document.querySelector('#bgcolor');
const colorForm = document.querySelector('#color');
const fontSize = document.querySelector('#fontSize');

if(!storage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  storage.setItem('bgcolor', bgcolorForm.value);
  storage.setItem('color', colorForm.value);
  storage.setItem('fontSize', fontSize.value);
  storage.setItem('theme', event.currentTarget.value);
  setStyles();
}

function setStyles() {
  const html = document.documentElement;
  const body = document.body;
  const bgcolorAll = document.querySelectorAll('html, .bgcolor');
  const colorAll = document.querySelectorAll('.color');

  const currentBG = storage.getItem('bgcolor');
  const currentColor = storage.getItem('color');
  const currentSize = storage.getItem('fontSize');
  const currentTheme = storage.getItem('theme');

  bgcolorForm.value = currentBG;
  colorForm.value = currentColor;
  fontSize.value = currentSize;
  html.style.fontSize = currentSize;
  body.className = currentTheme;

  for (const bgcolor of bgcolorAll) {
    bgcolor.style.backgroundColor = currentBG;
  }
  for (const color of colorAll) {
    color.style.color = currentColor;
  }
}

bgcolorForm.onchange = populateStorage;
colorForm.onchange = populateStorage;
fontSize.onchange = populateStorage;

const themes = document.querySelectorAll('#theme input');
for (const theme of themes) {
  theme.addEventListener('change', populateStorage);
}
