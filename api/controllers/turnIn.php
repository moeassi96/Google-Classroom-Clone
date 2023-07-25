<?php
  include('connection.php');

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

  if(isset($_POST['assignment_status']) && $_POST['assignment_status'] != ''){
    $status = $_POST['assignment_status'];
  }
  

  if(isset($_FILES["fileInput"]) && $_FILES["fileInput"]["error"] === UPLOAD_ERR_OK){
    $targetDir = "../../public/src/assets/images/submissions/";
    if(!is_dir($targetDir)) {
      mkdir("../../public/src/assets/images/submissions/");
    }
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

  $query = 'insert into submissions(class_id, user_id, assignment_id, submission_url, status, submission_date) values(?,?,?,?,?,?)';
  $stmt = $mysqli->prepare($query);
  $stmt->bind_param("ssssss", $classid, $userid, $assignmentid, $link, $status, $submission_date, );
  if($stmt->execute()){
    $response['status']="success";
    $submission_id = $mysqli->insert_id;
    $due_date = $mysqli -> query("SELECT assignment_duedate FROM assignments WHERE assignment_id = $assignmentid");
    if ($due_date){
      $row = $due_date->fetch_assoc();
      $current_due_date = $row['assignment_duedate'];

      if($submission_date < $current_due_date){
        $result = $mysqli -> query("UPDATE `submissions` SET `status` = 'Turned in' WHERE `submissions`.`submissions_id` = $submission_id;");
        $response['submission_status']="Turned in";
      }
      else{
        $result = $mysqli -> query("UPDATE `submissions` SET `status` = 'Turned in Late' WHERE `submissions`.`submissions_id` = $submission_id;");
        $response['submission_status']="Turned in Late";
      }

    }
    
  }else{
    $response['status']="failure" ;
  }
  
  echo(json_encode($response));

?>