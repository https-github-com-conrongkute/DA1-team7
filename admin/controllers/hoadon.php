<?php
require_once "../system/config.php";
require_once "models/hoadon.php";
require_once "models/thong_ke.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds=gethoadon();
        $tkhd=Thongkehoadon();
        $view = 'view/hoadon.php';
        require_once 'view/layout.php';
        break;

}

?>
