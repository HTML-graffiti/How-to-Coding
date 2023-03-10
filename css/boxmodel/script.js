function setBorder ( $border ) {
  var borderBody = document.querySelector('body');
  borderBody.style.border = $border;
  var $border = borderBody.style.border;

  var borderRuleset = document.querySelector('#title');
  borderRuleset.style.border = $border;

  var borderSpecialAll = document.querySelectorAll('.special');
  borderSpecialAll.forEach((borderSpecial) => {
    borderSpecial.style.border = $border;
  });

  document.getElementById( "borderOutput" ).innerHTML = $border;
}

function setPadding( $padding ) {
  var paddingBody = document.querySelector('body');
  paddingBody.style.padding = $padding;
  var $padding = paddingBody.style.padding;

  var paddingRuleset = document.querySelector('#title');
  paddingRuleset.style.padding = $padding;

  var paddingSpecialAll = document.querySelectorAll('.special');
  paddingSpecialAll.forEach((paddingSpecial) => {
    paddingSpecial.style.padding = $padding;
  });

  document.getElementById( "paddingOutput" ).innerHTML = $padding;
}

function setMargin( $margin ) {
  var marginBody = document.querySelector('body');
  marginBody.style.margin = $margin;
  var $margin = marginBody.style.margin;

  var marginRuleset = document.querySelector('#title');
  marginRuleset.style.margin = $margin;

  var marginSpecialAll = document.querySelectorAll('.special');
  marginSpecialAll.forEach((marginSpecial) => {
    marginSpecial.style.margin = $margin;
  });

  document.getElementById( "marginOutput" ).innerHTML = $margin;
}
