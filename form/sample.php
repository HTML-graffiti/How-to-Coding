<?php
  // $_POST グローバル変数は、POST メソッドで送信されたデータへ名前でアクセスします。
  // GET メソッドで送信されたデータにアクセスするには、$_GET が使用できます。
  $name = htmlspecialchars($_POST['name']);
  $email  = htmlspecialchars($_POST['email']);
  $website  = htmlspecialchars($_POST['website']);
  $message  = htmlspecialchars($_POST['message']);
  $pass  = htmlspecialchars($_POST['pass']);

  echo  $name, '<br/>', $email, '<br/>', $website, '<br/>', $message, '<br/>', $pass;
?>
