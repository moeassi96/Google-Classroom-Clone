<?php
include('../connection.php');

$class_id = $_POST["class_id"];
$user_id = $_POST["user_id"];
$role = $_POST["role"];

try {
   
    $query = $mysqli->prepare(
        "INSERT INTO `classes-enrollments` (class_id, user_id, role)
        VALUES (?, ?, ?)"
    );

    $query->bind_param('sss', $class_id, $user_id, $role);
    $insert_result = $query->execute();

    if ($insert_result) {
        echo json_encode("Enrollment successful");
    } else {
        echo json_encode("Enrollment failed");
    }
} catch (Exception) {
   
    echo json_encode("User already in class");
}
?>















