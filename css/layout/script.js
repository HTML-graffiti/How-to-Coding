function normalStyle(){
  var main = document.querySelector("#main");
  main.style.maxWidth = '550px';
  main.style.position = 'static';

  var mainAll = document.querySelectorAll("#main h1, #main h2, #main p:nth-child(2n+1), #main p:nth-child(2n)");
  mainAll.forEach((mainCenter) => {
    mainCenter.style.position = 'static';
    mainCenter.style.width = '100%';
    mainCenter.style.maxWidth = '100%';
    mainCenter.style.float = 'none';
  });
}


function floatStyle(){
  var main = document.querySelector("#main");
  main.style.maxWidth = '750px';
  main.style.position = 'static';

  var mainTitle = document.querySelector("#main h1");
  mainTitle.style.position = 'static';
  mainTitle.style.width = '100%';
  mainTitle.style.maxWidth = '100%';
  mainTitle.style.float = 'none';

  var mainLast = document.querySelector("#main h2");
  mainLast.style.position = 'static';
  mainLast.style.width = '100%';
  mainLast.style.maxWidth = '100%';
  mainTitle.style.float = 'none';

  var mainPleft = document.querySelectorAll("#main p:nth-child(2n+1)");
  mainPleft.forEach((mainLeft) => {
    mainLeft.style.position = 'static';
    mainLeft.style.width = '47.5%';
    mainLeft.style.float = 'left';
  });

  var mainPright = document.querySelectorAll("#main p:nth-child(2n)");
  mainPright.forEach((mainRight) => {
    mainRight.style.position = 'static';
    mainRight.style.width = '47.5%';
    mainRight.style.float = 'right';
  });
}


function positionStyle(){
  var main = document.querySelector("#main");
  main.style.maxWidth = '95%';
  main.style.position = 'static';

  var mainAll = document.querySelectorAll("#main p:nth-child(2n+1), #main p:nth-child(2n)");
  mainAll.forEach((mainCenter) => {
    mainCenter.style.position = 'relative';
    mainCenter.style.width = '100%';
    mainCenter.style.maxWidth = '100%';
    mainCenter.style.float = 'none';
  });

  var mainTitle = document.querySelector("#main h1");
  mainTitle.style.position = 'absolute';
  mainTitle.style.top = '15px';
  mainTitle.style.left = '10px';
  mainTitle.style.width = '100%';
  mainTitle.style.float = 'none';

  var mainLast = document.querySelector("#main h2");
  mainLast.style.position = 'fixed';
  mainLast.style.bottom = '1.25%';
  mainLast.style.right = '1.25%';
  mainLast.style.zIndex = '2';
  mainLast.style.width = '300px';
  mainLast.style.maxWidth = '75%';
  mainLast.style.float = 'none';
}
