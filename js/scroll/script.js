function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function randomRGB() {
  let random255 = `rgba( ${random(255)}, ${random(255)}, ${random(255)}, 0.5)`;
  return random255;
}

function randomGradation() {
  let linearGradient = 'linear-gradient(0deg, rgba(';
  for (i = 0; i < 3; i++) {
    linearGradient = linearGradient + Math.floor(Math.random() * 255) + ',';
  }
  linearGradient = linearGradient + '1), rgba(0,0,0,0) 75%)'
  return linearGradient;
}

document.body.onscroll = (event) => {
  document.body.style.background = `${randomRGB()}`;

  setTimeout(() => {
    document.body.style.background = `${randomRGB()}`;
  }, 0);
};

document.querySelector('#scroolTop').addEventListener('click', event => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

let elm = document.documentElement;
let bottom = elm.scrollHeight - elm.clientHeight;

document.querySelector('#scroolBottom').addEventListener('click', event => {
  window.scrollTo({
    top: bottom,
    behavior: "smooth"
  });
});

document.querySelector('#scrollByplus').addEventListener('click', event => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth"
  });
});

document.querySelector('#scrollByminus').addEventListener('click', event => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: "smooth"
  });
});


let scale = 1;
const wheel = document.querySelector('#three');

wheel.addEventListener('wheel', event => {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.5, scale), 1.5);

  // Apply scale transform
  wheel.style.transform = `scale(${scale})`;
});
