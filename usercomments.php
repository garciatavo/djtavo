<?php

$name_entered= $_POST['name'];
$comment_entered= $_POST['comment'];
$table= $_POST['webpage'];

$date= date("m-d-Y");

$user = "tavo";
$password = "";
$host = "127.0.0.1";
$dbase = "comments";

// Creates the Connection
$conn = new mysqli('127.0.0.1','tavo','','comments');
// Check Connection
if ($conn->connect_error) {
  echo "Error: " . $conn->connect_error;
  //exit();
}

//echo 'Connected to MYSQL';

// Select the Database to use
$db_select = mysqli_select_db($conn, $dbase);

$val = mysqli_query($conn, "select 1 from $table");

if($val !== FALSE)
{

  if ((!empty($name_entered)) && (!empty($comment_entered)))
  {
    mysqli_query($conn, "INSERT INTO $table (name, date, comments)
    VALUES ('$name_entered', '$date', '$comment_entered')");
  }

    $result = mysqli_query($conn, "SELECT * FROM $table ORDER BY ID DESC" )
    or die("SELECT Error: ".mysql_error());

    while ($row = mysqli_fetch_array($result)){
    $name_field= $row['name'];
    $date_field= $row['date'];
    $comment_field= $row['comments'];


    echo "$name_field wrote: ($date_field) <br>";
    echo "$comment_field";
    echo "<br><hr><br>";

  }
}
//
// else
// {
//
//
// $createtable= "CREATE TABLE $table
// ( ".
// "ID INT NOT NULL AUTO_INCREMENT, ".
// "name VARCHAR(50) NOT NULL, ".
// "date VARCHAR(50) NOT NULL, ".
// "comments VARCHAR(60000) NOT NULL, ".
// "PRIMARY KEY (ID)
// );
// ";
//
// $create= mysqli_query($con, $createtable);
//
//
// if ($create)
// {
//
// if ((!empty($name_entered)) && (!empty($comment_entered)))
// {
//   mysql_query("INSERT INTO $table (name, date, comments)
//   VALUES ('$name_entered', '$date', '$comment_entered')");
// }
//
// $result= mysql_query( "SELECT * FROM $table ORDER BY ID DESC" )
// or die("SELECT Error: ".mysql_error());
//
//
// while ($row = mysql_fetch_array($result)){
// $name_field= $row['name'];
// $date_field= $row['date'];
// $comment_field= $row['comments'];
//
//
// echo "$name_field wrote: ($date_field) <br>";
// echo "$comment_field";
// echo "<br><hr><br>";
//
// }
//
// }//if createtable
//
// }//else



?>
