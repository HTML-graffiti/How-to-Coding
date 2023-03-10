<script>
const data_showCSS = document.createElement( "link" );
data_showCSS.href = "../../hello/data_show.css";
data_showCSS.type = "text/css";
data_showCSS.rel = "stylesheet";
document.getElementsByTagName("head")[0].appendChild(data_showCSS);
</script>

<section id="hello" class="data_show">
  <p>
    <a href="https://www.php.net/manual/ja/reserved.variables.server.php">PHP ($_SERVER)</a>
  </p>
  <p>
    <i>通信に必要な情報</i>
    <br/>
    <u data-id="ip">IP</u>
    <span id="ip" class="hide">
      <?php
      echo $_SERVER['REMOTE_ADDR'];
      ?>
    </span>
    <br/>
    <u data-id="host">HOST</u>
    <span id="host" class="hide">
      <?php
      $host = gethostbyaddr($_SERVER['REMOTE_ADDR']);
      echo $host
      ?>
      <br/>
    </span>
    <u data-id="port">PORT</u>
    <span id="port" class="hide">
      <?php
      echo $_SERVER['REMOTE_PORT'];
      ?>
    </span>
  </p>
  <p>
    <i>ブラウザ等情報</i>
    <br/>
    <u data-id="user">USER_AGENT</u>
    <span id="user" class="hide">
      <br/>
      <?php
      echo $_SERVER['HTTP_USER_AGENT'];
      ?>
    </span>
  </p>
  <hr/>
  <p>
    <i>
      これらの情報は、安心・安全なインターネット環境からウェブサイトにアクセスされているかを、ウェブサイトの制作者やウェブサイトを公開（管理）しているサーバーが確認するための仕組みとして、ページを見ている人が発信する情報です。
    </i>
  </p>
</section>
<br/>
<pre>
<font>$_SERVER['REMOTE_ADDR']</font>;
現在ページをみているユーザーの IP アドレス

<font>gethostbyaddr($_SERVER['REMOTE_ADDR']</font>;
現在ページをみているユーザーの IP アドレスに対応するインターネットホスト名

<font>$_SERVER['REMOTE_PORT']</font>;
ユーザーのマシンから Web サーバーへの通信に使用されているポート番号

<font>$_SERVER['HTTP_USER_AGENT']</font>;
ページを見ているユーザーが使用しているブラウザの種類

</pre>

<script src="../../hello/data_show.js"></script>
