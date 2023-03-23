'use strict';
const storage = localStorage;

const fontSize = document.querySelector('#fontSize');
if(!storage.getItem('fontSize')) {
  populateStorage();
  themeStorage()
} else {
  setStyles();
}

function populateStorage() {
  storage.setItem('fontSize', fontSize.value);
  setStyles();
}

function setStyles() {
  const html = document.documentElement;
  const body = document.body;

  const currentSize = storage.getItem('fontSize');
  const currentTheme = storage.getItem('theme');

  fontSize.value = currentSize;
  html.style.fontSize = currentSize;
  body.className = currentTheme;
}

fontSize.onchange = populateStorage;


function themeStorage() {
  storage.setItem('theme', event.currentTarget.value);
  setStyles();
}

const themes = document.querySelectorAll('#theme input');
for (const theme of themes) {
  theme.addEventListener('change', themeStorage);
}


// Click #openButton button open the <dialog> modally
const dialogModal = document.querySelector('#modal');
const openModal = document.querySelector('#openModal');

openModal.addEventListener('click', function onModal() {
  if (typeof dialogModal.showModal === "function") {
    dialogModal.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

// Click #closeButton button close the <dialog> modally
const closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', () => {
  dialogModal.close();
});
