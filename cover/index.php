<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <script src="../readme/index.js" defer></script>
  <script src="randomGradient.js" defer></script>

  <base target="_blank" rel="noopener noreferrer">
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="../readme/style.css" />
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

  @media screen and (max-width: 820px) {
    #lastModified {
      font-size: 2vw;
    }
  }
  </style>
</head>

<body id="cover">
  <main id="left" class="randomGradient">
    <section id="greeting" class="readme data_show">
      <?php include('hello.html'); ?>
    </section>
    <br/>
    <aside id="links"></aside>
  </main>
  <article id="right" class="randomGradient">
    <section id="howto" class="readme data_show">
      <?php include('howto.html'); ?>
    </section>
    <hr/>
    <nav id="contents"></nav>
    <hr/>
    <p id="lastModified">Copyright (C) 2020 creative-community.space</p>
  </article>
  <h1 id="title">The Coverpage | How to Coding</h1>
</body>
</html>
