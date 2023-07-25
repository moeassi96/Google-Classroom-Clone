<?php
include('../connection.php');


$email = $_POST["email"];

$query = $mysqli->prepare('SELECT user_id FROM users WHERE user_email = ?');
$query->bind_param('s', $email);
$query->execute();
$result = $query->get_result();
$id = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($id);
?>