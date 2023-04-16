const heading = document.createElement("h1");
heading.setAttribute("id", "title");
document.body.appendChild(heading);

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'loading') {
    heading.innerText = "Loding | creative-community.space";
  } else if (event.target.readyState === 'interactive') {
    heading.innerText = "Interactive | creative-community.space";
  } else if (event.target.readyState === 'complete') {
    heading.innerText = "How to Coding | creative-community.space";
  }
});
