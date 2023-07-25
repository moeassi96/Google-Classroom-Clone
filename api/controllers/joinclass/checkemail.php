<?php
include('../connection.php');

$email = $_POST["email"];


$check_email = $mysqli->prepare('select user_email from users where user_email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();

$email_exists = $check_email->num_rows();

if($email_exists == 0){
    $response['status'] = "User not found";

}else{
    $response['status'] = "User found";
}

echo json_encode($response);