let touchXY = document.querySelector('#touchEvent');

document.body.style.background = '#000';
document.body.style.padding = "0";
document.body.style.margin = "0";

document.addEventListener('mousemove', touchEvent);
document.addEventListener('touchstart', touchEvent);
document.addEventListener('touchend', touchEvent);
document.addEventListener('touchmove', touchEvent);
document.addEventListener('touchcancel', touchEvent);

document.addEventListener('mousemove', touchHSL);
document.addEventListener('touchstart', touchHSL);
document.addEventListener('touchend', touchHSL);
document.addEventListener('touchcancel', touchHSL);
document.addEventListener('touchmove', touchHSL);


function touchEvent(xy) {
  touchXY.innerHTML = `
  <code>Page X/Y: <font>${xy.pageX}</font> / <font>${xy.pageY}</font></code>
  `;
}

function touchHSL(xy) {
  let hueraw = parseInt(360 - Math.round((xy.pageY + 0.1) / (window.innerHeight) * 360));

  if ((xy.pageX <= window.innerWidth / 1)) {
    let sraw = parseInt(100 - Math.round((xy.pageX + 0.1) / (window.innerWidth) * 100));
    let lraw = parseInt(Math.round((xy.pageX + 0.1) / (window.innerWidth) * 100));

    document.body.style.background = 'hsl(' + hueraw + ',' + sraw + '%,' + lraw + '%)';
  }
};
