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
<title>📝  投稿一覧</title>
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
<p class="writing">📝 投稿一覧</p>
<ul id="list">
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<li class="item">
<p class="name"><?=h($row[0])?></p>
<span class="title"><?=h($row[1])?></span>
</li>
<?php endforeach; ?>
<?php else: ?>
<li class="item">
<p class="name">一言コメント</p>
<span class="title">名前</span>
</li>
<?php endif; ?>
<li class="item">
<p class="name">投稿する</p>
<span class="title">Post</span>
<a class="link" href="submit.php" target="_parent"></a>
</li>
</ul>
</div>
</body>
