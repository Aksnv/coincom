<?php
  
  $company = htmlspecialchars($_POST["partnership-form__company"]);
  $name = htmlspecialchars($_POST["partnership-form__name"]);
  $email = htmlspecialchars($_POST["partnership-form__email"]);
  $phone = htmlspecialchars($_POST["partnership-form__phone"]);
  $comment = htmlspecialchars($_POST["partnership-form__comment"]);

  $to = "aksenov.mailbox@gmail.com";
  $subject = "Новая заявка на сотрудничество";
  $subject = "=?utf-8?B?".base64_encode($subject)."?=";
  /*$headers = "From:aksenov.mailbox@gmail.com\r\nReply-To:aksenov.mailbox@gmail.com\r\nContent-type:text/plain;charset=utf-8\r\n";*/
  $headers = "From: " . strip_tags($email) . "\r\nReply-To: " . strip_tags($email) . "\r\nContent-type:text/plain;charset=utf-8\r\n";

  if(!$company && !$name && !$email && !$phone && !$comment) {
    header("Location:error.html");
    exit;
  }

  /*$message = "Здравствуйте!<br>
              Поступила новая заявка на сотрудничество.<br>
              Компания:<b>$company</b><br>
              Имя:<b>$name</b><br>
              Email:<b>$email</b><br>
              Телефон:<b>$phone</b><br>
              Комментарий:<b>$comment</b><br>";*/

  $message = "Поступила новая заявка на сотрудничество\r\n
Компания: $company\r\n
Контактное лицо: $name\r\n
Электронная почта: $email\r\n
Контактный телефон: $phone\r\n
Описание запроса: $comment\r\n";

  mail($to, $subject, $message, $headers);
  header("Location:success.html");
  exit;

?>
