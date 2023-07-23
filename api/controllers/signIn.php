
<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$password = $data['password'];

$query = $mysqli->prepare(
    'select user_id, user_firstname,
    user_lastname,
    user_email,
    user_phone,
    user_password,
    user_birthdate,
    user_gender,
    user_image
    from users
    where user_email=?'
);

$query->bind_param('s', $email);
$query->execute();
$query->store_result();
$query->bind_result($user_id,$user_firstname,$user_lastname,$user_email,$user_phone,
$hashed_password, $user_birthdate, $user_gender,$user_image);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['user_id'] = $user_id;
        $response['firstname'] = $user_firstname;
        $response['lastname'] = $user_lastname;
        $response['email'] = $user_email;
        $response['phone'] = $user_phone;
        $response['birthdate'] = $user_birthdate;
        $response['gender'] = $user_gender;
        $response['image'] = $user_image;
     
    } else {
        $response['status'] = "wrong password";
    }
}
echo json_encode($response);