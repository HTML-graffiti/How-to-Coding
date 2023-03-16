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
  }

  main {
    font-size: 1rem;
    margin: 2.5rem auto 7.5rem;
    max-width: 500px;
    width: 75%;
  }

  a {
    color: #000;
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
  a {
    font-size: 125%;
    font-weight: 500;
  }

  strong,
  code {
    font-size: 150%;
    font-weight: 500;
  }

  pre,
  code {
    font-family: "ipag", monospace;
  }

  code {
    filter: blur(0.2rem);
    pointer-events: none;
    user-select: none;
  }

  pre {
    width: 100%;
    overflow: auto;
  }
  </style>
</head>
<body>
  <main>
  <h1>I am <strong><?php echo $name; ?></strong></h1>
  <h2>Email: <a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></h2>
  <h3>Website: <a href="<?php echo $website; ?>" target="_blank" rel="noreferrer"><?php echo $website; ?></a></h3>
  <p><?php echo $message; ?></p>
  <p>Pass <code><?php echo $pass; ?>aaa</code></p>
</main>
  <pre>
<<strong>?php</strong>
// $_POST グローバル変数は、POST メソッドで送信されたデータへ名前でアクセスします。
// GET メソッドで送信されたデータにアクセスするには、$_GET が使用できます。

<strong>$name</strong> = htmlspecialchars($_POST['name']);
<strong>$email</strong>  = htmlspecialchars($_POST['email']);
<strong>$website</strong>  = htmlspecialchars($_POST['website']);
<strong>$pass</strong>  = htmlspecialchars($_POST['pass']);
<strong>$message</strong>  = htmlspecialchars($_POST['message']);

<strong>?</strong>>
  </pre>
  <pre>
<<b>?php</b> <strong>echo $name</strong>; <b>?</b>> // input name="name" の値を出力
<<b>?php</b> <strong>echo $email</strong>; <b>?</b>> // input name="email" の値を出力
<<b>?php</b> <strong>echo $website</strong>; <b>?</b>> // input name="website" の値を出力
<<b>?php</b> <strong>echo $pass</strong>; <b>?</b>> // input name="pass" の値を出力
<<b>?php</b> <strong>echo $message</strong>; <b>?</b>> // textarea name="message" の値を出力
  </pre>
</body>
</html>
