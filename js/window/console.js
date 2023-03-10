function bodyLog() {
  const eventType = event.type;

  const time = new Date();
  const timeStr = time.toLocaleTimeString();

  console.group();
  console.count(eventType);

  function XYDate(clientX, clientY, at) {
    this.clientX = clientX;
    this.clientY = clientY;
    this.at = at;
  }
  const clientDate = new XYDate( event.clientX, event.clientY, timeStr );
  console.table(clientDate);

  console.groupEnd();
}

function clearLog() {
  console.clear()
}

document.body.addEventListener("click", bodyLog);
document.body.addEventListener("dblclick", bodyLog);
document.body.addEventListener("mouseenter", bodyLog);
document.body.addEventListener("mouseleave", clearLog);
