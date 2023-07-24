<?php
    include('connection.php');

    header("Content-Type: application/json");
    $data = json_decode(file_get_contents('php://input'), true);


    $user_id = $data['user_id'];
    $class_id = $data['class_id'];
    $role = $data['role'];


    $query = $mysqli->prepare("insert into `classes-enrollments`(class_id,user_id,role) values(?,?,?)");
    $query->bind_param('sss', $class_id,$user_id,$role);
    $query->execute();
    $response['status'] = "Joined Successfully";

    echo json_encode($response);

?>