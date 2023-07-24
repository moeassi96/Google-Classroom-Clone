<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$class_id = $data["class_id"];

$query = $mysqli->prepare(
    "SELECT *
    FROM classes
    WHERE class_id = ?"
);

$query->bind_param('s', $class_id);
$query->execute();
$result = $query->get_result();
$classes = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($classes);
?>
