<?php 
require_once '../system/database.php';

function getAllkhachhang(){
    $sql = "SELECT * FROM khach_hang";
    return query($sql);
}
// check tên khách hàng
function checkuser($user){
    $sql = "SELECT count(*) as soluong FROM khach_hang WHERE ho_ten = '$user'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['soluong'];
}
// check ten tk
function checktk($user){
    $sql = "SELECT count(*) as soluong FROM khach_hang WHERE ten_tk = '$user'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['soluong'];
}

// check email
function checkemail($email){
    $sql = "SELECT count(*) as soluong FROM khach_hang WHERE email = '$email'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['soluong'];
}
// check số diện thoai
function checksdt($sdt){
    $sql = "SELECT count(*) as soluong FROM khach_hang WHERE sdt = '$sdt'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['soluong'];
}
function  addnewKhachhang($tenkh,$email, $sdt, $pass, $hinh, $tendn, $kich_hoat, $vai_tro, $random_key){
    $sql = "INSERT INTO khach_hang (ho_ten, email, sdt, mat_khau, hinh, ten_tk, kich_hoat, vai_tro, random_key) VALUES ('$tenkh','$email','$sdt','$pass','$hinh','$tendn','$kich_hoat','$vai_tro', '$random_key')";
    execute($sql);
}

function getkhachhangByID($ma_kh){
    $sql = "SELECT * FROM khach_hang WHERE ma_tk = '$ma_kh'";
    return queryOne($sql);
}

function updateKhachhang($tenkh, $email, $sdt, $pass, $hinh, $tendn, $kich_hoat, $vai_tro, $ma_kh){
    $sql = "UPDATE khach_hang SET ho_ten='$tenkh',email='$email',sdt='$sdt',mat_khau='$pass',hinh='$hinh',ten_tk='$tendn',kich_hoat='$kich_hoat',vai_tro='$vai_tro' WHERE ma_tk ='$ma_kh'";
    execute($sql);
}

function DeleteKhachhang($ma_kh){
    $sql = "DELETE FROM khach_hang WHERE ma_tk = '$ma_kh'";
    execute($sql);
}

// dang nhap
function checkdn($user , $pass){
    $sql = "SELECT * FROM khach_hang WHERE ten_tk = '$user' AND mat_khau = '$pass'";
    return queryOne($sql);
}
function getadminByID($ma_kh){
    $sql = "SELECT * FROM khach_hang WHERE ma_tk = '$ma_kh'";
    return query($sql);
}
?>