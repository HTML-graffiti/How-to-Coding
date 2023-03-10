function setAlign ( $textAlign ) {
  var textAlignRuleset = document.querySelector('main');
  textAlignRuleset.style.textAlign = $textAlign;
  var $textAlign = textAlignRuleset.style.textAlign;

  document.getElementById('alignOutput').innerHTML = $textAlign;
}

function setDirection ( $direction ) {
  var directionRuleset = document.querySelector('main');
  directionRuleset.style.direction = $direction;
  var $direction = directionRuleset.style.direction;

  document.getElementById('DirectionOutput').innerHTML = $direction;
}

function setJustify ( $textJustify ) {
  var textJustifyRuleset = document.querySelector('main');
  textJustifyRuleset.style.textJustify = $textJustify;
  var $textJustify = textJustifyRuleset.style.textJustify;

  document.getElementById('justifyOutput').innerHTML = $textJustify;
}

function setVertical ( $verticalAlign ) {
  var verticalAlignRuleset = document.querySelector('main');
  verticalAlignRuleset.style.verticalAlign = $verticalAlign;
  var $verticalAlign = verticalAlignRuleset.style.verticalAlign;

  var borderSpecialAll = document.querySelectorAll('.selif');
  borderSpecialAll.forEach((borderSpecial) => {
    borderSpecial.style.verticalAlign = $verticalAlign;
  });

  document.getElementById('verticalAlignOutput').innerHTML = $verticalAlign;
}

function setTransform ( $textTransform ) {
  var textTransformRuleset = document.querySelector('main');
  textTransformRuleset.style.textTransform = $textTransform;
  var $textTransform = textTransformRuleset.style.textTransform;

  document.getElementById('transformOutput').innerHTML = $textTransform;
}

function setDecoration ( $textDecoration ) {
  var textDecorationRuleset = document.querySelector('main');
  textDecorationRuleset.style.textDecoration = $textDecoration;
  var $textDecoration = textDecorationRuleset.style.textDecoration;

  document.getElementById('decorationOutput').innerHTML = $textDecoration;
}

function setShadow ( $textShadow ) {
  var textShadowRuleset = document.querySelector('main');
  textShadowRuleset.style.textShadow = $textShadow;
  var $textShadow = textShadowRuleset.style.textShadow;

  document.getElementById('shadowOutput').innerHTML = $textShadow;
}
