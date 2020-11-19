<?php
require_once 'models/home.php';
$act = "index";
if (isset($_GET['act']) == true) $act = $_GET['act'];
switch ($act) {
  case 'index':
    require_once 'views/layout.php';
    break;
  case 'thongtintk':
     $view = 'views/thongtintk.php';
     require_once 'views/layout.php';
    break;
  case 'danhnhap':
    require_once 'views/login.php';
    break;
  case 'dangnhap_':
    $tentk = $_POST['tentk'];
    $pass =$_POST['pass']; 
    $checktk = checktk($tentk, $pass);
    if(is_array($checktk)){
      $_SESSION['user'] = $checktk['ten_tk'];
      $_SESSION['name'] = $checktk['ho_ten'];
      $_SESSION['email'] = $checktk['email'];
      $_SESSION['id'] = $checktk['ma_tk'];
      $_SESSION['hinh'] = $checktk['hinh'];
      $_SESSION['vai_tro'] = $checktk['vai_tro'];
      $_SESSION['sdt'] = $checktk['sdt'];
      if($_SESSION['vai_tro']==0){
         $message = 'Đăng nhập thành công';
         header("location: index.php");
      }else{
        $message = 'Đăng nhập thất bại !';
        header("location: index.php?act=danhnhap");
      }
    }else{
       $message = 'Sai tài khoản hoặc mật khẩu !';
    }
    break;
    //dang xuat
    case 'dangxuat':
      if(isset($_GET['logout']) && $_GET['logout']==1){
        session_destroy();
        header('location: index.php');
      }
      break;
    case 'doimk':
      $view = 'views/doimk.php';
      require_once 'views/layout.php';
    break;
}
