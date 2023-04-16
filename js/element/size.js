const sizeCSS = document.createElement( "link" );
sizeCSS.href = "../window/style.css";
sizeCSS.type = "text/css";
sizeCSS.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(sizeCSS);


HTMLsize();
BodySize();

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

let clientRect = document.querySelector("#rect")

let rect = clientRect.getBoundingClientRect();
for (var key in rect) {
  if(typeof rect[key] !== 'function') {
    let rectKey = document.createElement('h3');
    rectKey.innerHTML  = `<code>${key}</code> <font>${rect[key]}</font>`;
    document.querySelector("#rect").appendChild(rectKey);
  }
}

function HTMLsize() {
  const readme = document.querySelector("#rect")

  const outoffsetWidth = document.getElementById("outoffsetWidth")
  outoffsetWidth.innerText = readme.offsetWidth;

  const outoffsetHeight = document.getElementById("outoffsetHeight")
  outoffsetHeight.innerText = readme.offsetHeight;

  const outElementClientWidth = document.getElementById("outElementClientWidth")
  outElementClientWidth.innerText = readme.clientWidth;

  const outElementClientHeight = document.getElementById("outElementClientHeight")
  outElementClientHeight.innerText = readme.clientHeight;

  const outElementScrollWidth = document.getElementById("outElementScrollWidth")
  outElementScrollWidth.innerText = readme.scrollWidth;

  const outElementScrollHeight = document.getElementById("outElementScrollHeight")
  outElementScrollHeight.innerText = readme.scrollHeight;
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
