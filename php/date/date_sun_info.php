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
date_default_timezone_set('Asia/Tokyo');
$now = time();
$latitude = 34.6165;
$longitude = 135.4855;

echo 'sunrise: ' . date_sunrise($now, SUNFUNCS_RET_STRING, $latitude, $longitude) . "\n";
echo 'sunset: ' . date_sunset($now, SUNFUNCS_RET_STRING, $latitude, $longitude) . "\n";
}
        ?>
      </b>
    </p>
    <p>
        <sup>date_sun_info</sup>
        <br/>
        <b>
        <?php
date_default_timezone_set('Asia/Tokyo');
$now = time();
$latitude = 34.6165;
$longitude = 135.4855;

$sun_info = date_sun_info($now, $latitude, $longitude);
foreach ($sun_info as $key => $val) {
    echo "$key: " . date('H:i:s', $val) . "\n";
}
        ?>
      </b>
    </p>
</body>

</html>