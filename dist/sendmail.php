<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
// $name = $_POST['name'];
// $email = $_POST['email'];
// // $text = $_POST['text'];
// $phone = $_POST['phone'];

// Формирование самого письма
$body = '<h1>Встречайте супер письмо!</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Имя:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>E-mail:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['phone']))) {
    $body .= '<p><strong>Телефон:</strong> ' . $_POST['phone'] . '</p>';
}


// Формирование самого письма
// $title = "Заголовок письма";
// $body = "
// <h2>Новое письмо</h2>
// <b>Имя:</b> $name<br>
// <b>Почта:</b> $email<br><br>
// <b>Телефон:</b><br>$phone
// ";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'viktor_testov.97@mail.ru'; // Логин на почте
    $mail->Password   = 'Y1kSPksYEp20Mv33u25L'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('viktor_testov.97@mail.ru', 'phpmailertest'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('viktor_testov.97@mail.ru');

    // // Прикрипление файлов к письму
    // if (!empty($file['name'][0])) {
    //     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
    //         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
    //         $filename = $file['name'][$ct];
    //         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
    //             $mail->addAttachment($uploadfile, $filename);
    //             $rfile[] = "Файл $filename прикреплён";
    //         } else {
    //             $rfile[] = "Не удалось прикрепить файл $filename";
    //         }
    //     }
    // }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
