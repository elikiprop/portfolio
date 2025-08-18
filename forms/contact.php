<?php
/**
 * Contact Form Handler for Eli Kiprop Portfolio
 * Updated: 2025
 */

// Your email address where messages will be sent
$receiving_email_address = 'elikiprop42@gmail.com';

// Get form data safely
$name    = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
$email   = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$subject = isset($_POST['subject']) ? strip_tags($_POST['subject']) : 'Portfolio Contact';
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

// Validate required fields
if (!$name || !$email || !$message) {
    http_response_code(400);
    echo "Please fill in all required fields.";
    exit;
}

// Email headers
$headers   = "From: $name <$email>\r\n";
$headers  .= "Reply-To: $email\r\n";
$headers  .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Compose email
$email_body  = "You have a new message from your portfolio contact form:\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

// Send email
if (mail($receiving_email_address, $subject, $email_body, $headers)) {
    http_response_code(200);
    echo "Thank you $name, your message has been sent successfully!";
} else {
    http_response_code(500);
    echo "Sorry, something went wrong. Please try again later.";
}
?>
