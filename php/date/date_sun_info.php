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
 
 $lon = 34.6165;
 $lat = 135.4855;
  
 echo date("D M d Y"). ', sunrise time : ' . date_sunrise(
     time(),
     SUNFUNCS_RET_STRING,
     $lat,
     $lon,
     90,
     9
 );
  
 echo "<br>";
  
 echo date("D M d Y"). ', sunset time : ' . date_sunset(
     time(),
     SUNFUNCS_RET_STRING,
     $lat,
     $lon,
     90,
     9
 );
        ?>
      </b>
    </p>
</body>

</html>