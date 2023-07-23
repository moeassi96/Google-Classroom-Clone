<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$user_id = $data['user_id'];
$class_id = $data['class_id'];

$query = $mysqli->prepare(
    "SELECT `role`
    FROM `classes-enrollments`
    WHERE user_id = ? AND class_id = ?"
);

$query->bind_param('ss', $user_id, $class_id);
$query->execute();
$result = $query->get_result();
$role = $result->fetch_assoc();

echo json_encode($role);
?>