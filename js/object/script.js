// 2 つの値の間にある整数の乱数を返す
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// RGB それぞれの値を 1~255 のうちからランダムに返す
function randomRGB() {
  let getRGB = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  return getRGB;
}

function randomBG() {
  const bgAll = document.querySelectorAll('body');
  bgAll.forEach(bgItem => {
    bgItem.style.background = randomRGB();
  })
}

function randomColor() {
  const colorAll = document.querySelectorAll('#menu a, #cover *, #random *, #etc *, #contents *');
  colorAll.forEach(colorItem => {
    colorItem.style.color = randomRGB();
  })
}

randomBG()
randomColor()
