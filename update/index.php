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
        <meta name="description" content="これまでに制作したウェブページ、コーディングのヒント・便利なツールなどをリストアップします。">

        <title> How to Coding | creative-community.space </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="../submit/org/org.js"></script>
        <script src="../js/randomcolor.js"></script>
        <script type="text/javascript">
            $(function() {
                jQuery('body').css({
                    'background': getRumRgba()
                });
            });

            $(function() {
                $('.list li').hover(function() {
                    $(this).css({
                        'background': getRumRgba()
                    });
                }, function() {
                    $(this).css({
                        'background': ''
                    });
                });
            });

            $(function() {
                $("#").load("");
            })
        </script>
        <link rel="stylesheet" href="index.css" />
        <link rel="stylesheet" href="../css/radius.css" />
        <style type="text/css">
            @font-face {
                font-family: "NewYork";
                src: url("../fontbook/NewYork.otf");
            }
            
            @font-face {
                font-family: "ipaexm";
                src: url("../fontbook/family/IPAex/ipaexm.ttf");
            }
            
            body {
                overflow-x: 0;
            }
            
            html,
            .reset-button {
                font-family: "NewYork", "ipaexm", serif;
            }
            
            .list #done {
                zoom: 1.5;
            }
            
            .list li span {
                animation: 2s ease-in infinite fontmotion;
            }
            
            #bg_link {
                position: fixed;
                z-index: 100;
                top: 0;
                right: 0;
                color: #000;
                line-height: 1.5rem;
                letter-spacing: .1rem;
                padding: 0.5rem 0.25rem;
                font-family: "NewYork", "ipaexm", serif;
                font-size: 0.9rem;
                text-decoration: none;
                display: inline-block;
                -ms-writing-mode: tb-rl;
                writing-mode: vertical-rl;
                transition: .5s all;
            }
            
            #bg_link i {
                padding: 0.5rem 0.25rem;
            }
        </style>
    </head>

    <body>

        <span id="bg_link">Update 
            <i>
                <?php
                $mod = filemtime("index.csv");
                date_default_timezone_set('Asia/Tokyo');
                print "".date("m.d.y H:i",$mod);
                ?>
            </i>
        </span>

        <div id="header">
            <a href="/coding/">How to Coding</a>
        </div>

        <form id="org">
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
            </div>
            <div class="reset">
                <input type="reset" name="reset" value="RESET" class="reset-button">
            </div>
        </form>

        <ul class="list">
            <?php if (!empty($rows)): ?>
            <?php foreach ($rows as $row): ?>
            <li id="<?=h($row[2])?>" class="list_item list_toggle radius" data-language="<?=h($row[1])?>" data-status="<?=h($row[2])?>">
                <span><?=h($row[0])?></span>
                <p>
                    <?=h($row[3])?>
                </p>
                <a href="<?=h($row[4])?>" target="_blank" rel="noopener noreferrer"></a>
            </li>
            <?php endforeach; ?>
            <?php else: ?>
            <li id="<?=h($row[2])?>" class="list_item list_toggle radius" data-language="<?=h($row[1])?>" data-status="<?=h($row[2])?>">
                <span>Title</span>
                <p>contents</p>
                <a href="<?=h($row[4])?>" target="_blank" rel="noopener noreferrer"></a>
            </li>
            <?php endif; ?>
        </ul>
    </body>

    </html>