'use strict';
const storage = localStorage;

const fontSize = document.querySelector('#fontSize');

if(!storage.getItem('fontSize')) {
  populateStorage();
} else {
  getStyle();
}

function populateStorage() {
  storage.setItem('fontSize', fontSize.value);
  getStyle();
}

function getStyle() {
  const html = document.documentElement;

  const currentSize = storage.getItem('fontSize');
  fontSize.value = currentSize;

  html.style.fontSize = currentSize;
}

function removeallStorage() {
  storage.clear();
  getStyle();
}

fontSize.onchange = populateStorage;
