<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Prepare the email
    $to = "isayatsela@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission from " . $name;
    $body = "You have received a new message from your website contact form.\n\n" .
            "Name: " . $name . "\n" .
            "Email: " . $email . "\n\n" .
            "Message:\n" . $message;

    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message delivery failed.";
    }
}
?>
