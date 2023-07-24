<?php

include('connection.php');

// header("Content-Type: application/json");
// $data = json_decode(file_get_contents('php://input'), true);
$recoveryEmail = $_POST['recoveryEmail'];


$randomCode = mt_rand(100000, 999999);


$stmt = $mysqli->prepare("UPDATE users SET code = ? WHERE user_email = ?");
$stmt->bind_param("is", $randomCode, $recoveryEmail);
$stmt->execute();


$to = $recoveryEmail;
$subject = "Recovery Email";
$message = $randomCode;

$headers = "MIME-Version: 1.0" . "\r\n";
$headers = "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers = "From: <fpl19966@gmail.com>" . "\r\n";

mail($to,$subject,$message,$headers);

$response['status'] = "Mail sent";
echo json_encode($response);