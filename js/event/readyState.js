document.onreadystatechange = function() {

  switch (document.readyState) {
    case "loading":
    // 文書の読み込み中に実行する
    break;

    case "interactive":
    break;

    case "complete":
    const coverH1 = document.querySelector('#main h1');
    coverH1.innerHTML = "JavaScript | Event<br/><code>addEventListener()</code>";
    break;
  }

};

function log(msg) {
  const logElem = document.querySelector("#log");

  let time = new Date();
  let timeStr = time.toLocaleTimeString();
  logElem.innerHTML = "<p>" + timeStr + ": " + msg + "</p>";
}

log("Logging events inside this window...");

function mouseEvent(event) {
  var msg = "<u>" + event.type + "</u> client <i>X:" + event.clientX + ", Y:" + event.clientY + "</i>";
  log(msg);
}

function touchEvent(event) {
  var msg = "<u>" + event.type + "</u> page <i>X:" + event.pageX + ", Y:" + event.pageY + "</i>";
  log(msg);
}

function keyEvent(event) {
  var msg = "<i>" + event.type + "</i> <u>" + event.code + "/" + event.key + "</u>";
  log(msg);
}

function wheelEvent(event) {
  var msg = "<u>" + event.type + "</u> delta <i>X:" + event.deltaX + " / Y:" + event.deltaY + " / Z:" + event.deltaZ + "</i>";
  log(msg);
}

document.body.addEventListener("click", mouseEvent);
document.body.addEventListener("dblclick", mouseEvent);
document.body.addEventListener("mousemove", mouseEvent);
document.body.addEventListener("mousedown", mouseEvent);
document.body.addEventListener("mouseup", mouseEvent);
document.body.addEventListener("mouseenter", mouseEvent);
document.body.addEventListener("mouseleave", mouseEvent);

document.body.addEventListener('touchstart', touchEvent);
document.body.addEventListener('touchend', touchEvent);
document.body.addEventListener('touchcancel', touchEvent);
document.body.addEventListener('touchmove', touchEvent);

document.body.addEventListener('keydown', keyEvent);
document.body.addEventListener('keyup', keyEvent);

document.body.addEventListener('wheel', wheelEvent);
