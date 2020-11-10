<?php 
require_once "../system/database.php";
// xem tất cả lịch đặt
function getAlldatlich(){
    $sql = "SELECT * FROM dat_lich";
    return query($sql);
}

// xem khách hàng trong lịch đặt

function showKhachhangdatlich($ma_kh){
     $sql = "SELECT * FROM khach_hang WHERE ma_tk = '$ma_kh'";
     return queryOne($sql);
}

// xem căn hộ trong lịch đặt
function showCanhodatlich($ma_can){
    $sql = "SELECT * FROM can_ho WHERE ma_can = '$ma_can'";
    return queryOne($sql);
}
// Xem tất cả căn hộ
function getALLcanho(){
    $sql = "SELECT * FROM can_ho";
    return query($sql);
}
// thêm mơi
function addNewDatlich($ma_kh, $ma_can, $ngay_ht, $ngay_di_xem){
    $sql = "INSERT INTO dat_lich (ma_can, ma_tk, ngay_xem, ngay_dat) VALUES ('$ma_can','$ma_kh','$ngay_di_xem','$ngay_ht')";
    execute($sql);
}
// Xem dat lịch theo id
function getDatlichByID($ma_dl){
    $sql = "SELECT * FROM dat_lich WHERE ma_dat = '$ma_dl'";
    return queryOne($sql);
}
// Update dat lịch
function updateDatlich($ma_kh, $ma_can, $ngay_ht, $ngay_di_xem, $ma_dat){
    $sql = "UPDATE dat_lich SET ma_can='$ma_can', ma_tk='$ma_kh', ngay_xem='$ngay_di_xem', ngay_dat='$ngay_ht' WHERE ma_dat = '$ma_dat'";
    execute($sql);
}
// Xóa 
function DeleteDatlichByid($ma_dat){
    $sql = "DELETE FROM dat_lich WHERE ma_dat= '$ma_dat'";
    execute($sql);
}
?>