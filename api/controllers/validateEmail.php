<?php
include('connection.php');


header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$recoveryEmail = $data['recoveryEmail'];


function isValidEmail($recoveryEmail) {
    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';

    if (preg_match($pattern, $recoveryEmail)) {
        return true;
    } else {
        return false;
    }
}

if (isValidEmail($recoveryEmail)) {
    
    $check_email = $mysqli->prepare('select user_email from users where user_email=?');
    $check_email->bind_param('s', $recoveryEmail);
    $check_email->execute();
    $check_email->store_result();

    $email_exists = $check_email->num_rows();

    if($email_exists == 0){
        $response['status'] = "Email Valid";

    }else{
        $response['status'] = "Email already exists";
    }

} else {
    $response['status'] = 'Wrong email format';
}


echo json_encode($response);