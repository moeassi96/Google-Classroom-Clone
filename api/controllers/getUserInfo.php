
<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$user_id = $data['user_id'];

$query = $mysqli->prepare(
    'select user_firstname,
    user_lastname,
    user_email,
    user_birthdate,
    user_gender
    from users
    where user_id=?'
);

$query->bind_param('s', $user_id);
$query->execute();
$query->store_result();
$query->bind_result($user_firstname,$user_lastname,$user_email,
 $user_birthdate, $user_gender);
$query->fetch();


$response['firstname'] = $user_firstname;
$response['lastname'] = $user_lastname;
$response['email'] = $user_email;
$response['birthdate'] = $user_birthdate;
$response['gender'] = $user_gender;
   
echo json_encode($response);