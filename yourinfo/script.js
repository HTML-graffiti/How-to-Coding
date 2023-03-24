'use strict';

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
  const bgcolorAll = document.querySelectorAll('html, .bgcolor');
  const colorAll = document.querySelectorAll('.color');

  const currentBG = storage.getItem('bgcolor');
  const currentColor = storage.getItem('color');

  bgcolorForm.value = currentBG;
  colorForm.value = currentColor;

  for (const bgcolor of bgcolorAll) {
    bgcolor.style.backgroundColor = currentBG;
  }
  for (const color of colorAll) {
    color.style.color = currentColor;
  }
}

bgcolorForm.onchange = populateStorage;
colorForm.onchange = populateStorage;
