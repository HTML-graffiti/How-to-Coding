function setBoxsizing ( $boxsizing ) {
  var boxsizingRuleset = document.querySelector('main');
  boxsizingRuleset.style.boxSizing = $boxsizing;
  var $boxSizing = boxsizingRuleset.style.boxSizing;

  document.getElementById( "boxsizingOutput" ).innerHTML = $boxsizing;
}

function setOverflow ( $overflow ) {
  var overflowRuleset = document.querySelector('main');
  overflowRuleset.style.overflow = $overflow;
  var $overflow = overflowRuleset.style.overflow;

  document.getElementById( "overflowOutput" ).innerHTML = $overflow;
}

function setWidth ( $width ) {
  var widthRuleset = document.querySelector('main');
  widthRuleset.style.width = $width;
  var $width = widthRuleset.style.width;

  document.getElementById( "widthOutput" ).innerHTML = $width;
}

function setHeight ( $height ) {
  var heightRuleset = document.querySelector('main');
  heightRuleset.style.height = $height;
  var $height = heightRuleset.style.height;

  document.getElementById( "heightOutput" ).innerHTML = $height;
}

function setWordbreak ( $wordBreak ) {
  var wordBreakRuleset = document.querySelector('main');
  wordBreakRuleset.style.wordBreak = $wordBreak;
  var $wordBreak = wordBreakRuleset.style.wordBreak;

  document.getElementById( "wordBreakOutput" ).innerHTML = $wordBreak;
}

function setLeft ( $marginLeft ) {
  var marginLeftRuleset = document.querySelector('main');
  marginLeftRuleset.style.marginLeft = $marginLeft;
  var $marginLeft = marginLeftRuleset.style.marginLeft;

  document.getElementById( "marginleftOutput" ).innerHTML = $marginLeft;
}

function setRight ( $marginRight ) {
  var marginRightRuleset = document.querySelector('main');
  marginRightRuleset.style.marginRight = $marginRight;
  var $marginRight = marginRightRuleset.style.marginRight;

  document.getElementById( "marginrightOutput" ).innerHTML = $marginRight;
}
