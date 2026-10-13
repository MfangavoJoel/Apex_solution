<?php
// 1. Allow the React frontend to communicate with this script
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// 2. Read the JSON data sent from the Next.js fetch request
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// 3. Block empty submissions (Server-side validation)
if (empty($_POST['name']) || empty($_POST['email'])) {
    http_response_code(400);
    die(json_encode(['error' => 'Missing required fields']));
}

// 4. Set up the email parameters
$to = "operations@apexfreight.co.tz";
$subject = "New Freight Quote Request from " . strip_tags($_POST['name']);

// 5. Format the email body
$message = "New Quote Request:\n\n";
$message .= "Client Name: " . strip_tags($_POST['name']) . "\n";
$message .= "Email: " . strip_tags($_POST['email']) . "\n";
$message .= "Phone: " . strip_tags($_POST['phone']) . "\n\n";
$message .= "Cargo Details:\n" . strip_tags($_POST['cargoDetails']) . "\n";

// 6. Security Headers (CRITICAL to bypass spam filters)
$headers = "From: operations@apexfreight.co.tz\r\n"; // Must send from the exact domain
$headers .= "Reply-To: " . strip_tags($_POST['email']) . "\r\n"; // Allows direct replies to the customer
$headers .= "X-Mailer: PHP/" . phpversion();

// 7. Fire the email using Hostinger's native mail function
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(['message' => 'Quote request sent successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Server failed to send email.']);
}
?>