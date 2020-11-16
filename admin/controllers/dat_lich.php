<?php
require_once "../system/config.php";
require_once "models/dat_lich.php";
require_once "models/tai_khoan.php";
// require_once "models/can_ho.php";
$act = "index";
if (isset($_GET['act']) == true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds_dl = getAlldatlich();
        $view = 'view/dat_lich-index.php';
        require_once 'view/layout.php';
        break;
    case 'addnew':
        $ds_kh = getAllkhachhang();
        $ds_can = getALLcanho();
        $view  = "view/dat_lich-addnew.php";
        require_once "view/layout.php";
        break;
    case 'insert':
        if ($_POST != null) {
            $thongbao = true;
            $ma_kh = $_POST['kh'];
            $ma_can = $_POST['can_ho'];
            $ngay_di_xem = $_POST['ngay_di_xem'];
            if (strlen($ma_kh) == 0) {
                $ma_kh_tt = "<span>Không để trống !</span>";
                $thongbao = false;
            }
            if (strlen($ma_can) == 0) {
                $ma_can_tt = "<span>Không để trống !</span>";
                $thongbao = false;
            }
            if (strlen($ngay_di_xem) == 0) {
                $ngay_di_xem_tt = "<span>Không để trống !</span>";
                $thongbao = false;
            }
        }
        $ma_kh = $_POST['kh'];
        $ma_can = $_POST['can_ho'];
        $ngay_ht = date('y/m/d');
        $ngay_di_xem = $_POST['ngay_di_xem'];
        if ($thongbao == true) {
            addNewDatlich($ma_kh, $ma_can, $ngay_ht, $ngay_di_xem);
            $message = "Thành công !";
            $view  = "view/dat_lich-addnew.php";
            require_once "view/layout.php";
        }else{
            // $messege = "Mời bạn nhập lại !"; 
            $view  = "view/dat_lich-addnew.php";
            require_once "view/layout.php";
        }
        break;
    case 'edit':
        $ma_dl = $_GET['ma_dl'];
        settype($ma_dl, "int");
        $ds_kh = getAllkhachhang();
        $row = getDatlichByID($ma_dl);
        $ds_can = getALLcanho();
        $view  = "view/dat_lich-edit.php";
        require_once "view/layout.php";
    break;
    case 'update':
        if ($_POST != null) {
            $thongbao = true;
            $ma_kh = $_POST['kh'];
            $ma_can = $_POST['can_ho'];
            $ngay_di_xem = $_POST['ngay_di_xem'];
            if (strlen($ma_kh) == 0) {
                $ma_kh_tt = "<span>Không để trống !</span>";
                $thongbao = false;
            }
            if (strlen($ma_can) == 0) {
                $ma_can_tt = "<span>Không để trống !</span>";
                $thongbao = false;
            }
            if (strlen($ngay_di_xem) == 0) {
                $ngay_di_xem_tt = "<span>Không để trống !</span>";
                $thongbao = false;
            }
        }
        $ma_kh = $_POST['kh'];
        $ma_dat = $_POST['ma_dat'];
        $ma_can = $_POST['can_ho'];
        $ngay_ht = date('y/m/d');
        $ngay_di_xem = $_POST['ngay_di_xem'];
        settype($ma_can, "int");
        settype($ma_kh, "int");
        settype($ma_dat, "int");
        $ngay_di_xem = trim(strip_tags($ngay_di_xem));
        if ($thongbao == true) {
            updateDatlich($ma_kh, $ma_can, $ngay_ht, $ngay_di_xem, $ma_dat);
            $message = "Thành công !";
            $view  = "view/dat_lich-edit.php";
            require_once "view/layout.php";
        }else{
            // $messege = "Mời bạn nhập lại !"; 
            $ds_kh = getAllkhachhang();
            $row = getDatlichByID($ma_dat);
            $ds_can = getALLcanho();
            $view  = "view/dat_lich-edit.php";
            require_once "view/layout.php";
        }
        break;
    case 'delete':
        $ma_dat = $_GET['ma_dl'];
        settype($ma_dat, "int");
        DeleteDatlichByid($ma_dat);
        $ds_dl = getAlldatlich();
        $view = 'view/dat_lich-index.php';
        require_once 'view/layout.php';
        break;
    default:
        # code...
        break;
}
