<?php
require_once "../system/config.php";
require_once "models/loai_can.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds=getallloaican();
        $view = 'view/loai_can-index.php';
        require_once 'view/layout.php';
        break;
        case 'addnew':
            $view = 'view/loai_can-addnew.php';
            require_once 'view/layout.php';
            break;

        case 'insert':
            if (isset($_POST["tenloai"])&&$_POST["tenloai"]!="") {
                $tenloai=trim(strip_tags( $_POST["tenloai"]));
                themloaicanho($tenloai);
            header("location: /admin/?ctrl=loai_can&act=index");
            }
            else{
                header("location: /admin/?ctrl=loai_can&act=addnew");
            }
            break;
        
        case 'edit':
            $ma_loai=$_GET["ma_loai"];
            settype($ma_loai, "int");
            $dslc=getloaicanbyid($ma_loai);
            $view = 'view/loai_can-edit.php';
            require_once 'view/layout.php';
        break;

        case 'update':
            $ma_loai=$_POST["maloai"];
            settype($ma_loai, "int");
            $tenloai=trim(strip_tags( $_POST["tenloai"]));
            capnhaploaican($ma_loai, $tenloai);
            header("location: /admin/?ctrl=loai_can&act=index");
        break;

        case 'delete':
            $ma_loai=$_GET["ma_loai"];
            settype($ma_loai, "int");
            deleteloaican($ma_loai);
            header("location: /admin/?ctrl=loai_can&act=index");
        break;

}

?>
