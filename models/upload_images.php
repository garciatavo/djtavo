<?php
  /* creates database connection */
  $db = mysqli_connect("localhost", "root", "newpassword", "mydb");

?>




<!DOCTYPE html>
<html>
<head>
<title>Image Upload</title>
<style type="text/css">
  #content{
    width: 50%;
    margin 20px auto;
    border: 1px solid #cbcbcb;
  }
  form{
    width: 50%;
    margin: 20px auto;
  }
  form div{
    margin-top: 5px;
  }
  #img_div{
    width 80%;
    padding: 5px;
    margin: 15px auto;
    border: 1px solid #cbcbcb;
  }
  #img_div::after{
    content: "";
    display: block;
    clear: both;
  }
    img{
      float: left;
      margin: 5px;
      width: 300px;
      height: 140px;
    }
</style>
</head>
<body>

</body>
</html>
