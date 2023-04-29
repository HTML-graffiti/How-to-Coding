<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no" />
  <script src="../../readme/index.js" async></script>
  <link rel="stylesheet" href="../style.css" />
  <link rel="stylesheet" href="../elements.css" />
  <link rel="stylesheet" href="../../readme/style.css" />
  <link rel="stylesheet" href="../../css/pseudo-classes/lightbox.css" />
  <style>
  * {
    transition: 2.5s;
  }

  #one,
  #two,
  #three,
  #four {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    transition: 2.5s;
  }

  #one:target,
  #two:target,
  #three:target,
  #four:target {
    padding: 1rem;
    width: 95%;
    height: 75%;
    color: #000;
    opacity: 1;
    overflow: auto;
    user-select: auto;
    pointer-events: auto;
    filter: invert();
  }

  .readme .close {
    color: #fff;
    filter: invert();
  }

  @font-face {
    font-family: "NewYork";
    src: url("https://creative-community.space/ver/font/NewYork.otf");
  }

  h1#title {
    font-family: "NewYork", serif;
  }

  h1#title::before {
    content:'Text | Hypertext Markup Language';
  }

  #contents::before {
    content:'関連記事';
    font-size: 90%;
  }

  #links::before {
    content:'参考資料';
    font-size: 75%;
  }

  #contents::before,
  #links::before {
    display: block;
    text-decoration: underline;
    margin: 0.5rem 0.25rem;
  }

  section:target font,
  section:target .blue,
  section:target a {
    color: #000;
    border-color: #000;
  }

  code,
  .sample,
  #lastModified {
    font-family: "ipag", monospace;
  }

  .sample {
    box-sizing: border-box;
    font-size: 1.5rem;
    line-height: 150%;
    padding: 7.5rem 2.5rem 5rem;
    min-height: 100vh;
  }

  #howto a {
    filter: invert(0);
  }

  code,
  #lastModified {
    text-align: right;
    line-height: 125%;
    padding: 0.5rem;
    word-break: break-word;
  }

  @media screen and (max-width: 820px) {

    .sample {
      font-size: 3.21vw;
      padding: 20% 2.5% 10%;
      min-height: -webkit-fill-available;
    }

  }

  </style>
</head>
<body>
  <nav id="nav">
    <a href="#one">強調と重要性</a>
    <a href="#two">イタリック、太字、下線</a>
    <a href="#three">小さめのテキスト</a>
    <a href="#four">その他</a>
    <a href="#etc">関連記事</a>
  </nav>

  <main class="sample">
    <p class="p_element"><br/>
      <em class="em_element" contenteditable="true"></em><br/>
      <strong class="strong_element" contenteditable="true"></strong><br/>
    </p>
    <span><<code>br</code>></span>
    <p class="p_element">
      <i class="i_element" contenteditable="true"></i>
      <b class="b_element" contenteditable="true"></b>
      <u class="u_element" contenteditable="true"></u>
    </p>
    <span><<code>hr</code>></span><br/>
    <small class="small_element" contenteditable="true"></small>
    <p class="p_element">
      <sup class="sup_element" contenteditable="true"></sup>
      <<code>wbr</code>>
      <sub class="sub_element" contenteditable="true"></sub>
    </p>
    <span class="span_element" contenteditable="true"></span>
  </main>
  <br/>
  <article id="sample" class="readme">
    <?php readfile('sample.html'); ?>
  </article>
  <article id="howto">
    <?php readfile('howto.html'); ?>
  </article>
  <hr/>
  <br/>
  <p id="lastModified"></p>

  <aside class="lightbox" id="etc">
    <a href="#" class="close" onclick="window.history.back(); return false;"></a>
    <section id="contents" class="translate_center"></section>
    <section id="links" class="fixed_bottom"></section>
  </aside>

  <script type="text/javascript">
  document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'interactive') {
      let lastModified = document.querySelector('#lastModified');
      lastModified.innerHTML =
      'Last Modified: <time datetime="' + document.lastModified + '">' + document.lastModified + '</time>';
    }

    else if (event.target.readyState === 'complete') {
      function random(number) {
        return Math.floor(Math.random() * (number+1));
      }

      function randomRGB() {
        let random255 = `rgb(${random(255)},${random(255)},${random(255)})`;
        return random255;
      }

      const colorAll = document.querySelectorAll('#nav a, .sample *, #sample *, #lastModified *, #etc *');
      for (const colorItem of colorAll) {
        colorItem.style.color = randomRGB();
      }

      const randomRGBbgAll = document.querySelectorAll('#nav a');
      for (const randomRGBbg of randomRGBbgAll) {
        randomRGBbg.addEventListener('click', function(event) {
          const bgSectionAll = document.querySelectorAll('#one, #two, #three, #four');
          for (const bgSection of bgSectionAll) {
            bgSection.style.backgroundColor = randomRGB();
          }
          const colorAll = document.querySelectorAll('#nav a, .sample *, #sample *, #lastModified *');
          for (const colorItem of colorAll) {
            colorItem.style.color = randomRGB();
          }
        });
      }
    }
  });
  </script>
</body>
</html>
