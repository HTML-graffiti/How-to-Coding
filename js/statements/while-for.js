"use strict"

let listArr = document.querySelector('#listArr');


for (let color of colors) {
  let codeArr = document.createElement('code');
  codeArr.textContent = color;
  codeArr.style.color = color;
  codeArr.style.margin = "5px";

  listArr.appendChild(codeArr);
}

listArr.style.background = '#fff';
