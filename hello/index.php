<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />
  <script src="../readme/index.js" defer></script>
  <link rel="stylesheet" href="../readme/style.css" />
  <link rel="stylesheet" href="../cover/style.css" />
  <link rel="stylesheet" href="../cover/mobile.css" />
  <style>
  #contents::before {
    content:'関連記事';
  }

  #links::before {
    content:'使用例) Usage Example';
  }

  #contents::before,
  #links::before {
    text-decoration: underline;
    display: block;
    font-family: "ipag", monospace;
    font-size: 75%;
    margin: 0.5rem 0.25rem;
  }

  #lastModified {
    font-family: "ipag", monospace;
    text-align: right;
    line-height: 125%;
    word-break: break-word;
  }
  </style>
  <base target="_blank" rel="noopener noreferrer">
</head>
<body id="cover">
  <main id="left">
    <div id="greeting" class="readme data_show">
      <?php readfile('hello.html'); ?>
    </div>
  </main>
  <article id="right">
    <div id="links"></div>
    <br/>
    <div id="hello" class="data_show">
      <?php readfile('howto.html'); ?>
    </div>
    <br/>
    <div id="contents"></div>
    <br/>
    <p id="lastModified">Copyright (C) 2021 creative-community.space</p>
  </article>
  <h1 id="title">The Greeting Page | How to Coding</h1>
</body>
</html>
