const contents = [
    "",
    ""
  ];
  
  function randomContents(contentsArray) {
    var contents =
      contentsArray[Math.floor(Math.random() * contentsArray.length)];
    console.log(contents);
    return contents;
  }
  
  function sentenceGenerator() {
    var sentence = `<img src="${randomContents(contents)}">`;
    document.querySelector(".random").innerHTML = sentence;
  }
  
  window.setInterval(function() {
    sentenceGenerator();
  }, 500);
  
  sentenceGenerator();
  