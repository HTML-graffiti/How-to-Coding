window.addEventListener("DOMContentLoaded", function () {
  windowScreen();
}, false);

window.onresize = tmResize;
function tmResize() {
  if (typeof pageResize == "function") {
    pageResize();
  }
}

function pageOnload() {
  windowScreen();
}
function pageResize() {
  windowScreen();
}

function windowScreen() {
  const outScreenWidth = document.getElementById("outScreenWidth")
  outScreenWidth.innerText = screen.width;

  const outScreenheight = document.getElementById("outScreenheight")
  outScreenheight.innerText = screen.height;

  const outAvailWidth = document.getElementById("outAvailWidth")
  outAvailWidth.innerText = screen.availWidth;

  const outAvailHeight = document.getElementById("outAvailHeight")
  outAvailHeight.innerText = screen.availHeight;

  const outInnerWidth = document.getElementById("outInnerWidth")
  outInnerWidth.innerText = window.innerWidth;

  const outInnerHeight = document.getElementById("outInnerHeight")
  outInnerHeight.innerText = window.innerHeight;

  const outOuterWidth = document.getElementById("outOuterWidth")
  outOuterWidth.innerText = window.outerWidth;

  const outOuterHeight = document.getElementById("outOuterHeight")
  outOuterHeight.innerText = window.outerHeight;
}
