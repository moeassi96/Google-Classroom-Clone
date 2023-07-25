
<?php
include('connection.php');

// header("Content-Type: application/json");
// $data = json_decode(file_get_contents('php://input'), true);
$class_id = $_POST["class_id"];
$query = $mysqli->prepare(
    "SELECT a.assignment_name, a.assignment_duedate
    FROM assignments a
    WHERE a.class_id = ? AND a.assignment_duedate > NOW()
    ORDER BY a.assignment_duedate
    LIMIT 2;"
);


$query->bind_param('s', $class_id);
$query->execute();
$result = $query->get_result();
$assignment = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($assignment);

?>