function howtoCoding(){
  open("howto.html", "left")
}

function styleClick(){
  const styleCSS = document.createElement( "link" );
  styleCSS.href = "style.css";
  styleCSS.type = "text/css";
  styleCSS.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(styleCSS);

  open("css.html", "left")
}
