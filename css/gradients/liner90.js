function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function randomGradient() {
  let randomGradient = `linear-gradient(90deg, rgb(${random(255)},${random(255)},${random(255)}), rgb(${random(255)},${random(255)},${random(255)}))`;
  return randomGradient;
}

let gradientAll = document.querySelectorAll('body')
for (const gradientBG of gradientAll) {
  gradientBG.style.background = randomGradient();
}

let buttons = document.querySelectorAll('nav a, .special')
for (const button of buttons) {
  button.addEventListener ('click', event => {
    document.body.style.background = randomGradient();
  })
}
