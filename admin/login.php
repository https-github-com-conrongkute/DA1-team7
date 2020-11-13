<?php 
session_start();
require_once "models/tai_khoan.php";
require_once "view/login.php";
if(isset($_POST['dn']) && $_POST['dn']){
    $user = $_POST['tendn'];
    $pass = $_POST['pass'];
    $check = checkdn($user, $pass);
    if(is_array($check)){
       $_SESSION['user'] = $check['ho_ten'];
       $_SESSION['vai_tro'] = $check['vai_tro'];
       $_SESSION['hinh'] = $check['hinh'];
       if($_SESSION['vai_tro']==1){
           $message = "Đăng nhập thành công !";
           require_once "view/thongbaologin.php";
        //    header('location: index.php');
       }else{
           $messege = "Sai tài khoản hoặc mật khẩu !";
        //    header('location: login.php');
           require_once "view/thongbaologin.php";
       }
    }else{
        $messege = "Sai tài khoản hoặc mật khẩu !";
        require_once "view/thongbaologin.php";
    }
}


?>