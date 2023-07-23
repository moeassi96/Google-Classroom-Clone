<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$class_id = $data["class_id"];

$query = $mysqli->prepare(
    "SELECT u.user_id, u.user_firstname, u.user_lastname
    FROM users u
    JOIN `classes-enrollments` e ON u.user_id = e.user_id
    WHERE e.role = 'teacher' AND e.class_id = ?;"
);

$query->bind_param('s', $class_id);
$query->execute();
$result = $query->get_result();
$teachers = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($teachers);
?>