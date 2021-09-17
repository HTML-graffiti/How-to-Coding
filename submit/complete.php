<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<title>📝 Let's Creat a Lists of the Things about You</title>
<link rel="stylesheet" href="form.css"/>
<style type="text/css">
html, body {padding:0; margin:0;}
#foot {
  display:block;
  position:relative;
  top:0; left:0;
  width:100%;
  height:100vh;
}
#foot .inside h1 {
  width:50vw;
  position:absolute;
  top:47.5%; left:50%;
  padding:0; margin:0;
  transform: translate(-50%, -50%);
  font-size: 10vw; font-weight:500;
  font-family: "SF Compact", sans-serif;
}
#foot .inside p {
  font-size:2.5vw;
  width:100%;
  text-align:center;
  position:absolute;
  top:90%; left:50%;
  transform: translate(-50%, -50%);
  font-family: "SF Compact", sans-serif;
}
#foot .inside b {
  border:0.25vw solid;
  background:#fff;
  padding:0.5vw 2.5vw;
  border-radius:2rem;
}

</style>
</head>
<body>
<div id="foot">
<div class="inside">
<h1><span id="rename"></span></h1>
<p class="notice"><b>ご投稿ありがとうございました</b></p>
</div>
</div>
<script>
var text = ["Thank You","for", "Submit" ];
var counter = 0;
var elem = document.getElementById("rename");
var inst = setInterval(change, 750);

elem.innerHTML = text[counter];

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
};
</script>

</body>
