'use strict'

const storage = localStorage;
const fontSize = document.querySelector('#fontSize');

if(!storage.getItem('fontSize')) {
  setfontSize();
} else {
  setStyles();
}

function setfontSize() {
  storage.setItem('fontSize', fontSize.value);
  setStyles();
}

const themes = document.querySelectorAll('#theme input');
for (const theme of themes) {
  theme.addEventListener('change', function() {
    storage.setItem('theme', theme.value);
    setStyles();
  });
};

function setStyles() {
  const html = document.documentElement;
  const body = document.body;

  const currentSize = storage.getItem('fontSize');

  fontSize.value = currentSize;
  html.style.fontSize = currentSize;
  body.className = storage.getItem('theme');
}

fontSize.onchange = setfontSize;


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
