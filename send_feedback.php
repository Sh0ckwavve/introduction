<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';  // Set your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'sahilbane766@gmail.com'; // SMTP username
    $mail->Password = 'your-password'; // SMTP password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    // Recipients
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('sahilbane766@gmail.com');  // Your email

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Feedback from ' . $_POST['name'];
    $mail->Body    = 'Name: ' . $_POST['name'] . '<br>Email: ' . $_POST['email'] . '<br>Phone: ' . $_POST['phone'] . '<br>Message: ' . nl2br($_POST['message']);

    $mail->send();
    echo 'Feedback sent successfully!';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>
