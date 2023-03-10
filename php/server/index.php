<?php
$title = 'Server Information & The User-Agent';
$description = 'このページでは、PHP の $_SERVER を使って、ページを見ている人が発信する情報の一部を表示します。';
$site = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://' . "{$_SERVER['HTTP_HOST']}";
$url = "{$site}" . "{$_SERVER['REQUEST_URI']}";
?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />
  <title><?php echo $title; ?></title>
  <meta name="description" content="<?php echo $description; ?>">
  <meta property="og:title" content="<?php echo $title; ?>" />
  <meta property="og:description" content="<?php echo $description; ?>" />
  <meta property="og:site_name" content="<?php echo $_SERVER['HTTP_HOST']; ?>" />
  <meta property="og:url" content="<?php echo $url; ?>" />
  <meta property="og:image" content="<?php echo $url; ?>cover.png" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="ja_JP" />
  <meta name="twitter:site" content="@pe_hu_" />
  <meta name="twitter:card" content="summary" />
  <link rel="stylesheet" href="../../cover/style.css" />
  <link rel="stylesheet" href="../../cover/mobile.css" media="screen and (max-width: 820px)">
  <style>
  #hello p {
    word-break: break-all;
  }
  </style>
</head>
<body id="cover">
  <main id="left" class="readme"></main>
  <article id="right"></article>
  <h1 id="title">Server Information & The User-Agent</h1>

  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script type="text/javascript">
  $(function() {
    $("#left").load("hello.php");
    $("#right").load("howto.html");
  })
  </script>
</body>
</html>
