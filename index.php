<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />
  <script src="index.js" async></script>
  <script src="readme/index.js" async></script>
  <link rel="stylesheet" href="readme/style.css">
  <link rel="stylesheet" href="cover/style.css">
  <link rel="stylesheet" href="cover/mobile.css" media="screen and (max-width: 820px)">
  <link rel="icon" href="/profile/icon.png">
  <link rel="icon" href="/profile/android.png" sizes="192x192" type="image/png">
  <link rel="apple-touch-icon-precomposed" href="/profile/apple.png" sizes="180x180" type="image/png">
</head>

<body id="cover" ononline="update(true)" onoffline="update(false)" onload="update(navigator.onLine)">
  <main id="left">
    <section id="hello" class="data_show">
      <?php require('hello.html'); ?>
    </section>
    <br/>
    <section id="contents"></section>
  </main>
  <article id="right">
    <p><font id="status">(Unknown)</font></p>
    <section id="links"></section>
  </article>
  <script src="js/online/script.js"></script>
</body>
</html>
