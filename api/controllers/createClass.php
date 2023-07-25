<?php
    include('connection.php');

    header("Content-Type: application/json");
    $data = json_decode(file_get_contents('php://input'), true);

    $params = array();
    $query = 'INSERT INTO classes (';
    $paramTypes = '';
    $paramValues = array();

    if (isset($data['creator_id']) && !empty($data['creator_id'])) {
        $params['creator_id'] = $data['creator_id'];
        $query .= 'creator_id, ';
        $paramTypes .= 's';
        $paramValues[] = &$params['creator_id'];
    }

    if (isset($data['class_name']) && !empty($data['class_name'])) {
        $params['class_name'] = $data['class_name'];
        $query .= 'class_name, ';
        $paramTypes .= 's';
        $paramValues[] = &$params['class_name'];
    }

    if (isset($data['class_section']) && !empty($data['class_section'])) {
        $params['class_section'] = $data['class_section'];
        $query .= 'class_section, ';
        $paramTypes .= 's';
        $paramValues[] = &$params['class_section'];
    }

    if (isset($data['class_subject']) && !empty($data['class_subject'])) {
        $params['class_subject'] = $data['class_subject'];
        $query .= 'class_subject, ';
        $paramTypes .= 's';
        $paramValues[] = &$params['class_subject'];
    }

    if (isset($data['class_link']) && !empty($data['class_link'])) {
        $params['class_link'] = $data['class_link'];
        $query .= 'class_link, ';
        $paramTypes .= 's';
        $paramValues[] = &$params['class_link'];
    }

    if (isset($data['meeting_link']) && !empty($data['meeting_link'])) {
        $params['meeting_link'] = $data['meeting_link'];
        $query .= 'meeting_link, ';
        $paramTypes .= 's';
        $paramValues[] = &$params['meeting_link'];
    }

    $query = rtrim($query, ', ') . ')';

    $query .= ' VALUES (';
    for ($i = 0; $i < count($paramValues); $i++) {
        $query .= '?, ';
    }
    $query = rtrim($query, ', ') . ')';

    if (!empty($params)) {
        $stmt = $mysqli->prepare($query);
        $paramTypeReferences = array();
        foreach ($paramValues as $key => $value)
            $paramTypeReferences[$key] = &$paramValues[$key];
        

        array_unshift($paramTypeReferences, $paramTypes);
        call_user_func_array(array($stmt, 'bind_param'), $paramTypeReferences);

        if ($stmt->execute()) {
            $insertId = $mysqli->insert_id;
            $response['insert_id'] = $insertId;
            $response['status'] = "Class Added Successfully";
        } else {
            $response['status'] = "Failed to insert class";
        }

    } else {
        $response['status'] = "No data to insert";
    }

    echo json_encode($response);
?>
