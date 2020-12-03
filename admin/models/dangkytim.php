<?php 
require_once "../system/database.php";
function getalldangkytim(){
          $sql="SELECT * FROM dangkytimnha ORDER BY ID DESC";
          return query($sql);
}
function capnhatdangky($id, $trangthai){
         
                    $sql="UPDATE dangkytimnha SET trangthai='$trangthai' WHERE id='$id' ";
                    execute($sql);
           
}
?>