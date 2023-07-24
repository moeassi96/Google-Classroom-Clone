<?php

include('connection.php');


$recoveryEmail = $_POST['recoveryEmail'];
$recoveryCode = $_POST['recoveryCode'];




$stmt = $mysqli->prepare("SELECT code FROM users WHERE user_email = ?");
$stmt->bind_param("s", $recoveryEmail);
$stmt->execute();

$stmt->store_result();
$stmt->bind_result($code);
$stmt->fetch();


if($code == $recoveryCode){
    $response['status'] = "Match";
}else{
    $response['status'] = "No Match";
}

echo json_encode($response);