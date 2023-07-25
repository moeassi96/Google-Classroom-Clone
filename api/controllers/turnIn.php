<?php
  include('connection.php');

  // header("Content-Type: application/json");
  // $_POST = json_decode(file_get_contents('php://input'), true);

  if(isset($_POST['class_id']) && $_POST['class_id'] != ''){
    $classid = $_POST['class_id'];
  }

  if(isset($_POST['user_id']) && $_POST['user_id'] != ''){
    $userid = $_POST['user_id'];
  }

  if(isset($_POST['assignment_id']) && $_POST['assignment_id'] != ''){
    $assignmentid=$_POST['assignment_id'];
  }

  if(isset($_POST['submission_url']) && $_POST['submission_url'] != ''){
    $link = $_POST['submission_url'];
  }

  if(isset($_FILES["fileInput"]) && $_FILES["fileInput"]["error"] === UPLOAD_ERR_OK){
    $targetDir = "../../public/src/assets/images/submissions/";
    $targetFile = $targetDir . basename($_FILES["fileInput"]["name"]);
    if(move_uploaded_file($_FILES["fileInput"]["tmp_name"], $targetFile)){
      $response['file_upload']="success";
      $link = "http://localhost/google-clone/Google-Classroom-Clone/public/src/assets/images/submissions/" . basename($_FILES["fileInput"]["name"]);
    }
    else
      $response['file_upload']="failure";
  }

  if(isset($_POST['submission_date']) && $_POST['submission_date'] != ''){
    $submission_date = $_POST['submission_date'];
  }

  

  $query = 'insert into submissions(class_id, user_id, assignment_id, submission_url, submission_date) values(?,?,?,?,?)';
  $stmt = $mysqli->prepare($query);
  $stmt->bind_param("sssss", $classid, $userid, $assignmentid, $link, $submission_date, );
  if($stmt->execute()){
    $response['status']="success";
  }else{
    $response['status']="failure" ;
  }
  
  echo(json_encode($response));

?>