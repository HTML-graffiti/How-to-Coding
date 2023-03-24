'use strict';
const storage = localStorage;

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
  // localStorageすべての情報の取得
  for (var i=0; i < storage.length; i++) {
    const list = document.querySelector("#list")
    let itemStorage = storage.key(i);

    // localStorageのキーと値を表示
    let listP = document.createElement("p");
    let listKey = document.createElement("small");
    let listValue = document.createElement("u");
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
  const body = document.body;
  const list = document.querySelector("#list")

  html.style.fontSize = storage.getItem('fontSize');
  body.className = storage.getItem('theme');
  list.style.color = storage.getItem('color');
  list.style.background = storage.getItem('bgcolor');
}

function removeallStorage() {
  storage.clear();
  viewStorage();
  getStyle();
}

fontSize.onchange = populateStorage;
