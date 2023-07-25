<?php
include('../connection.php');


$class_id = $_POST["class_id"];

$query = $mysqli->prepare(
    "SELECT c.class_name
    FROM classes c
    WHERE c.class_id = ?"
);

$query->bind_param('s', $class_id);
$query->execute();
$result = $query->get_result();
$name = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($name);
?>