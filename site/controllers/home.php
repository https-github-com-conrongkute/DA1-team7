<?php
 require_once '../system/config.php';
require_once "models/home.php";
require 'global.php';
$act = "index";
if(isset($_GET["act"])==true) $act=$_GET["act"];
switch ($act) {
    case "index":
        /* Chức năng hiện trang chủ
          1. nạp view hiện trên trang chủ */
          $can_ho=get6can();
          $views="views/home.php";
          require_once "views/layout.php";
    break;
    case "datlich":
        $ma_can = $_GET["ma_can"];
        $hoten = $_POST["hoten"];
        $email = $_POST["email"];
        $sdt = $_POST['sdt'];
        $ngay_xem = $_POST['ngay_xem'];
        datlich($ma_can,$hoten,$email,$sdt,$ngay_xem);
        $can_ho=get6can();
        $views="views/home.php";
        require_once "views/layout.php";
    break;
}
?>