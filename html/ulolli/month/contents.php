
<?php

function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$week = (string)filter_input(INPUT_POST, 'week');
$day = (string)filter_input(INPUT_POST, 'day');
$open = (string)filter_input(INPUT_POST, 'open');
$to = (string)filter_input(INPUT_POST, 'to');
$show = (string)filter_input(INPUT_POST, 'show');
$title = (string)filter_input(INPUT_POST, 'title');
$topic = (string)filter_input(INPUT_POST, 'topic');
$topic_title = (string)filter_input(INPUT_POST, 'topic_title');
$topic_price = (string)filter_input(INPUT_POST, 'topic_price');

$fp = fopen('calendar.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$week,$day,$open,$to,$show,$title,$topic,$topic_title,$topic_price,]);
    rewind($fp);
}
flock($fp, LOCK_SH);
while ($row = fgetcsv($fp)) {
    $rows[] = $row;
}
flock($fp, LOCK_UN);
fclose($fp);

?>
<!DOCTYPE html>
<html lang="ja">
<head>
<title>Calendar | Ul Ol Li</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="png">
<link rel="stylesheet" href="calendar.css"/>
<style></style>
</head>
<body>
<ul class="featured">
<li><h1><b> ○月<br>Month</b></h1></li>
<li><h1>FEATURED</h1>
Day (week) <a href="#">Title</a>
</li>
</ul>
<ol class="calendar">
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li class="<?=h($row[2])?> <?=h($row[0])?>">
  <b class="day"><?=h($row[1])?></b>
  <p class="to <?=h($row[3])?>">
    <b></b><br>
    <u class="hour"></u>
  </p>
  <p class="show <?=h($row[4])?>">
    <b></b><br>
    <u class="hour"></u>
    <span class="title"><?=h($row[5])?></span>
  </p>
  <p class="topic <?=h($row[6])?>">
    <u><?=h($row[7])?></u><br/>
    <span class="price"><?=h($row[8])?></span>
  </p>
</li>
<?php endforeach; ?>
<?php else: ?>
<li class="open week">
  <b class="day">Day</b>
  <p class="to open">
    <b></b><br>
    <u class="hour"></u>
  </p>
  <p class="show end">
    <b></b><br>
    <u class="hour"></u>
    <span class="title">Title</span>
  </p>
  <p class="topic">
    <u>Title</u><br/>
    <span class="price">¥000-</span>
  </p>
</li>
<?php endif; ?>
</ol>
</body>
</html>
