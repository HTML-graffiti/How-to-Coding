const result = document.querySelector('#result');
const thisCSS = document.querySelector('style');

for ( let i = 0; i < document.styleSheets.length; i++ ) {
  let styleSheet = document.styleSheets[i];

  let cssom = document.createElement('details');
  let sheets = document.createElement('summary');

  cssom.addEventListener("toggle", event => {
    if (cssom.open) {
      styleSheet.disabled = true;
    } else {
      styleSheet.disabled = false;
    }
  });

  sheets.innerHTML = `
  <i>type</i> ${styleSheet.type}<br/>
  <i>ownerNode</i> ${styleSheet.ownerNode}<br/>
  <i>href</i> ${styleSheet.href}<br/>
  <i>media</i> ${styleSheet.media}<br/>
  <i>parentStyleSheet</i> ${styleSheet.parentStyleSheet}
  `;

  for ( let ii = 0; ii < styleSheet.cssRules.length; ii++ ) {
    let rule = document.createElement('p');
    rule.innerHTML += `${styleSheet.cssRules[ii].cssText}`;
    cssom.append(rule);
  }

  result.append(cssom);
  cssom.prepend(sheets);
}
