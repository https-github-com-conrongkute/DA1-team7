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
?>