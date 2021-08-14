<?php
function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

$text = (string)filter_input(INPUT_POST, 'text');

$fp = fopen('log.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$text,]);
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
<title>CSV to PHP | creative-community.pe.hu</title>
<meta name="description" content="CSVファイルに書き込んだ内容を、HTMLに呼び出す by Kazuma Sasajima">
<meta name="keywords" content="CSV,to,PHP,Coding">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style></style>
</head>
<body>
<?php if (!empty($rows)): ?>
<?php foreach ($rows as $row): ?>
<span><?=h($row[0])?></span>
<?php endforeach; ?>
<?php else: ?>
<?php endif; ?>
</body>
</html>
