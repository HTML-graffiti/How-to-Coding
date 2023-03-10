function setBorderRadius ( $borderRadius ) {
  var borderBody = document.querySelector('main');
  borderBody.style.borderRadius = $borderRadius;

  var borderSpecialAll = document.querySelectorAll('.special');
  borderSpecialAll.forEach((borderSpecial) => {
    borderSpecial.style.borderRadius = $borderRadius;
  });
}

function setBorderImage ( $borderImage ) {
  var borderSpecialAll = document.querySelectorAll('.special');
  borderSpecialAll.forEach((borderSpecial) => {
    borderSpecial.style.borderImage = $borderImage;
  });
}

function setBoxShadow ( $boxShadow ) {
  var borderSpecialAll = document.querySelectorAll('.special');
  borderSpecialAll.forEach((borderSpecial) => {
    borderSpecial.style.boxShadow = $boxShadow;
  });
}

function setOutline ( $outline ) {
  var borderBody = document.querySelector('main');
  borderBody.style.outline = $outline;

  var borderSpecialAll = document.querySelectorAll('.special');
  borderSpecialAll.forEach((borderSpecial) => {
    borderSpecial.style.outline = $outline;
  });
}
