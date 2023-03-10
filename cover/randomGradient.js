/* Copyright (C) 2020 creative-community.space */

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function randomGradient() {
  let randomGradient = `linear-gradient(0deg, rgb(${random(255)},${random(255)},${random(255)}), rgb(255,255,255) 75%)`;
  return randomGradient;
}

let gradientAll = document.querySelectorAll('.randomGradient')
for (const gradientBG of gradientAll) {
  gradientBG.style.background = randomGradient();
}
