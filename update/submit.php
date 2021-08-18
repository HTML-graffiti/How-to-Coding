<?php
function h($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
$title = (string)filter_input(INPUT_POST, 'title');
$language = (string)filter_input(INPUT_POST, 'language');
$status = (string)filter_input(INPUT_POST, 'status');
$contents = (string)filter_input(INPUT_POST, 'contents');
$link = (string)filter_input(INPUT_POST, 'link');

$fp = fopen('index.csv', 'a+b');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    flock($fp, LOCK_EX);
    fputcsv($fp, [$title, $language, $status, $contents, $link,]);
    rewind($fp);
}

flock($fp, LOCK_SH);
while ($row = fgetcsv($fp)) {
    $rows[] = $row;
}
flock($fp, LOCK_UN);
fclose($fp);

?>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title> Submit | How to Coding </title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
$("#").load("");
})
</script>
<link rel="stylesheet" href="/coding/submit/org/book.css"/>
<style type="text/css">
@font-face {
  font-family: "NewYork";
  src: url("/coding/fontbook/NewYork.otf");
}
@font-face {
  font-family: "ipaexm";
  src: url("http://creative-community.pe.hu/coding/fontbook/family/IPAex/ipaexm.ttf");
}

html, button {font-family:"NewYork", "ipaexm", serif;}
</style>
</head>
<body>
<div id="header">
<a href="/coding/">How to Coding</a>
<a href="/coding/update/">Update</a>
</div>
<form action="complete.php" id="org" method="post" target="_parent">
<p><input type="text" name="title" placeholder="title" required></p>
<div class="search-box language">
<ul>
<li>
<input type="radio" name="language" value="website" id="website">
<label for="website" class="label">Website</label></li>
<li>
<input type="radio" name="language" value="css" id="css">
<label for="css" class="label">CSS</label></li>
<li>
<input type="radio" name="language" value="js" id="js">
<label for="js" class="label">JavaScript</label></li>
<li>
<input type="radio" name="language" value="php" id="php">
<label for="php" class="label">PHP</label></li>
<li>
<input type="radio" name="language" value="etc" id="etc">
<label for="etc" class="label">ETC.</label></li>
</ul>
</div>
<div class="search-box status">
<ul>
<li>
<input type="radio" name="status" value="done" id="done">
<label for="done" class="label">My Works</label></li>
<li>
<input type="radio" name="status" value="basic" id="basic">
<label for="basic" class="label">Basic</label></li>
<li>
<input type="radio" name="status" value="guide" id="guide">
<label for="guide" class="label">Guide</label></li>
<li>
<input type="radio" name="status" value="library" id="library">
<label for="library" class="label">Library</label></li>
<li>
<input type="radio" name="status" value="tools" id="tools">
<label for="tools" class="label">Tools</label></li>
<li>
<input type="radio" name="status" value="hints" id="hints">
<label for="hints" class="label">Hints</label></li>
</ul>
<p><textarea name="contents" placeholder="about this" required></textarea></p>
<p><input type="text" name="link" placeholder="link" required></p>
</div>
<div class="reset">
<button type="submit">Submit | 投稿する</button>
</div>
</form>
</body>
</html>
