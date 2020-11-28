<?php
session_start();
require_once 'models/home.php';
$act = "index";
if (isset($_GET['act']) == true) $act = $_GET['act'];
switch ($act) {
  case 'index':
    require_once 'views/layout.php';
    break;

    // thay doi thông tin tk
  case 'thaydoitt':
    $tentk = $_POST['tenkh'];

    break;
  case 'dangnhap':
    require_once 'views/login.php';
    break;
    // dang ký:
  case 'dangky':
    $erro = array();
    // Kiểm lỗi
    if (empty($_POST['user'])) {
      $erro['user'] = "Tên tài không để trống";
    } elseif (checktkdn($_POST['user'])) {
      $erro['user'] = 'Tài khoản tồn tại !';
    } else {
      $user = $_POST['user'];
    }
    //Kiểm lỗi họ tên
    if (empty($_POST['ho_ten'])) {
      $erro['ho_ten'] = "Họ tên không để trống";
    } else {
      $ho_ten = $_POST['ho_ten'];
    }
    // Kiểm lỗi mật khẩu
    if (empty($_POST['pass'])) {
      $erro['pass'] = "Mật khẩu không để trống";
    } elseif (strlen($_POST['pass']) < 6) {
      $erro['pass'] = "Mật khẩu của bạn quá ngắn !";
    } else {
      $pass = $_POST['pass'];
    }
    // check email
    if (empty($_POST['email'])) {
      $erro['email'] = 'Email không để trống !';
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $erro['email'] = 'Email không hợp lệ !';
    } elseif (checktkemail($_POST['email'])) {
      $erro['email'] = 'Email tồn tại !';
    } else {
      $email = $_POST['email'];
    }

    if (empty($erro)) {
      // lưu thông tin đăng nhập
      $message = "Thành công !";
      $random = substr(md5('adhwe$#&^'), 12);
      Luuthongtintk($ho_ten, $user, $pass, $email, $random);
      require_once 'views/login.php';
    }
    require_once 'views/login.php';
    break;
  case 'kichhoat':
    if (isset($_GET['id'])) $idUser = $_GET['id'];
    //Kiểm tra hợp lệ giá trị mới nhận
    //Gọi hàm cập nhật trạng thái user (đã kích hoạt)
    //Định nghĩa hàm cập nhật trạng thái user
    //Nạp view hiện kết quả
    break;
  case 'kiemloi':
    if (isset($_GET['pass']) == true) {
      $erro = array();
      $pass = $_GET['pass'];
      if (empty($pass)) {
        echo "<span>Mật khẩu không để trống</span>";
      } elseif (strlen($pass) < 6) {
        echo "<span>Mật khẩu của bạn quá ngắn !</span>";
      } else {
        echo "<span style='background-color: green;'>An toàn</span>";
      }
    }
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
      $_SESSION['shinh'] = $checktk['hinh'];
      $_SESSION['mat_khau'] = $checktk['mat_khau'];
      $_SESSION['vai_tro'] = $checktk['vai_tro'];
      $_SESSION['sdt'] = $checktk['sdt'];
      $_SESSION['gioitinh'] = $checktk['gioitinh'];
      if ($_SESSION['vai_tro'] == 0) {
        $message_dn = 'Đăng nhập thành công';
        header("location: index.php");
      } else {
        $error_dn = 'Đăng nhập thất bại !';
        require_once 'views/login.php';
      }
    } else {
      $error_dn = 'Sai tài khoản hoặc mật khẩu !';
    }
    require_once 'views/login.php';
    break;
    //dang xuat
  case 'dangxuat':
    if (isset($_GET['logout']) && $_GET['logout'] == 1) {
      session_destroy();
      header('location: index.php');
    }
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
    $quan=getallquan();
    $loaican=getallloai_can();
        require_once 'views/dangtin.php';
    break;
  case 'danhsach':
    require_once 'views/danhsach.php';
    break;
  case 'phuong':
      // require_once "models/can_ho.php";
      
      $ds_p = getphuongbyidquan($_POST['quanid']);
      foreach ($ds_p as $p) {
          echo ' <option value="' . $p['id'] . '">' . $p['phuong'] . '</option>';
      }
      break;
  case 'about':
    require_once 'views/about.php';
    break;
  case 'chitiet':
    require_once 'views/chitiet.php';
    break;
  case 'ch-dd':
    $ma_tk=$_GET["ma_tk"];
    $dsch=canhodadang($ma_tk);
    $rows = 'views/canhodadang.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
  break;
  //phần thông báo
  case 'ds-ld':
    $ma_tk=$_GET["ma_tk"];
    $dsld=getthongbao($ma_tk);
    $rows = 'views/dslich_dat.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
  break;
  case 'lichsu':
    $ma_tk=$_GET["ma_tk"];
    $lichsu=lichsu($ma_tk);
    $rows = 'views/lichsu.php';
    $view= 'views/thongtintk.php';
    require_once 'views/layout.php';
  break;
  case 'thongbao':
    $ma_tk = $_GET["ma_tk"];
    $showtb = getthongbao($ma_tk);
    $rows = 'views/thongbao.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'thongtintk':

    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'doimk':
    $rows = 'views/doimk.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
    case 'dangtincanho':
      if (isset($_POST["ten_can_ho"]) && $_POST["ten_can_ho"] != "") {
          $ten_can_ho = trim(strip_tags($_POST["ten_can_ho"]));
          $ma_loai = $_POST["ma_loai"];
          $ma_tk= $_GET['ma_tk'];
          $ma_quan = $_POST["ma_quan"];
          $dia_chi = $_POST["dia_chi"];
          $nam_xd = $_POST["nam_xd"];
          $dien_tich = $_POST["dien_tich"];
          $tang = $_POST["tang"];
          $so_phong_ngu = $_POST["so_phong_ngu"];
          $so_phong_vs = $_POST["so_phong_vs"];
          $gia_thue = $_POST["gia_thue"];
          $chi_phi = $_POST["chi_phi_khac"];
          $huong_nha = $_POST["huong_nha"];
          $ghi_chu = $_POST["ghi_chu"];
          $tien_ich = $_POST["tien_ich"];
          $an_hien = 0;
          $ma_phuong=$_POST["phuong"];
          // Hình
          $hinh = $_FILES['hinh']['name'];
          $pathimg = '../uploaded/';
          $target_files = $pathimg . basename($hinh);
          move_uploaded_file($_FILES['hinh']['tmp_name'], $target_files);
          if ($hinh == "") {
              $hinh = "no-img.png";
          }

          $hinha = $_FILES['hinha']['name'];
          $pathimg = '../uploaded/';
          $target_files = $pathimg . basename($hinha);
          move_uploaded_file($_FILES['hinha']['tmp_name'], $target_files);
          if ($hinha == "") {
              $hinha = "no-img.png";
          }

          $hinhb = $_FILES['hinhb']['name'];
          $pathimg = '../uploaded/';
          $target_files = $pathimg . basename($hinhb);
          move_uploaded_file($_FILES['hinhb']['tmp_name'], $target_files);
          if ($hinhb == "") {
              $hinhb = "no-img.png";
          }

          $hinhc = $_FILES['hinhc']['name'];
          $pathimg = '../uploaded/';
          $target_files = $pathimg . basename($hinhc);
          move_uploaded_file($_FILES['hinhc']['tmp_name'], $target_files);
          if ($hinhc == "") {
              $hinhc = "no-img.png";
          }

          settype($ma_loai, "int");
          settype($ma_quan, "int");
          settype($so_phong_ngu, "int");
          settype($so_phong_vs, "int");
          settype($tang, "int");
          settype($gia_thue, "int");
          settype($dien_tich, "int");
          settype($ma_tk, "int");
          settype($ma_phuong, "int");
          settype($huong_nha, "int");
          themcanho($ma_tk, $ma_loai, $ma_quan, $ma_phuong, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien);
          header("location: " . SITE_URL . "/?ctrl=home&act=dangtin");
      } else {
          header("location: " . SITE_URL . "/?ctrl=home&act=index");
      }
      break;

}
