<?php
require_once "../system/config.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $view = 'view/can_ho-index.php';
        require_once 'view/layout.php';
        break;
        case 'addnew':
            $view = 'view/can_ho-addnew.php';
            require_once 'view/layout.php';
            break;
    default:
        # code...
        break;
}

?>