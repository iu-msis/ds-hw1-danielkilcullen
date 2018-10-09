<?php

class Comment {
  public $id;
  public $comment;

  public function __construct($row){
    $this->id = isset($row['id']) ? intval($row['id']) : null;
    $this->comment = $row['comment'];
  }

  public function create() {
    $db = new PDO(DB_SERVER,DB_USER,DB_PW);

    $sql = 'INSERT INTO comments (id, comment)
    VALUES (?, ?)';

    $statement = $db->prepare($sql);

    $success = $statement->execute([
      $this->id,
      $this->comment
    ]);
    $this->id = $db->lastInsertId();
  }

  public static function fetchAll(){
    $db = new PDO(DB_SERVER,DB_USER,DB_PW);

    $sql = 'SELECT * FROM comments';
    $statement = $db->prepare($sql);

    $success = $statement->execute();

    $arr = [];
    while($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theComment = new Comment($row);
      array_push($arr,$theComment);
    }
    return $arr;
  }

}
