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
    // thay doi thông tin tk
  case 'thaydoitt':
    $tentk = $_POST['tenkh'];

    break;
  case 'dangnhap':
    require_once 'views/login.php';
    break;
  case 'dangnhap_':
    $tentk = $_POST['tentk'];
    $pass = $_POST['pass'];
    $checktk = checktk($tentk, $pass);
    if (is_array($checktk)) {
      $_SESSION['user'] = $checktk['ten_tk'];
      $_SESSION['name'] = $checktk['ho_ten'];
      $_SESSION['email'] = $checktk['email'];
      $_SESSION['id'] = $checktk['ma_tk'];
      $_SESSION['hinh'] = $checktk['hinh'];
      $_SESSION['vai_tro'] = $checktk['vai_tro'];
      $_SESSION['sdt'] = $checktk['sdt'];
      $_SESSION['gioitinh'] = $checktk['gioitinh'];
      if ($_SESSION['vai_tro'] == 0) {
        $message = 'Đăng nhập thành công';
        header("location: index.php");
      } else {
        $message = 'Đăng nhập thất bại !';
        header("location: index.php?act=dangnhap");
      }
    } else {
      $message = 'Sai tài khoản hoặc mật khẩu !';
    }
    break;
    //dang xuat
  case 'dangxuat':
    if (isset($_GET['logout']) && $_GET['logout'] == 1) {
      session_destroy();
      header('location: index.php');
    }
    break;
  case 'doimk':
    $view = 'views/doimk.php';
    require_once 'views/layout.php';
    break;
    // dôi mk
  case 'doimk_':
    $pass_cu = $_POST['passcu'];
    $pass_new = $_POST['passnew'];
    $repass = $_POST['repassnew'];
    $ma_tk = $_POST['ma_tk'];
    if (checkmkcu($pass_cu, $ma_tk)) {
      if ($pass_new == $repass) {
        UpdatePassnew($pass_new, $ma_tk);
        $message = 'Đổi mật khẩu thành công !';
        $view = 'views/doimk.php';
        require_once 'views/layout.php';
      } else {
        $message = 'Mật khẩu mới không trùng khớp !';
        $view = 'views/doimk.php';
        require_once 'views/layout.php';
      }
    } else {
      $message = 'Mật khẩu cũ không trùng khớp !';
      $view = 'views/doimk.php';
      require_once 'views/layout.php';
    }
    break;
  case 'dangtin':
    require_once 'views/dangtin.php';
    break;
  case 'danhsach':
    require_once 'views/danhsach.php';
    break;
  case 'about':
    require_once 'views/about.php';
    break;
  case 'chitiet':
    require_once 'views/chitiet.php';
  break;
}
