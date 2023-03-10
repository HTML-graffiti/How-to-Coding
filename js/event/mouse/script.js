let mouseXY = document.querySelector('#mouseEvent');
let mainDiv = document.querySelector('main');

document.addEventListener('mousedown', () => {
  document.body.style.filter = 'invert(1)';
});

document.addEventListener('mouseup', () => {
  document.body.style.filter = 'invert(0)';
});

document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseleave', mouseLeave);

function mouseMove(xy) {
  mouseXY.innerHTML = `
  <code>Client X/Y: <font>${xy.clientX}</font> / <font>${xy.clientY}</font></code>
  <code>Screen X/Y: <font>${xy.screenX}</font> / <font>${xy.screenY}</font></code>
  `;
}

function mouseLeave() {
  mouseXY.innerHTML = `<font>mouseleave</font>`;
}


function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function randomRGB() {
  let random255 = `rgb( ${random(255)}, ${random(255)}, ${random(255)} )`;
  return random255;
}


for (let i = 1; i <= 12; i++) {
  const myDiv = document.createElement('div');
  document.querySelector('main').appendChild(myDiv);
}

const divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {

  divs[i].style.backgroundColor = randomRGB();

  divs[i].addEventListener('mouseenter', function(e) {
    e.target.style.backgroundColor = randomRGB();
  });

  divs[i].addEventListener('mouseleave', function(e) {
    e.target.style.backgroundColor = randomRGB();
  });

}
