<?php
require 'vendor/phpmailer/phpmailer/PHPMailerAutoload.php';

$data=(object)json_decode(file_get_contents('php://input'),TRUE);

$mail = new PHPMailer;

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = "smtp.gmail.com";  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'jskweres@gmail.com';                 // SMTP username
$mail->Password = 'Daisy003!';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom($data->email, 'DME Denial Guide');
$mail->addAddress('jskweres@gmail.com', 'Justin Skweres');     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $data->subject;
$mail->Body    = $data->message;
$mail->AltBody = $data->message;
var_dump($data);

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent.';
}
?>