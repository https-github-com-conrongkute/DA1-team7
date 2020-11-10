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
// thêm mới bình luận
function  addNewbinhluan($ma_can,$ma_kh,$noi_dung,$ngay_ht){
  $sql = "INSERT INTO binh_luan (ma_can, ma_tk, noi_dung, ngay_bl) VALUES ('$ma_can','$ma_kh','$noi_dung','$ngay_ht')";
  execute($sql);
}
// xem 1 bình luận
function getBinhluanByid($ma_bl){
    $sql = "SELECT * FROM binh_luan WHERE ma_bl = $ma_bl";
    return queryOne($sql);
}
// update bình luận
function UpdateBinhluan($ma_can, $ma_kh, $noi_dung, $ngay_bl, $ma_bl){
    $sql = "UPDATE binh_luan SET ma_can='$ma_can', ma_tk='$ma_kh', noi_dung='$noi_dung', ngay_bl='$ngay_bl' WHERE ma_bl = '$ma_bl'";
    execute($sql);
}

// xóa bình luận
function DeleteBinhLuanbyID($ma_bl){
    $sql = "DELETE FROM binh_luan WHERE ma_bl = '$ma_bl'";
    execute($sql);
}
?>