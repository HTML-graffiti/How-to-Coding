<?php

mb_language("ja");
mb_internal_encoding("UTF-8");

//var_dump($_POST);

// 変数の初期化
$page_flag = 0;

if( !empty($_POST['btn_confirm']) ) {
	$page_flag = 1;
	// セッションの書き込み
	session_start();
	$_SESSION['page'] = true;

} elseif( !empty($_POST['btn_submit']) ) {
	session_start();
	if( !empty($_SESSION['page']) && $_SESSION['page'] === true ) {

	// セッションの削除
	unset($_SESSION['page']);

	$page_flag = 2;

	// 変数とタイムゾーンを初期化
	$header = null;
	$auto_reply_subject = null;
	$auto_reply_text = null;
	$admin_reply_subject = null;
	$admin_reply_text = null;
	date_default_timezone_set('Asia/Tokyo');

	// ヘッダー情報を設定
	$header = "MIME-Version: 1.0\n";
	$header .= "From: Name <noreply@email>\n";
	$header .= "Reply-To: Name <noreply@email>\n";

	// 件名を設定
	$auto_reply_subject = 'Contact | creative-community.space';

	// 本文を設定
	$auto_reply_text = "Thank You for Contact | creative-community.space\n\n";
	$auto_reply_text .= "Date " . date("Y-m-d H:i") . "\n";
	$auto_reply_text .= "Your Name " . $_POST['name'] . "\n\n";
	$auto_reply_text .= "Comment\n" . nl2br($_POST['contact']) . "\n\n";
	$auto_reply_text .= "creative-community.space";

	// メール送信
	mb_send_mail( $_POST['email'], $auto_reply_subject, $auto_reply_text, $header);

	// 運営側へ送るメールの件名
	$admin_reply_subject = "Contact | creative-community.space";

	// 本文を設定
	$admin_reply_text = "Thank You for Contact | creative-community.pe.hu\n\n";
	$admin_reply_text .= "Date：" . date("Y-m-d H:i") . "\n";
	$admin_reply_text .= "Name：" . $_POST['name'] . "\n";
	$admin_reply_text .= "Email：" . $_POST['email'] . "\n\n";
	$admin_reply_text .= "Comment\n" . nl2br($_POST['contact']) . "\n\n";
	$admin_reply_text .= "creative-community.space";

	// 運営側へメール送信
	mb_send_mail( 'noreply@email', $admin_reply_subject, $admin_reply_text, $header);

	} else {
		$page_flag = 0;
	}
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | Personal Home Page Tools</title>
<link rel="stylesheet" href="/coding/submit/form.css"/>
<link rel="stylesheet" href="/coding/fontbook/css/fontmotion.css"/>
<script type="text/javascript" src="http://www.google.com/jsapi"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<style type="text/css">
#confirm {margin:2.5% 5%; font-size:1.5rem;}
</style>
</head>
<body>
<div id="form">
<?php if( $page_flag === 1 ): ?>

<form action="" method="post">
<div id="confirm">
<p>Your Name<br/><b><?php echo $_POST['name']; ?></b></p>
<p>Email<br/><b><?php echo $_POST['email']; ?></b></p>
<p><?php echo nl2br($_POST['contact']); ?></p>
</div>

<p id="next">
<input type="submit" name="btn_back" value="Back">
<input type="submit" name="btn_submit" value="Post">
</p>

<input type="hidden" name="name" value="<?php echo $_POST['name']; ?>">
<input type="hidden" name="email" value="<?php echo $_POST['email']; ?>">
<input type="hidden" name="contact" value="<?php echo $_POST['contact']; ?>">
</form>

<?php elseif( $page_flag === 2 ): ?>
<h3><u>Thank You for Contacts</u></h3>

<?php else: ?>
<section>
<form action="" method="post">
<input id="name" type="name" name="name" placeholder="Your Name" value="<?php if( !empty($_POST['name']) ){ echo $_POST['name']; } ?>" required>
<input id="email" type="email" name="email" placeholder="Email" value="<?php if( !empty($_POST['email']) ){ echo $_POST['email']; } ?>" required>
<br/>
<textarea name="contact" placeholder="このフォームは動作しません | This Form does not work "><?php if( !empty($_POST['contact']) ){ echo $_POST['contact']; } ?></textarea>
<p><input type="submit" name="btn_confirm" value="Submit"></p>
</form>
</section>
<?php endif; ?>

</div>
</body>
</html>
