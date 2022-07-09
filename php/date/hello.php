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
    <p>
        <sup>echo date("e O T Z")</sup>
        <br/>
        <b>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("e O T Z ");
        ?>
      </b>
        <br/>e: タイムゾーン識別子
        <br/>O: グリニッジ標準時(GMT)との時間差
        <br/>T: このマシーンのタイムゾーンの設定
        <br/>Z: タイムゾーンのオフセット秒数
    </p>
</body>

</html>