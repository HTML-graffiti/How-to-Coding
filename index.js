const heading = document.createElement("h1");
heading.setAttribute("id", "title");
document.body.appendChild(heading);

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'loading') {
    let bodyAll = document.querySelectorAll('#left, #right');
    for (const bodyCover of bodyAll) {
      bodyCover.style.display = "none";
    }
  }

  else if (event.target.readyState === 'interactive') {
    heading.innerText = "Now Loding | creative-community.space";
    let bodyAll = document.querySelectorAll('#left, #right');
    for (const bodyCover of bodyAll) {
      bodyCover.style.display = "block";
      bodyCover.style.opacity = "0";
    }
  }

  else if (event.target.readyState === 'complete') {
    heading.innerText = "How to Coding | creative-community.space";
    let bodyAll = document.querySelectorAll('#left, #right');
    for (const bodyCover of bodyAll) {
      bodyCover.style.opacity = "1";
    }
  }
});
