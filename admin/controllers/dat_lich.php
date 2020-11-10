<?php 
require_once "../system/config.php";
require_once "models/dat_lich.php";
// require_once "models/tai_khoan.php";
// require_once "models/can_ho.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds_dl = getAlldatlich();
        $view = 'view/dat_lich-index.php';
        require_once 'view/layout.php';
        break;
    
    default:
        # code...
        break;
}


?>