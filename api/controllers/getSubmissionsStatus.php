<?php

    include('connection.php');

    header("Content-Type: application/json");
    $data = json_decode(file_get_contents('php://input'), true);

    $user_id = $data['user_id'];
    $assignment_id = $data['assignment_id'];

    $stmt = $mysqli->prepare('
        SELECT s.status
        FROM submissions s
        WHERE s.assignment_id = ? && s.user_id = ?
    ');
    $stmt->bind_param("ss", $assignment_id, $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $response = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($response);

?>