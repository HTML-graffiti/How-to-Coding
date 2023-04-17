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

  const outInnerWidth = document.getElementById("outInnerWidth")
  outInnerWidth.innerText = window.innerWidth;

  const outInnerHeight = document.getElementById("outInnerHeight")
  outInnerHeight.innerText = window.innerHeight;
}

const colorDepth = document.getElementById("colorDepth")
colorDepth.innerText = screen.colorDepth;

const pixelDepth = document.getElementById("pixelDepth")
pixelDepth.innerText = screen.pixelDepth;

const screenOrientation = screen.orientation ;
screenOrientation.onchange = getOrientationInfo ;

getOrientationInfo() ;

function getOrientationInfo() {
	document.getElementById("orientation").textContent = "" ;
	appendText(screenOrientation);
	appendText(" Type : " + screenOrientation.type + " |");
	appendText(" Angle : " + screenOrientation.angle + "\n");
}

function appendText ( text ) {
	document.getElementById("orientation").appendChild(document.createTextNode(text)) ;
}
