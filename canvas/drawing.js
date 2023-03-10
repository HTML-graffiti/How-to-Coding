const canvas = document.getElementById("canvas");
canvas.style.boxSizing = "border-box";
canvas.style.padding = "0";
canvas.style.margin = "0";
canvas.style.position = "fixed";
canvas.style.zIndex = "1";

let isDrawing = false;
let x = 0;
let y = 0;

const context = canvas.getContext('2d');
// mousedown, mousemove, mouseup にイベントリスナーを追加
canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = '#fff';
  context.lineWidth = 10;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
