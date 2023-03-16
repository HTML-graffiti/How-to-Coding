<?php
// $_POST グローバル変数は、POST メソッドで送信されたデータへ名前でアクセスします。
// GET メソッドで送信されたデータにアクセスするには、$_GET が使用できます。
$name = htmlspecialchars($_POST['name']);
$email  = htmlspecialchars($_POST['email']);
$website  = htmlspecialchars($_POST['website']);
$message  = htmlspecialchars($_POST['message']);
$pass  = htmlspecialchars($_POST['pass']);

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width">
  <meta name="format-detection" content="telephone=no" />
  <style type="text/css">
  @font-face {
    font-family: "ipag";
    src: url("https://creative-community.space/ver/ipag.ttf");
  }

  body {
    font-family: 'Arial Narrow', 'Arial', sans-serif;
    font-size: 1rem;
    margin: 2.5rem auto;
    max-width: 500px;
    width: 75%;
  }

  h1,
  h2,
  h3 {
    padding: 0.25rem;
    margin: 0;
  }

  h1 {
    font-size: 200%;
    font-weight: 200;
  }

  h2,
  h3,
  u {
    font-size: 125%;
    font-weight: 500;
  }

  strong,
  code {
    font-size: 150%;
    font-weight: 500;
  }

  code {
    font-family: "ipag", monospace;
    filter: blur(0.2rem);
    pointer-events: none;
    user-select: none;
  }
  </style>
</head>
<body>
  <h1>I am <strong><?php echo $name; ?></strong></h1>
  <h2>Email: <u><?php echo $email; ?></u></h2>
  <h3>Website: <u><?php echo $website; ?></u></h3>
  <p><?php echo $message; ?></p>
  <p>Pass <code><?php echo $pass; ?>aaa<code></p>
</body>
</html>
