'use strict';

// Web Storageの種類を設定
const storage = localStorage;

// Web Storageにアイテムが存在しているかを確認する
if(!localStorage.getItem('color')) {
  // アイテムが存在しない場合に値を設定する
  setStyles();
} else {
  // アイテムが存在する場合にデータを表示する
  viewStorage();
}

// ストレージに値を設定する
function setStyles() {
  storage.setItem('color', '#000');
  storage.setItem('bgcolor', '#fff');

  // Web Storageのデータを表示
  viewStorage();
}


// Web Storageのデータを表示
function viewStorage() {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  // Web Storageに保存されているデータアイテムの数を取得
  for (let i=0; i < storage.length; i++) {

    // 各データアイテムのキーの名称(storage.key)
    // キーに対する値(storage.getItem)を取得
    let itemStorage = storage.key(i);
    let listP = document.createElement("p");
    let listKey = document.createElement("small");
    let listValue = document.createElement("u");
    listKey.innerHTML = itemStorage;
    listValue.innerHTML = storage.getItem(itemStorage);

    list.appendChild(listP);
    listP.appendChild(listKey);
    listP.appendChild(listValue);
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
}
