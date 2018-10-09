<?php

$comment = new Comment($_POST['comment']);
$comment->create();
echo json_encode($comment);
