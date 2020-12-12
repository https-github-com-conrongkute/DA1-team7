<?php
require_once "../system/config.php";
require_once "models/dangkytim.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds=getalldangkytim();
        $view = 'view/dangkytimnhanh.php';
        require_once 'view/layout.php';
        break;

        case 'update':
          $id=$_GET["id"];
          $trangthai=1;
          capnhatdangky($id, $trangthai);
          header("location: /admin/?ctrl=dangkytim&act=index");
          break;
}
?>