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
    <p>
        <sup>echo date("全日付")</sup>
        <br/>
        <b>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("c");
        ?>
        <br/>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("r");
        ?>
      </b>
        <br/>c: ISO8601 フォーマット日付
        <br/>r: RFC2822 フォーマット日付
    </p>
    <p>
        <sup>echo date("日 | 曜日")</sup>
        <br/>
        <b>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("d D");
        ?>
        <br/>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("j l");
        ?>
      </b>
        <br/>d: 日。2桁の数字(ゼロ詰め)
        <br/>D: 曜日。3文字のテキスト形式
        <br/>j: 日。(1桁はゼロ無し)
        <br/>l: 曜日。フルスペル形式
    </p>
</body>

</html>