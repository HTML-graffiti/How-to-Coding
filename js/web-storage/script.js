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

// localStorageへの格納
function setStorage() {
  let key = document.querySelector("#textKey").value;
  let value = document.querySelector("#textValue").value;

  // 値の入力チェック
  if (key && value) {
    storage.setItem(key, value);
  }

  // 変数の初期化
  key = "";
  value = "";

  getStorage();
}


function getStorage() {
  const list = document.getElementById("list")
  // sessionStorageすべての情報の取得
  for (var i=0; i < storage.length; i++) {
    var itemKey = storage.key(i);

    // sessionStorageのキーと値を表示
    var listP = document.createElement("p");
    var listKey = document.createElement("small");
    var listValue = document.createElement("u");
    listKey.innerHTML = itemKey;
    listValue.innerHTML = storage.getItem(itemKey);
    list.appendChild(listP);
    listP.appendChild(listKey);
    listP.appendChild(listValue);
  }

}

fontSize.onchange = populateStorage;
