<?php
include('connection.php');


$recoveryEmail = $_POST['recoveryEmail'];
$newPassword = $_POST['newPassword'];
$hashed_password = password_hash($newPassword,PASSWORD_BCRYPT);

$stmt = $mysqli->prepare("UPDATE users SET user_password = ? WHERE user_email = ?");
$stmt->bind_param("ss", $hashed_password, $recoveryEmail);
$stmt->execute();


$response['status'] = "Password updated";
echo json_encode($response);