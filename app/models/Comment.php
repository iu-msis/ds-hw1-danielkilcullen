<?php

class Comment {
  public $id;
  public $comment;

  public function __construct($data){
    $this->id = intval($data['id']);
    $this->comment = $data['name'];
  }

  public static function fetchAll(){
    $db = new PDO(DB_SERVER,DB_USER,DB_PW)
    $db->lastInsertId();

    $sql = 'SELECT * FROM Comments';
    $statement = $db->prepare($sql);

    $success = $statement->execute();

    $arr = [];
    while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theComment = new Comment($row);
      array_push($arr,$theComment);
    }
    .return $arr;
  }

}
