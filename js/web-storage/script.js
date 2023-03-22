'use strict';
const storage = localStorage;

const fontSize = document.querySelector('#fontSize');

if(!storage.getItem('fontSize')) {
  populateStorage();
} else {
  viewStorage();
}

function populateStorage() {
  storage.setItem('fontSize', fontSize.value);
  getStyle();
}

function viewStorage() {
  var list = document.querySelector("#list")

  // localStorageすべての情報の取得
  for (var i=0; i < storage.length; i++) {
    var itemStorage = storage.key(i);

    // localStorageのキーと値を表示
    var listP = document.createElement("p");
    var listKey = document.createElement("small");
    var listValue = document.createElement("u");
    list.appendChild(listP);
    listP.appendChild(listKey);
    listP.appendChild(listValue);
    listKey.innerHTML = itemStorage;
    listValue.innerHTML = storage.getItem(itemStorage);
  }
  
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
  viewStorage()
  getStyle();
}

fontSize.onchange = populateStorage;
