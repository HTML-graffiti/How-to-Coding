const storage = localStorage;

const bgcolorForm = document.querySelector('#bgcolor');
const colorForm = document.querySelector('#color');

if(!storage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  storage.setItem('bgcolor', bgcolorForm.value);
  storage.setItem('color', colorForm.value);
  setStyles();
}

function setStyles() {
  const currentBG = storage.getItem('bgcolor');
  const currentColor = storage.getItem('color');
  const html = document.documentElement;
  const colorAll = document.querySelectorAll('.color');

  bgcolorForm.value = currentBG;
  colorForm.value = currentColor;

  html.style.backgroundColor = currentBG;
  for (const color of colorAll) {
    color.style.color = currentColor;
  }
}

bgcolorForm.onchange = populateStorage;
colorForm.onchange = populateStorage;
