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


function documentInfo() {
  let objectDiv = document.querySelector('div#object');

  let documentInfo = {
    'URL: ': document.location,
    'LastModified: ': document.lastModified,
    'Referrer: ': document.referrer
  };

  for (let property in documentInfo) {
    objectDiv.innerHTML += (`<p>${property} <code>${documentInfo[property]}</code></p>`);
  }
}

function viewColors() {
  let okCancel = confirm('このページの情報を表示する')

  switch (okCancel) {
    case true:
    documentInfo()

    let helloButton = document.querySelector('#hello button');
    helloButton.remove()
    break;

    default:
  }
}
