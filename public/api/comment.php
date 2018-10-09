<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

// $id = intval($_GET['id']); 
//
// if ($id < 1) {
//   throw new Exception('Invalid ID');
// }

$commentArr = [];
$commentArr = Comment::fetchAll();

$json = json_encode($commentArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
