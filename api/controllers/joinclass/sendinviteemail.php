<?php

include('../connection.php');

// header("Content-Type: application/json");
// $data = json_decode(file_get_contents('php://input'), true);
$email = $_POST['email'];
$role = $_POST['role'];
$class_id = $_POST['class_id'];
$user_id = $_POST['user_id'];


$to = $email;
$subject = "Google-Classroom Invite";
$message = "file:///C:/xampp/htdocs/google-clone/Google-Classroom-Clone/public/views/joinclass.html?class_id={$class_id}&user_id={$user_id}&role={$role}";


$headers = "From: <fpl19966@gmail.com>" . "\r\n";

mail($to,$subject,$message,$headers);

$response['status'] = "Mail sent";

echo json_encode($response);