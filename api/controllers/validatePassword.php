<?php
include('connection.php');


// header("Content-Type: application/json");
// $data = json_decode(file_get_contents('php://input'), true);

$password = $_POST['password'];

function isValidPassword($password){
    $pattern = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@#$%^&*!])[A-Za-z\d\-_@#$%^&*!]{8,}$/';

    if (preg_match($pattern, $password)) {
        return true;
    } else {
        return false;
    }

}

if(isValidPassword($password)){
    $response['status'] = "Password Valid";
}else{
    $response['status'] = "Invalid Password";
}

echo json_encode($response);