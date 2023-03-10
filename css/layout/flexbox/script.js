const flex = document.querySelector('ol#flexOl');

function flexDirection ( $flexDirection ) {
  flex.style.flexDirection = $flexDirection;
}

function flexWrap ( $flexWrap ) {
  flex.style.flexWrap = $flexWrap;
}

function alignItems ( $alignItems ) {
  flex.style.alignItems = $alignItems;
}

function justifyContent ( $justifyContent ) {
  flex.style.justifyContent = $justifyContent;
}

const flexLiAll = document.querySelectorAll('ol#flexOl li');

function flexBasis ( $flexBasis ) {
  flexLiAll.forEach(function(flexLi) {
    flexLi.style.flexBasis = $flexBasis;
  })
}

const flexOddAll = document.querySelectorAll('ol#flexOl :nth-child(odd)');

function flexGrow ( $flexGrow ) {
  flexOddAll.forEach(function(flexOdd) {
    flexOdd.style.flexGrow = $flexGrow;
  })
}

const flexEvenAll = document.querySelectorAll('ol#flexOl :nth-child(even)');

function flexShrink ( $flexShrink ) {
  flexEvenAll.forEach(function(flexEven) {
    flexEven.style.flexShrink = $flexShrink;
  })
}
