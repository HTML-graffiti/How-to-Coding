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
<title>✍ 投稿フォーム</title>
<link rel="stylesheet" href="form.css"/>
<style type="text/css">
</style>
</head>
<body>
<div id="contents">
<p class="writing">✍ 投稿フォーム</p>
<section id="form">
<form action="complete.php" method="post">
<input type="text" name="name" placeholder="一言コメント" required>
<input type="text" name="title" placeholder="名前" required>
<button type="submit">投稿 POST</button>
</form>
</section>
</div>
</body>
