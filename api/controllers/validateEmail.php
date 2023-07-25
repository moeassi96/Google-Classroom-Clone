<?php
include('connection.php');


header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$email = $data['recoveryEmail'];


function isValidEmail($email) {
    $pattern = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';

    if (preg_match($pattern, $email)) {
        return true;
    } else {
        return false;
    }
}

if (isValidEmail($email)) {
    
    $check_email = $mysqli->prepare('select user_email from users where user_email=?');
    $check_email->bind_param('s', $email);
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