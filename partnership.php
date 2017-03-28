<?php

  $to = "aksenov.mailbox@gmail.com";
  $subject = "Новая заявка на сотрудничество";
  $subject = "=?utf-8?B?".base64_encode($subject)."?=";
  $headers = "From:aksenov.mailbox@gmail.com\r\nReply-To:aksenov.mailbox@gmail.com\r\nContent-type:text/htmlcharset=utf-8\r\n";
  
  $company = htmlspecialchars($_POST["partnership-form__company"]);
  $name = htmlspecialchars($_POST["partnership-form__name"]);
  $email = htmlspecialchars($_POST["partnership-form__email"]);
  $phone = htmlspecialchars($_POST["partnership-form__phone"]);
  $comment = htmlspecialchars($_POST["partnership-form__comment"]);

  if(!$company || !$name || !$email || !$phone || !$comment) {
    header("Location:error.html");
    exit;
  }

  $message = "Здравствуйте!<br>
              Поступила новая заявка на сотрудничество.<br>
              Компания:<b>$company</b><br>
              Имя:<b>$name</b><br>
              Email:<b>$email</b><br>
              Телефон:<b>$phone</b><br>
              Комментарий:<b>$comment</b><br>";
  mail($to, $subject, $message, $headers);
  header("Location:success.html");
  exit;

?>
