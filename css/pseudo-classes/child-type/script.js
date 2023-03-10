function typeOdd () {
  let typeOddAll = document.querySelectorAll ('li:nth-of-type(odd)')
  typeOddAll.forEach(function(typeOdd) {
    typeOdd.classList.toggle('typeOdd');
  })
}

function typeEven () {
  let typeEvenAll = document.querySelectorAll ('li:nth-of-type(even)')
  typeEvenAll.forEach(function(typeEven) {
    typeEven.classList.toggle('typeEven');
  })
}

function type3n () {
  let type3nAll = document.querySelectorAll ('li:nth-of-type(3n)')
  type3nAll.forEach(function(type3n) {
    type3n.classList.toggle('type3n');
  })
}

function typeN4 () {
  let typeN4All = document.querySelectorAll ('li:nth-of-type(-n+4)')
  typeN4All.forEach(function(typeN4) {
    typeN4.classList.toggle('typeN4');
  })
}

function typeN5 () {
  let typeN5All = document.querySelectorAll ('li:nth-of-type(n+5)')
  typeN5All.forEach(function(typeN5) {
    typeN5.classList.toggle('typeN5');
  })
}

function typeN67 () {
  let typeN67All = document.querySelectorAll ('li:nth-of-type(n+6):nth-child(-n+7)')
  typeN67All.forEach(function(typeN67) {
    typeN67.classList.toggle('typeN67');
  })
}
