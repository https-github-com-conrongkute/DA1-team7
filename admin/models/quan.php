<?php 
require_once "../system/database.php";
function getalllquan(){
          $sql="SELECT * FROM quan";
          return query($sql);
}

function themquan($quan){
          $sql="INSERT into quan(ten_quan) values ('$quan')";
          execute($sql);
}
function getquanbyid($id){
          $sql="SELECT * FROM quan WHERE ma_quan='$id'";
          return queryOne($sql);
}
function capnhatquan($ma_quan, $ten_quan){
          $sql="UPDATE quan SET ten_quan='$ten_quan' WHERE ma_quan='$ma_quan' ";
          execute($sql);

}
function deletequan($ma_quan){
          $sql="DELETE FROM quan where ma_quan='$ma_quan'";
          execute($sql);
}
//phường

?>