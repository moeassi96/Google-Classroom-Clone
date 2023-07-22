<?php
include('connection.php');


// header("Content-Type: application/json");
// $data = json_decode(file_get_contents('php://input'), true);


$email = $_POST['email'];
$password = $_POST['password'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$birthdate = $_POST['birthdate'];
$gender = $_POST['gender'];
$phone = $_POST['phone'];

$check_email = $mysqli->prepare('select user_email from users where user_email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();

$email_exists = $check_email->num_rows();

if($email_exists == 0){
    $hashed_password = password_hash($password,PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(user_firstname,user_lastname,user_email,user_phone,user_password,user_birthdate,user_gender) values(?,?,?,?,?,?,?)');
    $query->bind_param('sssssss', $firstname,$lastname,$email,$phone,$hashed_password, $birthdate, $gender);
    $query->execute();
    $response['status'] = "Sign up successful";
}else{
    $response['status'] = "Email already exists";
}

echo json_encode($response);