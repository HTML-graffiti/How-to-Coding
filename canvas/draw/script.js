//mousedownチェック用
let mouseDown = false;

//マウス始点
let wbound = 0;
let stX = 0;
let stY = 0;
let x;
let y;

//入力値保存用
let SelectType = "free";
let SelectColor = "black";
let SelectWidth = 15;

//描画の開始
function startDraw(event) {
  //マウスボタンが押された
  mouseDown = true;

  //canvasの絶対座標を取得
  wbound = event.target.getBoundingClientRect();
  //マウスの座標（始点）をセット
  stX = event.clientX - wbound.left;
  stY = event.clientY - wbound.top;
}

function Draw(event) {
  var DrawType;
  //マウスボタンが押されていれば描画
  if (mouseDown) {
    DrawType = document.getElementsByName("type");
    for (var i = 0; i < DrawType.length; i++) {
      if (DrawType[i].checked) {
        SelectType = DrawType[i].value;
        break;
      }
    }
    //線の色の取得
    DrawType = document.getElementsByName("color");
    for (var i = 0; i < DrawType.length; i++) {
      if (DrawType[i].checked) {
        SelectColor = DrawType[i].value;
        break;
      }
    }
    //線の太さの取得
    DrawType = document.getElementsByName("width");
    for (var i = 0; i < DrawType.length; i++) {
      if (DrawType[i].checked) {
        SelectWidth = DrawType[i].value;
        break;
      }
    }

    //キャンバスの取得
    canvas = document.getElementById("drawarea");

    //コンテキストの取得
    context = canvas.getContext("2d");

    //マウスの座標(終点）を取得
    x = event.clientX - wbound.left;
    y = event.clientY - wbound.top;

    //パスの開始
    context.beginPath();

    context.strokeStyle = SelectColor;
    context.fillStyle = SelectColor;
    context.lineWidth = SelectWidth;

    //線端の形状セット "butt" "square" "round"
    context.lineCap = "round";

    //線の形状セット
    switch (SelectType) {
      case "free":
      case "erase":
      if (SelectType == "free") {
        //消しゴム解除
        context.globalCompositeOperation = 'source-over';
      } else {
        context.globalCompositeOperation = 'destination-out';
      }

      context.moveTo(stX, stY);
      context.lineTo(x, y);
      context.stroke();
      //座標（始点）の切替
      stX = x;
      stY = y;
      break;
      default:
      break;
    }
  }
}

//描画
function endDraw(event) {
  //マウスボタンが押されていれば描画
  if (mouseDown) {
    //消しゴム解除
    context.globalCompositeOperation = 'source-over';

    //線の形状セット
    switch (SelectType) {
      case "free":
      case "erase":
      break;
      case "line":
      context.moveTo(stX, stY);
      context.lineTo(x, y);
      context.stroke();
      break;
      case "rect":
      var whigh = x - stX;
      var wwidth = y - stY;
      context.strokeRect(stX, stY, whigh, wwidth);
      break;
      case "fillrect":
      var whigh = x - stX;
      var wwidth = y - stY;
      context.fillRect(stX, stY, whigh, wwidth);
      break;
      case "arc":
      var whigh = x - stX;
      context.arc(stX, stY, whigh, 0, Math.PI * 2, false);
      context.stroke();
      break;
      case "fillarc":
      var whigh = x - stX;
      context.arc(stX, stY, whigh, 0, Math.PI * 2, false);
      context.fill();
      break;
      case "clear":
      var whigh = x - stX;
      var wwidth = y - stY;
      context.clearRect(stX, stY, whigh, wwidth);
      break;
    }

    //マウスボタンが離された
    mouseDown = false;
  }
}

function FullScreen() {
  const canvas = document.getElementById("drawarea")
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "fixed";
  canvas.style.bottom = "0";
  canvas.style.left = "0";
  canvas.style.right = "0";
}

window.addEventListener("DOMContentLoaded", function () {
  FullScreen();
}, false);

window.onresize = tmResize;
function tmResize() {
  if (typeof pageResize == "function") {
    pageResize();
  }
}

function pageOnload() {
  FullScreen();
}
function pageResize() {
  FullScreen();
}

//画像に変換＆表示する

const createBtn = document.querySelector('#saveimg');
createBtn.style.position = "fixed";
createBtn.style.zIndex = "100";
createBtn.style.top = "0";
createBtn.style.left = "0";

const ImgArea = document.getElementById("imgarea");
ImgArea.style.position = "fixed";
ImgArea.style.zIndex = "10";
ImgArea.style.bottom = "0";
ImgArea.style.left = "0";
ImgArea.style.right = "0";
ImgArea.style.display = "none";
ImgArea.style.background = "#fff";

function createimg() {
  let YourImg = canvas.toDataURL();
  document.getElementById("createimg").src = YourImg;
}

const controlBtn = document.querySelector('#controlbtn');
controlBtn.style.position = "fixed";
controlBtn.style.zIndex = "100";
controlBtn.style.top = "0";
controlBtn.style.right = "0";

const control = document.querySelector('#control');
control.style.position = "fixed";
control.style.zIndex = "10";
control.style.bottom = "0";
control.style.display = "none";

let YourDrawing = false;

const close = () => {
  controlBtn.style.display = "block";
  control.style.display = "none";
  ImgArea.style.display = "none";
  createBtn.value = "Create IMG";
};

const open = () => {
  controlBtn.style.display = "none";
  control.style.display = "none";
  ImgArea.style.display = "block";
  createBtn.value = "Close";
};

createBtn.addEventListener("click", event => {
  YourDrawing ? close() : open();
  YourDrawing = !YourDrawing;
})

let controller = false;

const closeController = () => {
  controlBtn.style.display = "block";
  control.style.display = "none";
  ImgArea.style.display = "none";
  createBtn.style.display = "block";
};

const openController = () => {
  controlBtn.style.display = "block";
  control.style.display = "block";
  ImgArea.style.display = "none";
  createBtn.style.display = "none";
};

controlBtn.addEventListener("click", event => {
  controller ? closeController() : openController();
  controller = !controller;
})
