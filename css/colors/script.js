const inputElemAll = document.querySelectorAll('input');
const bodyElem = document.querySelector('body');
const ruleset = document.querySelector('.ruleset');
const colorElem = document.querySelector('#colorOutput');

function validTextColor(stringToTest) {
  if (stringToTest === "") { return false; }
  if (stringToTest === "inherit") { return false; }
  if (stringToTest === "transparent") { return false; }

  const sample = document.createElement("p");
  sample.style.color = "rgb(0, 0, 0)";
  sample.style.color = stringToTest;
  if (sample.style.color !== "rgb(0, 0, 0)") { return true; }
  sample.style.color = "rgb(255, 255, 255)";
  sample.style.color = stringToTest;
  return sample.style.color !== "rgb(255, 255, 255)";
}

for (const inputElem of inputElemAll) {
  inputElem.addEventListener('change', () => {
    if (validTextColor(inputElem.value)) {
      bodyElem.style.backgroundColor = inputElem.value;
      ruleset.style.color = inputElem.value;
      colorElem.textContent = inputElem.value;
    } else {
      bodyElem.style.backgroundColor = '#fff';
      ruleset.style.color = '#000';
      colorElem.textContent = 'Invalid color value';
    }
  });
}

function setFilter ( $setFilter ) {
  bodyElem.style.filter = $setFilter;
  var $setFilter = bodyElem.style.filter;

  document.querySelector( "#filterOutput" ).innerHTML = $setFilter;
}
