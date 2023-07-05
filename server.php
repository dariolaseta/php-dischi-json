<?php 
$apiPath = file_get_contents("dischi.json");
$list = json_decode($apiPath, true);


header('Content-type: application/json');
echo json_encode($list);
?>