<?php
include('connection.php');


header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);


$link = $data['submission_url'];
$userid = $data['user_id'];
$classid = $data['class_id'];
$duedate = $data['submission_date'];
$assignmentid=$data['assignment_id'];


$sql = 'insert into submissions(submission_url,user_id,class_id,submission_date,assignment_id) values(?,?,?,?,?)';
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("sssss", $link, $userid, $classid, $duedate, $assignmentid);
if($stmt->execute()){
  $response['status']="success";
}else{
  $response['status']="failure" ;
}
echo(json_encode($response));