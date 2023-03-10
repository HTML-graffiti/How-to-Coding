navigator.clipboard.readText().then(
  (clipText) => document.querySelector("#clipboardEvent").innerText = clipText);
