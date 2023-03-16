<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width">
  <meta name="format-detection" content="telephone=no" />
  <link rel="stylesheet" href="index.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="../html/elements.css">
  <style type="text/css">
    form {
      margin:  0.5rem auto;
      max-width: 450px;
    }
  </style>
</head>
<body>
  <?php
    // $_POST グローバル変数は、POST メソッドで送信されたデータへ名前でアクセスします。
    // GET メソッドで送信されたデータにアクセスするには、$_GET が使用できます。
    $name = htmlspecialchars($_POST['name']);
    $email  = htmlspecialchars($_POST['email']);
    $website  = htmlspecialchars($_POST['website']);
    $message  = htmlspecialchars($_POST['message']);
    $pass  = htmlspecialchars($_POST['pass']);

    echo  $name, '<br/>', $email, '<br/>', $website, '<br/>', $message, '<br/>', $pass;
  ?>
  <form class="form_tag" action="#yourinfo" method="post">
    <code>action="<i>#yourinfo</i>" method="<i>post</i>"></code>
    <fieldset class="fieldset">
      <legend class="legend">フィールドセットのキャプション</legend>
      <div>
        <label for="name" class="label_tag">for="<i>name</i>">名前</label><br/>
        <label for="name" class="input_tag">type="<b>text</b>" id="<i>name</i>" name="<u>name</u>" required</label><br/>
        <input id="name" type="text" name="name" required></input>
      </div>
      <div>
        <label for="email" class="label_tag">for="<i>email</i>">Eメールアドレス</label><br/>
        <label for="email" class="input_tag">type="<b>email</b>" id="<i>email</i>" name="<u>mail</u>" required</label><br/>
        <input id="email" type="email" name="email" required></input>
      </div>
      <div>
        <label for="website" class="label_tag">for="<i>website</i>">ウェブサイト</label><br/>
        <label for="website" class="input_tag">type="<b>url</b>" id="<i>website</i>" name="<u>website</u>" value="https://"</label><br/>
        <input id="website" type="url" name="website" value="https://"></input>
      </div>
      <div>
        <label for="phone" class="label_tag">for="<i>phone</i>">電話番号</label><br/>
        <label for="phone" class="input_tag">type="<b>tel</b>" id="<i>phone</i>" name="<u>phone</u>" disabled</label><br/>
        <input id="phone" type="tel" name="phone" disabled></input>
      </div>

    </fieldset>

    <fieldset class="label_element checkbox">
      <legend class="input_tag">type="<b>checkbox</b>" name="<u>question</u>" value="<i></i>"</legend>
       <br/>
      <input id="one" type="checkbox" name="question" value="one"></input>
      <label for="one">One</label>
      <input id="two" type="checkbox" name="question" value="two"></input>
      <label for="two">Two</label>
      <input id="three" type="checkbox" name="question" value="three"></input>
      <label for="three">Three</label>
      <br/>
    </fieldset>

    <fieldset class="label_element radio">
      <legend class="input_tag">type="<b>radio</b>" name="<u>answer</u>" value="<i>yes or no</i>"</legend>
      <input id="yes" type="radio" name="answer" value="yes" checked></input>
      <label for="yes">Yes</label>
      <input id="no" type="radio" name="answer" value="no"></input>
      <label for="no">No</label>
      <br/>
    </fieldset>
    <p>
      <label for="pass" class="label_tag">for="<i>pass</i>">パスワード</label><br/>
      <label for="pass" class="input_tag">type="<b>password</b>" id="<i>pass</i>" name="<u>pass</u>" pattern="[a-z|A-Z|0-9]{4,8}"</label><br/>
      <input id="pass" type="password" name="pass" pattern="[a-z|A-Z|0-9]{4,8}"></input>
    </p>
    <hr/>
    <fieldset class="select_tag select"> name="" size="5">
      <legend class="option_tag">value="<i></i>"></legend>
      <select name="" size="5">
        <option disabled selected>選択式メニュー</option>
        <optgroup label="グループ">
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </optgroup>
      </select>
      <br/>
    </fieldset>
    <hr/>
    <label for="message" class="textarea_tag">placeholder="textarea"></label><br/>
    <textarea id="message" name="message" placeholder="textarea"></textarea>

    <div>
      <label for="button" class="button_tag">type="button">button</label><br/>
      <button id="button" type="button">Button</button>
    </div>
    <div>
      <label for="submit" class="input_tag">type="<b>submit</b>"</label><br/>
      <input id="submit" type="submit" name="submit"></input>
    </div>
    <div>
      <label for="reset" class="input_tag">type="<b>reset</b>"</label><br/>
      <input id="reset" type="reset" name="reset"></input>
    </div>
  </form>
</body>
</html>
