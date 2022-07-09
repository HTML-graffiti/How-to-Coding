<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> date_sun_info | Personal Home Page Tools </title>
    <style type="text/css">

    </style>
</head>

<body>
    <p>
        <sup>date_sun_info</sup>
        <br/>
        <b>
        <?php
        $sun_info = date_sun_info(strtotime(echo date("Y-m-d")), 34.616575, 135.485586);
        foreach ($sun_info as $key => $val) {
          echo "$key: " . date("H:i:s", $val) . "\n";
        }
        ?>
      </b>
    </p>
</body>

</html>