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
    <p>echo date("e I O T Z")
        <br/>
        <b>
        <?php
        date_default_timezone_set('Asia/Tokyo');
        echo date("e I O T Z");
        ?>
      </b>
        <br/> echo date("e I O T Z");
    </p>
</body>

</html>