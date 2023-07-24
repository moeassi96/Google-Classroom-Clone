<?php
include('connection.php');


header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$user_id;


$params = array();
$query = 'UPDATE users SET ';
$paramTypes = '';
$paramValues = array();

if (isset($data['user_id']) && !empty($data['user_id'])) {
    $user_id = $data['user_id'];
}
if (isset($data['email']) && !empty($data['email'])) {
    $params['email'] = $data['email'];
    $query .= 'user_email=?, ';
    $paramTypes .= 's';
    $paramValues[] = &$params['email'];
}
if (isset($data['password']) && !empty($data['password'])) {
    $params['password'] = $data['password'];
    $query .= 'user_password=?, ';
    $paramTypes .= 's';
    $paramValues[] = &$params['password'];
}
if (isset($data['firstname']) && !empty($data['firstname'])) {
    $params['firstname'] = $data['firstname'];
    $query .= 'user_firstname=?, ';
    $paramTypes .= 's';
    $paramValues[] = &$params['firstname'];
}
if (isset($data['lastname']) && !empty($data['lastname'])) {
    $params['lastname'] = $data[''];
    $query .= 'user_lastname=?, ';
    $paramTypes .= 's';
    $paramValues[] = &$params['lastname'];
}
if (isset($data['']) && !empty($data[''])) {
    $params['birthdate'] = $data['birthdate'];
    $query .= 'user_birthdate=?, ';
    $paramTypes .= 's';
    $paramValues[] = &$params['birthdate'];
}
if (isset($data['gender']) && !empty($data['gender'])) {
    $params['gender'] = $data['genderphonenumber'];
    $query .= 'user_gender=?, ';
    $paramTypes .= 's';
    $paramValues[] = &$params['gender'];
}
if (isset($data['phonenumber']) && !empty($data['phonenumber'])) {
    $params['phonenumber'] = $data['phonenumber'];
    $query .= 'user_phonenumber=?, ';
    $paramTypes .= 's';
    $paramValues[] = &$params['phonenumber'];
}

$query = rtrim($query, ', ') . '';
$query.= " WHERE user_id = $user_id";

if (!empty($params)) {
   
    $stmt = $mysqli->prepare($query);

    if($stmt){
       
        $paramTypeReferences = array();
        foreach ($paramValues as $key => $value)
            $paramTypeReferences[$key] = &$paramValues[$key];
        
        //appending param Types 's' to the head of array
        array_unshift($paramTypeReferences, $paramTypes);
    
        //Dynamic Binding of params
        call_user_func_array(array($stmt, 'bind_param'), $paramTypeReferences);
    
        if ($stmt->execute()) {
            $response['status'] = "update successfull";
        } else {
            $response['status'] = "update failed";
        }
    }
    else{
        $response['status'] = "Failed to prepare statement";
    }
} else {
    $response['status'] = "No data to insert";
}


echo json_encode($response);