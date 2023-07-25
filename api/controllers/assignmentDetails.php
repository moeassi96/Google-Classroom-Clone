<?php

include('connection.php');


$assignment_id = $_POST['assignment_id'];


$stmt = $mysqli->prepare('
    SELECT a.assignment_name,
        
        a.assignment_paragraph,
        a.teacher_id,
        a.assignment_points,
        a.assignment_date,
        a.assignment_duedate,
           u.user_firstname,
           u.user_lastname
    FROM assignments a
    JOIN users u ON a.teacher_id = u.user_id
    WHERE a.assignment_id = ?
');
$stmt->bind_param("i", $assignment_id);
$stmt->execute();

$stmt->store_result();
$stmt->bind_result($assignment_name, $assignment_paragraph, $teacher_id, $assignment_points, $assignment_date, $assignment_duedate, $user_firstname, $user_lastname);
$stmt->fetch();


$response["assignment_name"] = $assignment_name;
$response["assignment_paragraph"] = $assignment_paragraph;
$response["teacher_id"] = $teacher_id;
$response["assignment_points"] = $assignment_points;
$response["assignment_date"] = $assignment_date;
$response["assignment_duedate"] = $assignment_duedate;
$response["user_firstname"] = $user_firstname;
$response["user_lastname"] = $user_lastname;

echo json_encode($response);