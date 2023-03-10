function setFamily ( $fontFamily ) {
  var fontFamilyRuleset = document.querySelector('main');
  fontFamilyRuleset.style.fontFamily = $fontFamily;
  var $fontFamily = fontFamilyRuleset.style.fontFamily;

  document.getElementById( "familyOutput" ).innerHTML = $fontFamily;
}

function setStyle ( $fontStyle ) {
  var fontStyleRuleset = document.querySelector('main');
  fontStyleRuleset.style.fontStyle = $fontStyle;
  var $fontStyle = fontStyleRuleset.style.fontStyle;

  var sansfontStyleAll = document.querySelectorAll('.sans');
  sansfontStyleAll.forEach((sansfontStyle) => {
    sansfontStyle.style.fontStyle = $fontStyle;
  });

  document.getElementById( "styleOutput" ).innerHTML = $fontStyle;
}

function setWeight ( $fontWeight ) {
  var fontWeightRuleset = document.querySelector('main');
  fontWeightRuleset.style.fontWeight = $fontWeight;
  var $fontWeight = fontWeightRuleset.style.fontWeight;

  var seliffontWeightAll = document.querySelectorAll('.selif');
  seliffontWeightAll.forEach((seliffontWeight) => {
    seliffontWeight.style.fontWeight = $fontWeight;
  });

  document.getElementById( "weightOutput" ).innerHTML = $fontWeight;
}

function setSynthesis ( $fontSynthesis ) {
  var fontSynthesisRuleset = document.querySelector('main');
  fontSynthesisRuleset.style.fontSynthesis = $fontSynthesis;
  var $fontSynthesis = fontSynthesisRuleset.style.fontSynthesis;

  var seliffontSynthesisAll = document.querySelectorAll('.selif');
  seliffontSynthesisAll.forEach((seliffontSynthesis) => {
    seliffontSynthesis.style.fontSynthesis = $fontSynthesis;
  });

  document.getElementById( "synthesisOutput" ).innerHTML = $fontSynthesis;
}

function setSize ( $fontSize ) {
  var fontSizeRuleset = document.querySelector('main');
  fontSizeRuleset.style.fontSize = $fontSize;
  var $fontSize = fontSizeRuleset.style.fontSize;

  document.getElementById( "sizeOutput" ).innerHTML = $fontSize;
}

function setAdjust ( $fontSizeAdjust ) {
  var fontSizeAdjustRuleset = document.querySelector('main');
  fontSizeAdjustRuleset.style.fontSizeAdjust = $fontSizeAdjust;
  var $fontSizeAdjust = fontSizeAdjustRuleset.style.fontSizeAdjust;

  document.getElementById( "sizeAdjustOutput" ).innerHTML = $fontSizeAdjust;
}

function setStretch ( $fontStretch ) {
  var fontStretchRuleset = document.querySelector('main');
  fontStretchRuleset.style.fontStretch = $fontStretch;
  var $fontStretch = fontStretchRuleset.style.fontStretch;

  document.getElementById( "stretchOutput" ).innerHTML = $fontStretch;
}

function setVariant ( $fontVariant ) {
  var fontVariantRuleset = document.querySelector('main');
  fontVariantRuleset.style.fontVariant = $fontVariant;
  var $fontVariant = fontVariantRuleset.style.fontVariant;

  document.getElementById( "variantOutput" ).innerHTML = $fontVariant;
}

function setLine ( $lineHeight ) {
  var lineHeightRuleset = document.querySelector('main');
  lineHeightRuleset.style.lineHeight = $lineHeight;
  var $lineHeight = lineHeightRuleset.style.lineHeight;

  document.getElementById( "lineHeightOutput" ).innerHTML = $lineHeight;
}

function setIndent ( $textIndent ) {
  var textIndentRuleset = document.querySelector('main');
  textIndentRuleset.style.textIndent = $textIndent;
  var $textIndent = textIndentRuleset.style.textIndent;

  document.getElementById( "indentOutput" ).innerHTML = $textIndent;
}

function setSpacing ( $letterSpacing ) {
  var letterSpacingRuleset = document.querySelector('main');
  letterSpacingRuleset.style.letterSpacing = $letterSpacing;
  var $letterSpacing = letterSpacingRuleset.style.letterSpacing;

  document.getElementById( "letterSpacingOutput" ).innerHTML = $letterSpacing;
}

function setWordSpacing ( $wordSpacing ) {
  var wordSpacingRuleset = document.querySelector('main');
  wordSpacingRuleset.style.wordSpacing = $wordSpacing;
  var $wordSpacing = wordSpacingRuleset.style.wordSpacing;

  document.getElementById( "wordSpacingOutput" ).innerHTML = $wordSpacing;
}

function setwhiteSpace ( $whiteSpace ) {
  var whiteSpaceRuleset = document.querySelector('main');
  whiteSpaceRuleset.style.whiteSpace = $whiteSpace;
  var $whiteSpace = whiteSpaceRuleset.style.whiteSpace;

  document.getElementById( "whiteSpaceOutput" ).innerHTML = $whiteSpace;
}
