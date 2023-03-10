function setMode ( $writingMode ) {
  var writingModeRuleset = document.querySelector('#hello');
  writingModeRuleset.style.writingMode = $writingMode;
  var $writingMode = writingModeRuleset.style.writingMode;

  document.getElementById( "modeOutput" ).innerHTML = $writingMode;
}

function setDirection ( $direction ) {
  var directionRuleset = document.querySelector('#hello');
  directionRuleset.style.direction = $direction;
  var $direction = directionRuleset.style.direction;

  document.getElementById( "DirectionOutput" ).innerHTML = $direction;
}

function setBidi ( $unicodeBidi ) {
  var unicodeBidiRuleset = document.querySelector('#hello');
  unicodeBidiRuleset.style.unicodeBidi = $unicodeBidi;
  var $unicodeBidi = unicodeBidiRuleset.style.unicodeBidi;

  var unicodeBidiAll = document.querySelectorAll('#title, .sans, .selif');
  unicodeBidiAll.forEach((unicodeBidi) => {
    unicodeBidi.style.unicodeBidi = $unicodeBidi;
  });

  document.getElementById( "unicodeBidiOutput" ).innerHTML = $unicodeBidi;
}

function setOrientation ( $textOrientation ) {
  var textOrientation = document.querySelector('#hello');
  textOrientation.style.textOrientation = $textOrientation;
  var $textOrientation = textOrientation.style.textOrientation;

  document.getElementById( "OrientationOutput" ).innerHTML = $textOrientation;
}

function setUpright ( $textCombineUpright ) {
  var textCombineUpright = document.querySelector('#hello');
  textCombineUpright.style.textCombineUpright = $textCombineUpright;
  var $textCombineUpright = textCombineUpright.style.textCombineUpright;

  document.getElementById( "UprightOutput" ).innerHTML = $textCombineUpright;
}
