<?php

$act = 'index';
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        require_once "views/layout.php";
        break;
    // Đăng nhập
    case 'login':
        require_once 'views/dangnhap.php';
    break;
    default:
        # code...
        break;
}
?>