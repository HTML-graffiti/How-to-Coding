<?php

function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$name = (string)filter_input(INPUT_POST, 'name');
$title = (string)filter_input(INPUT_POST, 'title');
$link = (string)filter_input(INPUT_POST, 'link');

$fp = fopen('log.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$name, $title, $link]);
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
<head>
<meta charset="UTF-8">
<title>📝  List of The Website of Listing somethings</title>
<link rel="stylesheet" href="form.css"/>
<script type="text/javascript">
$(function(){
    $("#").load("");
})
</script>
<style type="text/css">
</style>
</head>
<body>
<div id="contents">
<p class="writing">📝 List of The Website of Listing somethings</p>
<ul id="list">
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li class="item">
<p class="name"><?=h($row[0])?></p>
<span class="title"><?=h($row[1])?></span>
<a class="link" href="<?=h($row[2])?>" target="_blank" rel="noopener noreferrer"></a>
</li>
<?php endforeach; ?>
<?php else: ?>
<?php endif; ?>
</ul>
</div>
</body>
