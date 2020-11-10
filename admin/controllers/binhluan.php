<?php 
require_once "../system/config.php";
require_once "models/binhluan.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds_bl = getALLbinhluan();
        $view = "view/binh_luan-index.php";
        require_once "view/layout.php";
        break;
    case 'addnew':
        $ds_kh = getAllkhachhang();
        $ds_can = getALLcanho();
        $view  = "view/binh_luan-addnew.php";
        require_once "view/layout.php";
    default:
        # code...
        break;
}
?>