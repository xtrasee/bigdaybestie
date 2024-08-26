<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $date = htmlspecialchars($_POST['date']);
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
        Address: $address\n
        Event Type: $eventType\n
        Estimated Guest Count: $guestCount\n
        Estimated Budget: $budget\n
        How did you hear about us: $hear\n
        Social Media: $social\n
        Additional Info: $info
    ";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Form submission error. Please try again.";
}
?>
