let arr = [
  '1',
  '2',
  '3',
];

popshift()

function removeAll() {
  let itemArrAll = document.querySelectorAll('#popshift font');

  for (let removeAll of itemArrAll) {
    removeAll.remove()
  }
};

function popshift() {
  arr.forEach(key => {
    let itemArr = document.createElement('font');
    itemArr.textContent = key;

    document.querySelector('#popshift').appendChild(itemArr);
  })
};

function arrpop() {
  arr.pop()
  removeAll()
  popshift()
};

function arrshift() {
  arr.shift()
  removeAll()
  popshift()
};

function arrpush() {
  let arrpush = prompt('配列の末尾に要素を追加する')

  switch (arrpush) {
    case null:
    break;

    default:
    arr.push(`${arrpush}`)
    removeAll()
    popshift()
  }
};

function arrunshift() {
  let arrunshift = prompt('配列の先頭に要素を追加する')

  switch (arrunshift) {
    case null:
    break;

    default:
    arr.unshift(`${arrunshift}`)
    removeAll()
    popshift()
  }
};

/*
function getRandom(randomArr) {
  let random = randomArr[Math.floor(Math.random() * randomArr.length)];
  return random;
};

function randomCount() {
  document.querySelector('#randomArr').innerText = getRandom(arr);
};

window.setInterval(function() {
  randomCount();
}, 1000);
*/
