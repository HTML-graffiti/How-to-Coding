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
        $timeZone = 'Asia/Tokyo';

        $period = new DatePeriod(
          date_create('first day of this month', timezone_open($timeZone)),
          new DateInterval('P1D'),
          date_create('last day of this month +1 second', timezone_open($timeZone))
        );

        $location = timezone_open($timeZone)->getLocation();
        printf('%10s%9s%8s' . PHP_EOL, 'date', 'sunrise', 'sunset');

        foreach ($period as $day) {
          $sunInfo = date_sun_info(
            $day->getTimeStamp(),
            $location['34.6165'],
            $location['135.4855']
          );
    
          printf('%s%9s%8s' . PHP_EOL,
          $day->format('Y-m-d'),
          $day->setTimeStamp($sunInfo['sunrise'])->format('H:i'),
          $day->setTimeStamp($sunInfo['sunset'])->format('H:i')
        );
      }
        ?>
      </b>
    </p>
</body>

</html>