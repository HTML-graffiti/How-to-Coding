function setBackground ( $background ) {
  var backgroundRuleset = document.querySelector('body');
  backgroundRuleset.style.background = $background;
  var $background = backgroundRuleset.style.background;

  document.getElementById( "backgroundOutput" ).innerHTML = $background;
}

function setMixBlendMode ( $mixBlendMode ) {
  var mixBlendModeRuleset = document.querySelector('.ruleset');
  mixBlendModeRuleset.style.mixBlendMode = $mixBlendMode;
  var $mixBlendMode = mixBlendModeRuleset.style.mixBlendMode;

  document.querySelector( "#blendOutput" ).innerHTML = $mixBlendMode;
}
