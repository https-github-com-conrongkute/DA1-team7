<?php
require_once "../system/config.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $view = 'view/loai_can-index.php';
        require_once 'view/layout.php';
        break;
        case 'addnew':
            $view = 'view/loai_can-addnew.php';
            require_once 'view/layout.php';
            break;
    default:
        # code...
        break;
}

?>