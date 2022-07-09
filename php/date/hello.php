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
        <sup>echo date("タイムゾーン")</sup>
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
        echo date("jS l");
        ?>
      </b>
        <br/>d: 日。2桁の数字(ゼロ詰め)
        <br/>D: 曜日。3文字のテキスト形式
        <br/>j: 日。(1桁はゼロ無し)
        <br/>S: 序数を表すサフィックス
        <br/>l: 曜日。フルスペル形式
    </p>
    <p>
        <sup>echo date("月 | 年")</sup>
        <br/>
        <b>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("F n Y");
        ?>
        <br/>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("M m y");
        ?>
      </b>
        <br/>F: 月。フルスペルの文字
        <br/>n: 月。数字(1桁はゼロ無し)
        <br/>M: 月。3文字形式
        <br/>m: 月。数字(ゼロ詰め)
        <br/>Y: 年。4 桁の数字
        <br/>y: 年。2 桁の数字
    </p>
    <p>
        <sup>echo date("時 | 分")</sup>
        <br/>
        <b>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("G A g i s");
        ?>
        <br/>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("H a h i s");
        ?>
      </b>
        <br/>G: 時。24時間単位(1桁はゼロ無し)
        <br/>H: 時。数字。24 時間単位(ゼロ詰め)
        <br/>A: 午前または午後（大文字）
        <br/>a: 午前または午後（小文字）
        <br/>g: 時。12時間単位(1桁はゼロ無し)
        <br/>h: 時。数字。12 時間単位(ゼロ詰め)
        <br/>i: 分(ゼロ詰め)
        <br/>s: 秒(ゼロ詰め)
    </p>
</body>

</html>