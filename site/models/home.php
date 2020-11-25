 <?php
require_once('../system/database.php');
function get6can(){
    $sql = "SELECT * FROM can_ho limit 6";
    return query($sql);
}
function datlich($ma_can,$hoten,$email,$sdt,$ngay_xem){
    $sql="INSERT INTO dat_lich (ma_can, ho_ten, sdt, email, ngay_xem) 
    VALUES ('$ma_can','$hoten','$email','$sdt','$ngay_xem')";
    execute($sql);
}

// check tài khoản dang nhap
function checktk($tentk, $pass){
    $sql = "SELECT * FROM khach_hang WHERE ten_tk = '$tentk' AND mat_khau = '$pass'";
    return queryOne($sql);
}
// Thay đổi mật khẩu
function UpdatePassnew($pass_new,$ma_tk){
    $sql = "UPDATE khach_hang SET mat_khau='$pass_new' WHERE ma_tk = '$ma_tk'";
    execute($sql);
}
// check mật khẩu cũ
function checkmkcu($pass_cu,$ma_tk){
    $sql = "SELECT * FROM khach_hang WHERE mat_khau='$pass_cu' AND ma_tk ='$ma_tk'";
    return queryOne($sql);
}
//lịch sử đặt
function getlichdatbyid($ma_tk){
    $sql="SELECT * FROM dat_lich WHERE ma_tk='$ma_tk'";
    return queryOne($sql);
}

//lây mã căn hộ đả đăng thông qua mã tài khoảng sid để đi so sánh
function getAllLichdat($id){
    $sql="SELECT * FROM dat_lich WHERE ma_can='$id'";
    return queryOne($sql);
}
function canhodadang($id){
    $sql="SELECT * FROM can_ho WHERE ma_tk='$id'";
    return queryOne($sql);
}
function getkhachhangBYid($id){
    $sql="SELECT * FROM khach_hang WHERE ma_tk='$id'";
    return queryOne($sql);
}
?> 