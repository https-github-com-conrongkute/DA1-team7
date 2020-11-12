<?php
require_once '../system/config.php';
require_once 'models/tai_khoan.php';
$act = 'index';
if (isset($_GET['act']) == true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds_kh = getAllkhachhang();
        $view = 'view/khach_hang-index.php';
        require_once 'view/layout.php';
        break;
    case 'addnew':
        $view = 'view/khach_hang-addnew.php';
        require_once 'view/layout.php';
        break;
    case 'insert':
        $thongbao = true;
        // Kiểm lỗi
        if ($_POST != NULL) {
            $tendn = $_POST['tendn'];
            $tenkh = $_POST['tenkh'];
            $email = $_POST['email'];
            $sdt = $_POST['sdt'];
            $pass = $_POST['pass'];
            if (checkuser($tenkh)) {
                $thongbao = false;
                $tenkh_tt = "<p>Tên khách hàng đã tồn tại !</p>";
            } elseif (strlen($tenkh) == 0) {
                $thongbao = false;
                $tenkh_tt = "<p>không nên để trống !</p>";
            }
            if (checktk($tendn)) {
                $thongbao = false;
                $tendn_tt = "<p>Tên tài khoản đã tồn tại !</p>";
            }
        }
        $hinh = $_FILES['file']['name'];
        $pathimg = './uploaded/';
        $target_files = $pathimg . basename($hinh);
        move_uploaded_file($_FILES['file']['tmp_name'], $target_files);
        $vai_tro = $_POST['vai_tro'];
        $kich_hoat = 1;
        $random_key = substr(md5('qwert#$%!*'), 12);

        if ($thongbao == true) {
            $message = "Thêm thành công";
            addnewKhachhang($tenkh, $email, $sdt, $pass, $hinh, $tendn, $kich_hoat, $vai_tro, $random_key);
            $view = 'view/khach_hang-addnew.php';
            require_once 'view/layout.php';
        } else {
            header('?ctrl=tai_khoan&act=addnew');
        }
        $view = 'view/khach_hang-addnew.php';
        require_once 'view/layout.php';
        break;
    case 'edit':
        $ma_kh = $_GET['ma_kh'];
        settype($ma_kh, 'int');
        $kh = getkhachhangByID($ma_kh);
        $view = 'view/khach_hang-edit.php';
        require_once 'view/layout.php';
        break;
    case 'update':
        $ma_kh = $_POST['ma_kh'];
        $tenkh = $_POST['tenkh'];
        $tendn = $_POST['tendn'];
        $email = $_POST['email'];
        $kich_hoat = 1;
        $sdt = $_POST['sdt'];
        $pass = $_POST['pass'];
        $vai_tro = $_POST['vai_tro'];
        if ($_FILES['file']['name'] != null) {
            $pathimg = './uploaded/';
            $hinh = $_FILES['file']['name'];
            $target_files = $pathimg . basename($hinh);
            move_uploaded_file($_FILES['file']['tmp_name'], $target_files);
        } else {
            $hinh = $_POST['hinh'];
        }
        updateKhachhang($tenkh, $email, $sdt, $pass, $hinh, $tendn, $kich_hoat, $vai_tro, $ma_kh);
        $message = "Sửa thành công !";
        $kh = getkhachhangByID($ma_kh);
        $view = 'view/khach_hang-edit.php';
        require_once 'view/layout.php';
        break;
    case 'delete':
        $ma_kh = $_GET['ma_kh'];
        settype($ma_kh, "int");
        DeleteKhachhang($ma_kh);
        $ds_kh = getAllkhachhang();
        $view = 'view/khach_hang-index.php';
        require_once 'view/layout.php';
        break;
    case 'dangxuat':
        if (isset($_GET['quantri']) && $_GET['quantri'] == 1) {
            session_destroy();
            header('location: login.php');
        }
        break;
        // Kiểm lỗi 
    case 'kiemloi':
        if (isset($_GET['username']) == true) {
            $user = $_GET['username'];
            if (checkuser($user)) {
                echo "<p>Tên khách hàng đã tồn tại !</p>";
            } elseif (strlen($user) == 0) {
                echo "<p>Đừng để trống chứ bạn !</p>";
            } else {
                echo "<p  style='background-color: green;'>Bạn có thể dùng tên này</p>";
            }
        }

        if (isset($_GET['email']) == true) {
            $email = $_GET['email'];

            if (strlen($email)==0) {
                echo "<p>Đừng để trống chứ bạn !</p>";
            } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo "<p>Địa chỉ email không hợp lệ !</p>";
            }
            elseif(checkemail($email)){
                echo "<p>Email đã tồn tại !</p>";
            } 
            else {
                echo "<p style='background-color: green;'>Bạn có thể dùng email này </p>";
            }
        }
        if(isset($_GET['ten_dn'])==true){
            $ten_dn = $_GET['ten_dn'];
            if(checktk($ten_dn)){
                echo "<p>Tên đăng nhập đã tồn tại !</p>";
            }elseif (strlen($ten_dn) == 0) {
                echo "<p>Đừng để trống chứ bạn !</p>";
            } else {
                echo "<p  style='background-color: green;'>Bạn có thể dùng tên này</p>";
            }
        }
        if(isset($_GET['sdt'])==true){
            $sdt = $_GET['sdt'];
            if(checksdt($sdt)){
                echo "<p>Số điện thoại đã tồn tại !</p>";
            }elseif(strlen($sdt)==0){
                echo "<p>Đừng để trống chứ bạn !</p>";
            }else{
                echo "<p style='background-color: green;'>Bạn có thể dùng số diện thoại này này </p>";
            }
        }
        if(isset($_GET['pass'])==true){
            $pass = $_GET['pass'];
            if(strlen($pass) < 6){
                echo "<p>Mật khẩu của bạn quá ngắn !</p>";
            }elseif(strlen($pass)==0){
                echo "<p>Đừng để trống chứ bạn !</p>";
            }
        }
        break;
    default:
        # code...
        break;
}