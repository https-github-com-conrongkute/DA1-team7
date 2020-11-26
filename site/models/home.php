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
// check lỗi tkdn
function checktkdn($user){
    $sql = "SELECT count(*) as soluong FROM khach_hang WHERE ten_tk = '$user'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['soluong'];
}
// check lỗi email
function checktkemail($user){
    $sql = "SELECT count(*) as soluong FROM khach_hang WHERE email = '$user'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['soluong'];
}
function Luuthongtintk($ho_ten,$user, $pass, $email, $random){
    $sql = "INSERT INTO khach_hang (ho_ten,ten_tk, mat_khau, email, random_key) VALUES ('$ho_ten','$user','$pass','$email','$random')";
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

//thực hiện inner join 3 bảng căn hộ khách hàng và đặt lịch

function getthongbao($id){
    $sql="SELECT ch.ten_can_ho, ch.ma_tk, dl.ma_can ,dl.ma_tk, kh.ho_ten, ngay_xem , ngay_dat, sdt, ma_dat
    FROM can_ho ch INNER JOIN dat_lich dl ON ch.ma_can = dl.ma_can 
    INNER JOIN khach_hang kh ON kh.ma_tk=dl.ma_tk WHERE ch.ma_tk='$id' and ch.an_hien = 1 order by  ngay_xem  desc";
    return query($sql);
}

//show lịch sử đặt căn hộ
function lichsu($id){
    $sql="SELECT * FROM dat_lich where ma_tk='$id' order by ngay_xem desc";
    return query($sql);
}
function canho($id){
    $sql="SELECT * FROM can_ho WHERE ma_can='$id' and an_hien= 1";
    return queryOne($sql);
}
function khachhang($id){
    $sql="SELECT * FROM khach_hang WHERE ma_tk='$id'";
    return queryOne($sql);
}

//căn hộ đả đăng
function canhodadang($id){
    $sql="SELECT * FROM can_ho WHERE ma_tk='$id' and an_hien=1";
    return query($sql);
}
function maloaican($id)
{
    $sql="SELECT * FROM loai_can WHERE ma_loai='$id'";
    return queryOne($sql);
}
function maquan($id)
{
    $sql="SELECT * FROM quan WHERE ma_quan='$id'";
    return queryOne($sql);
}
//show phường
function getphuongbyid($id){
    $sql="SELECT * FROM phuong WHERE id='$id'";
    return queryOne($sql);
}

?> 