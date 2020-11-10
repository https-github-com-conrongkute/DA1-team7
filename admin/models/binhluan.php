<?php 
require_once "../system/database.php";
// Xem tất cả bình luận
function getALLbinhluan(){
    $sql = "SELECT * FROM binh_luan";
    return query($sql);
}
// xem khách hàng trong bình luận

function showKhachhangdatlich($ma_kh){
    $sql = "SELECT * FROM khach_hang WHERE ma_tk = '$ma_kh'";
    return queryOne($sql);
}
function getAllkhachhang(){
    $sql = "SELECT * FROM khach_hang";
    return query($sql);
}
function getALLcanho(){
    $sql = "SELECT * FROM can_ho";
    return query($sql);
}

// xem căn hộ trong bình luận
function showCanhodatlich($ma_can){
   $sql = "SELECT * FROM can_ho WHERE ma_can = '$ma_can'";
   return queryOne($sql);
}
?>