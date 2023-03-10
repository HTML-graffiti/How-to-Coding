function setTransform ( $setTransform ) {
  var ruleset = document.querySelector('main');
  ruleset.style.transform = $setTransform;
  var $setTransform = ruleset.style.transform;

  document.getElementById( "transformOutput" ).innerHTML = $setTransform;
}

function setOrigin ( $setOrigin ) {
  var ruleset = document.querySelector('main');
  ruleset.style.transformOrigin = $setOrigin;
  var $setOrigin = ruleset.style.transformOrigin;

  document.getElementById( "originOutput" ).innerHTML = $setOrigin;
}

/* Copyright (C) 2020 creative-community.space */

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function randomGradient() {
  let randomGradient = `
  linear-gradient(90deg, rgb(${random(255)},${random(255)},${random(255)}),
  rgb(${random(255)},${random(255)},${random(255)})`;
  return randomGradient;
}

let gradientAll = document.querySelectorAll('body')
for (const gradientBG of gradientAll) {
  gradientBG.style.background = randomGradient();
}

let buttons = document.querySelectorAll('.buttons button, nav a')
for (const button of buttons) {
  button.addEventListener ('click', event => {
    document.body.style.background = randomGradient();
  })
}
