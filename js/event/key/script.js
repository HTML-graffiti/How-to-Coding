const textarea = document.querySelector('#key');
const log = document.querySelector('#keyboardEvent');

textarea.addEventListener('keydown', logKey);
textarea.addEventListener('keyup', logKey);

function logKey(key) {
  let time = new Date();
  let timeStr = time.toLocaleTimeString();

  log.textContent = `${timeStr} ${key.type} ${key.code}/${key.key}`;

  if (key.altKey) {
    textarea.style.color = "blue"
  } else {
    textarea.style.color = "#000"
  }

  if (key.ctrlKey ===  true) {
    log.style.color = "blue"
  } else {
    log.style.color = "#000"
  }

  if (key.shiftKey ===  true) {
    textarea.style.background = "gold"
  } else {
    textarea.style.background = "#fff"
  }

  if (key.metaKey ===  true) {
    textarea.style.outline = "solid red"
  } else {
    textarea.style.outline = "solid blue"
  }

};
