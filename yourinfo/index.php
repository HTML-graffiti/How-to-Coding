<?php
// set time zone
date_default_timezone_set("Asia/Tokyo");

// set default encoding
if (extension_loaded('mbstring')) {
  mb_internal_encoding('UTF-8');
}

//----------
// 関数定義
//----------

// HTMLエスケープ
function e($html) {
  return htmlspecialchars($html, ENT_QUOTES);
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />

  <script src="../readme/index.js" async></script>
  <script src="../js/online/script.js"></script>
  <script type="text/javascript" async>
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.addEventListener('readystatechange', (event) => {
      if (event.target.readyState === 'loading') {
      }

      else if (event.target.readyState === 'interactive') {
      }

      else if (event.target.readyState === 'complete') {
        const battery = document.querySelector('#battery');
        battery.style.display = "none"
      }
    });
  }
  </script>

  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="../readme/style.css" />
  <link rel="stylesheet" href="../js/window/style.css" />
</head>
<body ononline="update(true)" onoffline="update(false)" onload="update(navigator.onLine)">
  <ul id="log" class="close">
    <li id="battery">
      <span>バッテリー状態</span>
      <span id="level"></span>
      <span><meter id="progress" min="0" low="10" high="20" max="100"></meter></span>
      <span>
        <b id="charging"></b>
        <i id="chargingTime"></i>
        <i id="dischargingTime"></i>
      </span>
    </li>
    <li>
      <span>現在位置情報</span>
      <span><button id="myBtn">GeoLocation API</button></span>
      <span id="map-link" class="nowValue"></span>
      <span id="myLocation"></span>
    </li>
    <li id="info">
      <span id="status">(Online or Offline?)</span>
      <?php
      echo "<span>LANGUAGE " . $_SERVER['HTTP_ACCEPT_LANGUAGE'] . "</span>";
      echo "<span>ENCODING " . $_SERVER['HTTP_ACCEPT_ENCODING'] . "</span>";
      echo "<span>" . $_SERVER['HTTP_ACCEPT'] . "</span>";
      ?>
    </li>
    <li id="info">
      <?php
      echo "<span><button>通信情報／ブラウザ等情報</button></span>";
      echo "<span>PORT " . e($_SERVER['REMOTE_PORT']) . "</span>";
      echo "<span>IP " . e($_SERVER['REMOTE_ADDR']) . "</span>";
      echo "<span>USER AGENT " . e($_SERVER['HTTP_USER_AGENT']) . "</span>";
      ?>
    </li>
  </ul>

  <article id="hidden">
    <button>通信情報／ブラウザ等情報</button>
    <aside id="links"></aside>
    <section id="howto" class="readme"></section>
    <hr/>
    <br/>
    <nav id="contents"></nav>
  </article>

  <form id="now" action="" method="GET">
    <select class="color" id="bgcolor">
      <option selected>Background Color</option>
    </select>
    <select class="color" id="color">
      <option selected>Color</option>
    </select>
  </form>

  <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
  <script type="text/javascript">
  $(function() {
    $("#howto").load("howto.html");
  });

  const newBGColorAll = document.querySelectorAll('form select, #log button, #hidden, #hidden button');
  for (const newBGColor of newBGColorAll) {
    newBGColor.classList.add("bgcolor")
  }

  const newColorAll = document.querySelectorAll('#log, #log button, #hidden, #hidden button');
  for (const newColor of newColorAll) {
    newColor.classList.add("color")
  }

  const buttonAll = document.querySelectorAll('#info button, #hidden button');
  const body = document.querySelector('body');
  for (const button of buttonAll) {
    button.addEventListener('click', event => {
      body.classList.toggle('open');
    });
  }

  </script>

  <script src="script.js" defer></script>
  <script src="jscolor.js" defer></script>
  <script src="../js/window/battery.js" defer></script>
  <script src="../js/window/geolocation.js" defer></script>
</body>
</html>
