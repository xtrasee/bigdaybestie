<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
    $flexibility = htmlspecialchars($_POST['date_flexible']);
    $address = htmlspecialchars($_POST['address']);
    $eventType = htmlspecialchars($_POST['type']);
    $guestCount = htmlspecialchars($_POST['count']);
    $budget = htmlspecialchars($_POST['budget']);
    $hear = htmlspecialchars($_POST['hear']);
    $social = htmlspecialchars($_POST['social']);
    $info = htmlspecialchars($_POST['info']);

    $to = "nguyenhctracy@gmail.com";
    $subject = "New Contact Form Submission";
    $message = "
        Name: $name\n
        Email: $email\n
        Phone: $phone\n
        Event Date: $date\n
        Flexible: $flexibility\n
        Address: $address\n
        Event Type: $eventType\n
        Estimated Guest Count: $guestCount\n
        Estimated Budget: $budget\n
        How did you hear about us: $hear\n
        Social Media: $social\n
        Additional Info: $info
    ";

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 2; // Or 3 for more verbosity

        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                  // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'nguyenhctracy@gmail.com';            // SMTP username
        $mail->Password   = 'xpuj jhyr wlcu nfnm';                  // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('your-email@yourdomain.com', 'Mailer');
        $mail->addAddress($to);                                     // Add a recipient

        // Content
        $mail->isHTML(false);                                       // Set email format to plain text
        $mail->Subject = $subject;
        $mail->Body    = $message;

        $mail->send();
        echo "Thank you for contacting us. We will get back to you soon.";
    } catch (Exception $e) {
        echo "Sorry, there was an error sending your message. Please try again later.";
        error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
} else {
    echo "Form submission error. Please try again.";
}
?>
