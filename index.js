const heading = document.createElement("h1");
heading.setAttribute("id", "title");
document.body.appendChild(heading);

let bodyAll = document.querySelectorAll('#left, #right');

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'loading') {
    for (const bodyCover of bodyAll) {
      bodyCover.style.display = "none";
    }
  }

  else if (event.target.readyState === 'interactive') {
    heading.innerText = "Now Loding | creative-community.space";
    for (const bodyCover of bodyAll) {
      bodyCover.style.display = "block";
      bodyCover.style.opacity = "0";
    }
  }

  else if (event.target.readyState === 'complete') {
    heading.innerText = "How to Coding | creative-community.space";
    for (const bodyCover of bodyAll) {
      bodyCover.style.opacity = "1";
    }
  }
});
