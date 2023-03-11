const heading = document.createElement("h1");
heading.setAttribute("id", "title");
document.body.appendChild(heading);

let left = document.querySelector('#left');
let right = document.querySelector('#right');

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'interactive') {
    heading.innerText = "Now Loding | creative-community.space";
  }

  else if (event.target.readyState === 'complete') {
    heading.innerText = "How to Coding | creative-community.space";

    let hello = document.createElement('section');
    hello.setAttribute('id', 'hello');
    hello.classList.add('data_show')
    left.prepend(hello);

    let br = document.createElement('br');
    hello.after(br);

    $(function() {
      $("#hello").load("hello.html");
    });
  }
});
