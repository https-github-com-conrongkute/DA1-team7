<?php
require_once "../system/config.php";
require_once "models/can_ho.php";
require_once "models/loai_can.php";
require_once "models/quan.php";

$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds=getallcanho();
        $view = 'view/can_ho-index.php';
        require_once 'view/layout.php';
        break;
        case 'addnew':
            $row=getallloaican();
            $quan=getalllquan();
            $view='view/can_ho-addnew.php';
            require_once 'view/layout.php';
        break;

        case 'insert':
            if (isset($_POST["ten_can_ho"])&&$_POST["ten_can_ho"]!="") {
                $ten_can_ho=trim(strip_tags( $_POST["ten_can_ho"]));
                $ma_loai=$_POST["ma_loai"];
                $ma_quan=$_POST["ma_quan"];
                $dia_chi=$_POST["dia_chi"];
                $nam_xd=$_POST["nam_xd"];
                $dien_tich=$_POST["dien_tich"];
                $tang=$_POST["tang"];
                $so_phong_ngu=$_POST["so_phong_ngu"];
                $so_phong_vs=$_POST["so_phong_vs"];
                $gia_thue=$_POST["gia_thue"];
                $chi_phi=$_POST["chi_phi_khac"];
                $huong_nha=$_POST["huong_nha"];
                $ghi_chu=$_POST["ghi_chu"];
                $tien_ich=$_POST["noi_dung"];
                $an_hien=$_POST["an_hien"];
                // Hình
                $hinh = $_FILES['hinh']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinh);
                move_uploaded_file($_FILES['hinh']['tmp_name'], $target_files);
                if ($hinh=="") {
                    $hinh="no-img.png";
                }
                
                $hinha = $_FILES['hinha']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinha);
                move_uploaded_file($_FILES['hinha']['tmp_name'], $target_files);
                if ($hinha=="") {
                    $hinha="no-img.png";
                }

                $hinhb = $_FILES['hinhb']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinhb);
                move_uploaded_file($_FILES['hinhb']['tmp_name'], $target_files);
                if ($hinhb=="") {
                    $hinhb="no-img.png";
                }

                $hinhc = $_FILES['hinhc']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinhc);
                move_uploaded_file($_FILES['hinhc']['tmp_name'], $target_files);
                if ($hinhc=="") {
                    $hinhc="no-img.png";
                }

                settype($ma_loai, "int");
                settype($ma_quan, "int");
                settype($so_phong_ngu, "int");
                settype($so_phong_vs, "int");
                settype($tang, "int");
                settype($gia_thue, "int");
                settype($dien_tich, "int");
                themcanho($ma_loai, $ma_quan, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien);
            header("location: ".ADMIN_URL."/?ctrl=can_ho&act=index");
            }
            else{
                header("location: ".ADMIN_URL."/?ctrl=can_ho&act=addnew");
            }
            break;
        
        case 'edit':
            $ma_can=$_GET["ma_can"];
            settype($ma_can, "int");
            $ds=getcanhobyid($ma_can);
            $row=getallloaican();
            $quan=getalllquan();
            $view = 'view/can_ho-edit.php';
            require_once 'view/layout.php';
        break;

        case 'update':
            if (isset($_POST["ten_can_ho"])&&$_POST["ten_can_ho"]!="") {
                $ten_can_ho=trim(strip_tags( $_POST["ten_can_ho"]));
                $ma_can=$_POST["ma_can"];
                $ma_loai=$_POST["ma_loai"];
                $ma_quan=$_POST["ma_quan"];
                $dia_chi=$_POST["dia_chi"];
                $nam_xd=$_POST["nam_xd"];
                $dien_tich=$_POST["dien_tich"];
                $tang=$_POST["tang"];
                $so_phong_ngu=$_POST["so_phong_ngu"];
                $so_phong_vs=$_POST["so_phong_vs"];
                $gia_thue=$_POST["gia_thue"];
                $chi_phi=$_POST["chi_phi_khac"];
                $huong_nha=$_POST["huong_nha"];
                $ghi_chu=$_POST["ghi_chu"];
                $tien_ich=$_POST["noi_dung"];
                $an_hien=$_POST["an_hien"];

                $hinh1=$_POST["hinh1"];
                $hinha1=$_POST["hinha1"];
                $hinhb1=$_POST["hinhb1"];
                $hinhc1=$_POST["hinhc1"];
                // Hình
                $hinh = $_FILES['hinh']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinh);
                move_uploaded_file($_FILES['hinh']['tmp_name'], $target_files);
                if ($hinh=="") {
                    $hinh=$hinh1;
                }
                
                $hinha = $_FILES['hinha']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinha);
                move_uploaded_file($_FILES['hinha']['tmp_name'], $target_files);
                if ($hinha=="") {
                    $hinha=$hinha1;
                }

                $hinhb = $_FILES['hinhb']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinhb);
                move_uploaded_file($_FILES['hinhb']['tmp_name'], $target_files);
                if ($hinhb=="") {
                    $hinhb=$hinhb1;
                }

                $hinhc = $_FILES['hinhc']['name'];
                $pathimg = './uploaded/';
                $target_files = $pathimg . basename($hinhc);
                move_uploaded_file($_FILES['hinhc']['tmp_name'], $target_files);
                if ($hinhc=="") {
                    $hinhc=$hinhc1;
                }

                settype($ma_loai, "int");
                settype($ma_quan, "int");
                settype($so_phong_ngu, "int");
                settype($so_phong_vs, "int");
                settype($tang, "int");
                settype($gia_thue, "int");
                settype($dien_tich, "int");
                settype($ma_can, "int");
                updatecanho($ma_can,$ma_loai, $ma_quan, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien);
            header("location: ".ADMIN_URL."/?ctrl=can_ho&act=index");
            }
            else{
                header("location: ".ADMIN_URL."/?ctrl=can_ho&act=addnew");
            }
            break;

        case 'delete':
            $ma_can=$_GET["ma_can"];
            settype($ma_can, "int");
            deletecanho($ma_can);
            header("location: ".ADMIN_URL."/?ctrl=can_ho&act=index");
        break;

}

?>
