<?php 
session_start();
require_once "models/tai_khoan.php";
if(isset($_POST['dn']) && $_POST['dn']){
    $user = $_POST['tendn'];
    $pass = $_POST['pass'];
    $check = checkdn($user, $pass);
    if(is_array($check)){
       $_SESSION['user'] = $check['ho_ten'];
       $_SESSION['vai_tro'] = $check['vai_tro'];
       if($_SESSION['vai_tro']==1){
           header('location: index.php');
       }else{
           header('location: login.php');
       }
    }
}
require_once "view/login.php";

?>