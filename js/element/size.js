const sizeCSS = document.createElement( "link" );
sizeCSS.href = "../window/style.css";
sizeCSS.type = "text/css";
sizeCSS.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(sizeCSS);

window.onresize = bodyResize;
function bodyResize() {
  if (typeof pageResize == "function") {
    pageResize();
  }
}

function pageResize() {
  HTMLsize();
  BodySize();
}

let size = document.querySelector(".cover")

let rect = size.getBoundingClientRect();
for (var key in rect) {
  if(typeof rect[key] !== 'function') {
    let rectKey = document.createElement('h3');
    rectKey.innerHTML  = `<code>${key}</code> <font>${rect[key]}</font>`;
    document.querySelector("#rect").appendChild(rectKey);
  }
}

function HTMLsize() {
  const outoffsetWidth = document.getElementById("outoffsetWidth")
  outoffsetWidth.innerText = size.offsetWidth;

  const outoffsetHeight = document.getElementById("outoffsetHeight")
  outoffsetHeight.innerText = size.offsetHeight;

  const outElementClientWidth = document.getElementById("outElementClientWidth")
  outElementClientWidth.innerText = size.clientWidth;

  const outElementClientHeight = document.getElementById("outElementClientHeight")
  outElementClientHeight.innerText = size.clientHeight;

  const outElementScrollWidth = document.getElementById("outElementScrollWidth")
  outElementScrollWidth.innerText = size.scrollWidth;

  const outElementScrollHeight = document.getElementById("outElementScrollHeight")
  outElementScrollHeight.innerText = size.scrollHeight;
}

function BodySize() {
  const outBodyClientWidth = document.getElementById("outBodyClientWidth")
  outBodyClientWidth.innerHTML = document.documentElement.clientWidth;

  const outBodyClientHeight = document.getElementById("outBodyClientHeight")
  outBodyClientHeight.innerHTML = document.documentElement.clientHeight;

  const outBodyScrollWidth = document.getElementById("outBodyScrollWidth")
  outBodyScrollWidth.innerHTML = document.documentElement.scrollWidth;

  const outBodyScrollHeight = document.getElementById("outBodyScrollHeight")
  outBodyScrollHeight.innerHTML = document.documentElement.scrollHeight;
}

HTMLsize();
BodySize();
