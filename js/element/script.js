"use strict"

let buttonClick = () => {
  const titleH1 = document.querySelector('#cover h1')
  titleH1.style.textAlign = "center"
  titleH1.innerHTML = "<i>Document Object Model</i><br/>"
  titleH1.append('Element')
  titleH1.insertAdjacentHTML ('afterend', '<div class="log"></div>')
  const titleBtn = document.querySelector('#cover button')
  titleBtn.outerHTML = `<p id="cover_p">Click on Double-click or Touch Here</p>`
}

function log(msg) {
  const logElem = document.querySelector(".log");
  const time = new Date();
  const timeStr = time.toLocaleTimeString();
  logElem.innerHTML += "<p><i>" + timeStr + "</i> " + msg + "</p>";
}

function clickEvent(event) {
  let msg = "<u>" + event.type + "</u> at <b>X:" + event.clientX + ", Y:" + event.clientY + "</b>";
  log(msg);
}

function touchEvent(event) {
  let msg = "<u>" + event.type + "</u> at <b>X:" + event.pageX + ", Y:" + event.pageY + "</b>";
  log(msg);
}

function removeLog() {
  let coverPAll = document.querySelectorAll('#cover .log p');
  for (const coverP of coverPAll) {
    coverP.remove()
  }
}

let cover = document.querySelector('#cover');

cover.addEventListener("click", clickEvent);
cover.addEventListener("dblclick", clickEvent);
cover.addEventListener("mouseleave", removeLog);
cover.addEventListener('touchstart', touchEvent);
cover.addEventListener('touchend', touchEvent);
cover.addEventListener('touchcancel', touchEvent);
