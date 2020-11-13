<?php 
require_once "../system/database.php";
function getallloaican(){
          $sql="SELECT * FROM loai_can";
          return query($sql);
}

function themloaicanho($tenloai){
          $sql="INSERT into loai_can(ten_can) values ('$tenloai')";
          execute($sql);
}
function getloaicanbyid($id){
          $sql="SELECT * FROM loai_can WHERE ma_loai='$id'";
          return queryOne($sql);
}
function capnhaploaican($ma_loai, $tenloai){
          $sql="UPDATE loai_can SET ten_can='$tenloai' WHERE ma_loai='$ma_loai' ";
          execute($sql);

}
function deleteloaican($ma_loai){
          $sql="DELETE FROM loai_can where ma_loai='$ma_loai'";
          execute($sql);
}
?>