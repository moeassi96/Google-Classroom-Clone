<?php
include('connection.php');

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);


$assignment_name = $data['assignment_name'];
$assignment_paragraph = $data['assignment_description'];
$teacher_id = $data['teacher_id'];
$class_id = $data['class_id'];
$assignment_date = $data['assignment_date'];
$assignment_duedate = $data['assignment_duedate'];

$sql = 'insert into assignments(assignment_name, assignment_paragraph, assignment_date, assignment_duedate, teacher_id, class_id) values(?,?,?,?,?,?)';
$stmt = $mysqli -> prepare($sql);
$stmt -> bind_param('ssssss', $assignment_name, $assignment_paragraph, $assignment_date, $assignment_duedate, $teacher_id, $class_id);
if ($stmt -> execute()){
    $response['status'] = "success";
}else{
    $response['status'] = "failed";
}
echo(json_encode($response));

