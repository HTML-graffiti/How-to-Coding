function normalStyle(){
  var main = document.querySelector("#main");
  main.style.columns = '550px auto';
  main.style.columnGap = '0';
  main.style.columnRule = 'none';
  main.style.maxWidth = '550px';

  var mainAll = document.querySelectorAll("#main h1, #main p:nth-child(2n), #main p:nth-child(2n+1)");
  mainAll.forEach((mainCenter) => {
    mainCenter.style.width = '100%';
    mainCenter.style.float = 'none';
    mainCenter.style.breakInside = 'auto';
  });
}

function columnsStyle(){
  var main = document.querySelector("#main");
  main.style.columns = '200px auto';
  main.style.columnGap = '2rem';
  main.style.columnRule = 'dotted blue';
  main.style.maxWidth = '95%';

  var mainAll = document.querySelectorAll("#main h1, #main p:nth-child(2n), #main p:nth-child(2n+1)");
  mainAll.forEach((mainCenter) => {
    mainCenter.style.width = 'auto';
    mainCenter.style.float = 'none';
    mainCenter.style.breakInside = 'avoid';
  });
}
