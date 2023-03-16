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
    word-break: break-all;
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
  a,
  u {
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
  <br/>
  <h3>Phone: <u><?php echo $pass; ?></u></h3>
  <hr/>
  <p><?php echo $message; ?></p>
</main>
  <pre>
<<code>?php</code>
// $_POST グローバル変数は、POST メソッドで送信されたデータへ名前でアクセスします。
// GET メソッドで送信されたデータにアクセスするには、$_GET が使用できます。

$name = <code>htmlspecialchars</code>(<code>$_POST['name']</code>);
$email  = <code>htmlspecialchars</code>(<code>$_POST['email']</code>);
$website  = <code>htmlspecialchars</code>(<code>$_POST['website']</code>);
$phone  = <code>htmlspecialchars</code>(<code>$_POST['phone']</code>);
$message  = <code>htmlspecialchars</code>(<code>$_POST['message']</code>);

<code>?</code>>
  </pre>
  <pre>
<<b>?php</b> <code>echo $name</code>; <b>?</b>> // input name="name" の値を出力
<<b>?php</b> <code>echo $email</code>; <b>?</b>> // input name="email" の値を出力
<<b>?php</b> <code>echo $website</code>; <b>?</b>> // input name="website" の値を出力
<<b>?php</b> <code>echo $phone</code>; <b>?</b>> // input name="phone" の値を出力
<<b>?php</b> <code>echo $message</code>; <b>?</b>> // textarea name="message" の値を出力
  </pre>
</body>
</html>
