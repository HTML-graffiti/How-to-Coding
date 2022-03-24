<?php

function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$day = (string)filter_input(INPUT_POST, 'day');
$week = (string)filter_input(INPUT_POST, 'week');
$sp = (string)filter_input(INPUT_POST, 'sp');
$name = (string)filter_input(INPUT_POST, 'name');

$fp = fopen('calendar.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$day, $week, $sp, $name,]);
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
<link rel="stylesheet" href="month.css"/>
</head>
<body>
<ul class="featured">
<li><h1>○月<br>Month</h1></li>
<li><h2>FEATURED</h2>
<span>Day (week) <a href="#">Title</a></span>
</li>
</ul>
<ol class="calendar">
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li class="<?=h($row[1])?> <?=h($row[2])?>">
  <p class="topic"><u><?=h($row[3])?></u></p>
  <h1 class="day"><b><?=h($row[0])?></b></h1>
</li>
<?php endforeach; ?>
<?php else: ?>
<li class="week sp">
  <p class="topic"><u>Name</u></p>
  <h1 class="day"><b>0</b></h1>
</li>
<?php endif; ?>
</ol>
</body>
</html>
