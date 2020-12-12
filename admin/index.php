<?php
session_start();
if(isset($_SESSION['vai_tro']) && $_SESSION['vai_tro']==1){
define('ARR_CONTROLLER', ["home","dangkytim", "quan", "hinh", "can_ho", "dat_lich", "tai_khoan", "thong_ke", "login", "loai_can", "hoadon"]);
$ctrl='home';
if (isset($_GET['ctrl'])==true) {
    $ctrl=$_GET['ctrl'];
}


if (in_array($ctrl, ARR_CONTROLLER)== false)  die("Địa chỉ này không tồn tại");
    $pathFile ="controllers/$ctrl.php";
if (file_exists($pathFile)==true) 
    require_once $pathFile;

else echo "Controller $ctrl không tồn tại";
}else{
    header("location: login.php");
}
?>