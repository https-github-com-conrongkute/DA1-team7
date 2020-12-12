<?php
session_start();

define('ARR_CONTROLLER', ["home", "vnpay_php"]);
$ctrl='home';
if (isset($_GET['ctrl'])==true) {
    $ctrl=$_GET['ctrl'];
}

if (in_array($ctrl, ARR_CONTROLLER)== false)  die("Địa chỉ này không tồn tại");
    $pathFile ="controllers/$ctrl.php";
if (file_exists($pathFile)==true) 
    require_once $pathFile;

else echo "Controller $ctrl không tồn tại";

?>