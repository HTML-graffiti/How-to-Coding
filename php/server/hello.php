<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Date/Time | Personal Home Page Tools </title>
    <style type="text/css">

    </style>
</head>

<body>
<p class="ip">
<?php
echo 'USER : '. $_SERVER['HTTP_USER_AGENT']."<br/>";
echo 'IP : '. $_SERVER['REMOTE_ADDR']."<br/>";
echo 'SERVER : '. $_SERVER['SERVER_NAME']."<br/>";
echo 'PROTOCOL : '. $_SERVER['SERVER_PROTOCOL']."<br/>";
?>
</p>
</body>

</html>