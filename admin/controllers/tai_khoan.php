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

            $tenkh = $_POST['tenkh'];
            if (checkuser($tenkh)) {
                $thongbao = false;
                $tenkh_tt = "Tên tài khoản đã tồn tại !";
            } elseif (strlen($tenkh) == 0) {
                $thongbao = false;
                $tenkh_tt = "không nên để trống !";
            }
        }
        $tenkh = $_POST['tenkh'];
        $tendn = $_POST['tendn'];
        $email = $_POST['email'];
        $sdt = $_POST['sdt'];
        $pass = $_POST['pass'];
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
        $hinh = $_FILES['file']['name'];
        $pathimg = '../uploaded/';
        $vai_tro = $_POST['vai_tro'];
        $target_files = $pathimg . basename($hinh);
        move_uploaded_file($_FILES['file']['tmp_name'], $target_files);
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
    default:
        # code...
        break;
}
