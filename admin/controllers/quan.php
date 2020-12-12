<?php
require_once "../system/config.php";
require_once "models/quan.php";
$act = "index";
if(isset($_GET['act'])==true) $act = $_GET['act'];
switch ($act) {
    case 'index':
        $ds=getalllquan();
        $view = 'view/quan-index.php';
        require_once 'view/layout.php';
        break;

        case 'addnew':
            $view = 'view/quan-addnew.php';
            require_once 'view/layout.php';
            break;

        case 'insert':
            if (isset($_POST["ten_quan"])&&$_POST["ten_quan"]!="") {
                $ten_quan=trim(strip_tags( $_POST["ten_quan"]));
                themquan($ten_quan);
            header("location: /admin/?ctrl=quan&act=index");
            }
            else{
                header("location: /admin/?ctrl=quan&act=addnew");
            }
            break;
        
        case 'edit':
            $ma_quan=$_GET["ma_quan"];
            settype($ma_quan, "int");
            $dsq=getquanbyid($ma_quan);
            $view = 'view/quan-edit.php';
            require_once 'view/layout.php';
        break;

        case 'update':
            $ma_quan=$_POST["ma_quan"];
            settype($ma_quan, "int");
            $ten_quan=trim(strip_tags( $_POST["ten_quan"]));
            capnhatquan($ma_quan, $ten_quan);
            header("location: /admin/?ctrl=quan&act=index");
        break;

        case 'delete':
            $ma_quan=$_GET["ma_quan"];
            settype($ma_quan, "int");
            deletequan($ma_quan);
            header("location: /admin/?ctrl=quan&act=index");
        break;

}

?>
