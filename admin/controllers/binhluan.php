<?php
require_once "../system/config.php";
require_once "models/binhluan.php";
$act = "index";
if (isset($_GET['act']) == true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds_bl = getALLbinhluan();
        $view = "view/binh_luan-index.php";
        require_once "view/layout.php";
        break;
    case 'addnew':
        $ds_kh = getAllkhachhang();
        $ds_can = getALLcanho();
        $view  = "view/binh_luan-addnew.php";
        require_once "view/layout.php";
        break;
    case 'insert':
        if ($_POST != null) {
            $thongbao = true;
            $ma_can = $_POST['can_ho'];
            $ma_kh = $_POST['kh'];
            $noi_dung = $_POST['noi_dung'];
            if (strlen($ma_can) == 0) {
                $ma_can_tt = "Đừng để trống chứ !";
                $thongbao = false;
            }
            if (strlen($ma_kh) == 0) {
                $ma_kh_tt = "Đừng để trống chứ !";
                $thongbao = false;
            }
            if (strlen($noi_dung) == 0) {
                $noi_dung_tt = "Đừng để trống chứ !";
                $thongbao = false;
            }
        }
        $ma_can = $_POST['can_ho'];
        $ma_kh = $_POST['kh'];
        $noi_dung = $_POST['noi_dung'];
        settype($ma_can, "int");
        settype($ma_kh, "int");
        $noi_dung = trim(strip_tags($noi_dung));
        $ngay_ht = date('y/m/d');
        if ($thongbao == true) {
            $message = "Đã thêm thành công !";
            addNewbinhluan($ma_can, $ma_kh, $noi_dung, $ngay_ht);
            $view  = "view/binh_luan-addnew.php";
            require_once "view/layout.php";
        } else {
            $ds_kh = getAllkhachhang();
            $ds_can = getALLcanho();
            $view  = "view/binh_luan-addnew.php";
            require_once "view/layout.php";
        }
        break;
    case 'edit':
        $ma_bl = $_GET['ma_bl'];
        settype($ma_bl, "int");
        $row = getBinhluanByid($ma_bl);
        $ds_kh = getAllkhachhang();
        $ds_can = getALLcanho();
        $view = "view/binh_luan-edit.php";
        require_once "view/layout.php";
        break;
    case 'update':
        if ($_POST != null) {
            $thongbao = true;
            $ma_can = $_POST['can_ho'];
            $ma_kh = $_POST['kh'];
            $noi_dung = $_POST['noi_dung'];
            if (strlen($ma_can) == 0) {
                $ma_can_tt = "Đừng để trống chứ !";
                $thongbao = false;
            }
            if (strlen($ma_kh) == 0) {
                $ma_kh_tt = "Đừng để trống chứ !";
                $thongbao = false;
            }
            if (strlen($noi_dung) == 0) {
                $noi_dung_tt = "Đừng để trống chứ !";
                $thongbao = false;
            }
        }
        $ma_can = $_POST['can_ho'];
        $ma_kh = $_POST['kh'];
        $ma_bl = $_POST['ma_bl'];
        $noi_dung = $_POST['noi_dung'];
        settype($ma_can, "int");
        settype($ma_kh, "int");
        $noi_dung = trim(strip_tags($noi_dung));
        $ngay_bl = $_POST['ngay_bl'];
        if ($thongbao == true) {
            $message = "Đã thay đổi thành công !";
            UpdateBinhluan($ma_can, $ma_kh, $noi_dung, $ngay_bl, $ma_bl);
            $view = "view/binh_luan-edit.php";
            require_once "view/layout.php";
            
        }
        $row = getBinhluanByid($ma_bl);
        $ds_kh = getAllkhachhang();
        $ds_can = getALLcanho();
        $view = "view/binh_luan-edit.php";
        require_once "view/layout.php";
        break;
    case 'delete':
        $ma_bl = $_GET['ma_bl'];
        settype($ma_bl, "int");
        DeleteBinhLuanbyID($ma_bl);
        $ds_bl = getALLbinhluan();
        $view = "view/binh_luan-index.php";
        require_once "view/layout.php";
        break;
    default:
        # code...
        break;
}

