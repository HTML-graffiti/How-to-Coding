const inputRadius = document.querySelector('#inputRadius');
const labelRadius = document.querySelector('#borderradius');
const mainElem = document.querySelector('main');

function validTextColor(stringToTest) {
  if (stringToTest === "") { return false; }
  if (stringToTest === "inherit") { return false; }
  if (stringToTest === "transparent") { return false; }

  const image = document.createElement("img");
  image.style.borderRadius = "0";
  image.style.borderRadius = stringToTest;
  if (image.style.borderRadius !== "0") { return true; }
  image.style.borderRadius = "0";
  image.style.borderRadius = stringToTest;
  return image.style.borderRadius !== "0";
}

inputRadius.addEventListener('change', () => {
  if (validTextColor(inputRadius.value)) {
    mainElem.style.borderRadius = inputRadius.value;
    labelRadius.textContent = inputRadius.value;
  } else {
    mainElem.style.borderRadius = '0';
    labelRadius.textContent = 'Invalid value';
  }
});
