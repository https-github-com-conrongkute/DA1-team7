 <?php
require_once('../system/database.php');
// Xem căn hộ mới nhất
function getALLcan_hoNew(){
    $sql = "SELECT * FROM can_ho WHERE an_hien = 1 ORDER BY ma_can DESC LIMIT 10";
    return query($sql);
}
function getALL_canhoNew2(){
    $sql = "SELECT * FROM can_ho  WHERE an_hien = 1 ORDER BY ma_can ASC LIMIT 10";
    return query($sql);
}
// loại căn
function getLoaican(){
    $sql = "SELECT * FROM loai_can";
    return query($sql);
}
// Xem căn hộ theo loại
function getCanho_theoloai($loaican, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE ma_loai='$loaican' AND an_hien = 1 LIMIT $start_list,$path_size";
    return query($sql);
}
//Đếm căn hộ theo loại căn
function Demcanhotheoloai($loaican){
    $sql = "SELECT count(*) as sodong FROM can_ho WHERE ma_loai='$loaican'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['sodong'];
}
// Xem 1 căn hộ
function getcan_hoByid($ma_can){
    $sql = "SELECT * FROM can_ho WHERE ma_can='$ma_can'";
    return queryOne($sql);
}
function get6can(){
    $sql = "SELECT * FROM can_ho limit 6";
    return query($sql);
}
function datlich($ma_can,$hoten,$email,$sdt,$ngay_xem){
    $sql="INSERT INTO dat_lich (ma_can, ho_ten, sdt, email, ngay_xem) 
    VALUES ('$ma_can','$hoten','$email','$sdt','$ngay_xem')";
    execute($sql);
}
// Tạo links
function taolinks($baseurl, $page_num, $page_size, $toltal_rows){
    if($toltal_rows <= 0) return "";
    $toltal_page = ceil($toltal_rows / $page_size);
    if($toltal_page <= 0) return "";
    $links =" ";
    if ($page_num >= 2) {
        $pr = $page_num - 1;
        // $links .= "<li class='page-item'><a href='{$baseurl}' class='page-link'><</a></li>";
        $links .= "<li><a class='page-numbers paginate' href='{$baseurl}&page={$pr}'><i class='fas fa-arrow-left'></i></a></li>";
    }
    // -	Tạo item trang hiện hành : Code tiếp theo code tạo Trang đầu, Trang trước 
    for ($i = 1; $i <= $toltal_page; $i++) {
        if ($page_num == $i) {
            $links .= "<li><a class='page-numbers current' href='{$baseurl}&page={$i}'>{$i}</a></li>";
        } else {
            $links .= "<li><a class='page-numbers paginate' href='{$baseurl}&page={$i}'>{$i}</a></li>";
        }
    }
    //-	Tạo link Trang kế, Trang cuối (khi user không phải ở trang cuối) Code tiếp sau item trang hiện hành:
    //Trang kế , Trang cuối
    if ($page_num < $toltal_page) {
        $pn = $page_num + 1;
        $links .= "<li class=''><a class='next page-numbers' href='{$baseurl}&page={$pn}'> <i class='fa fa-arrow-right'></i></a></li>";
    }
    // $links .= "<li class='page-item'><a href='{$baseurl}&page_num={$total_pages}' class= 'page-link'>></a></li>";
    return $links;
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
//Kich hoat 
function kichhoattk($ma_tk){
    $sql = "SELECT count(*) as soluong FROM khach_hang WHERE ma_tk = '$ma_tk'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['soluong'];
}
function Luuthongtintk($ho_ten,$user, $pass, $email, $random){
    $conn = getConnection();
    $sql = "INSERT INTO khach_hang (ho_ten,ten_tk, mat_khau, email, random_key) VALUES ('$ho_ten','$user','$pass','$email','$random')";
    $conn->exec($sql);
    $idUser = $conn->lastInsertId();
    return $idUser;
}
// Kích hoạt tk
function updateThongtintk($idUser, $kich_hoat){
    $sql = "UPDATE khach_hang SET kich_hoat='$kich_hoat' WHERE ma_tk = '$idUser'";
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
    INNER JOIN khach_hang kh ON kh.ma_tk=dl.ma_tk WHERE ch.ma_tk='$id' and ch.an_hien = 1 order by  ma_dat  desc";
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
function getallquan(){
    $sql="SELECT * FROM quan";
    return query($sql);
}
function getallloai_can(){
    $sql="SELECT * FROM loai_can";
    return query($sql);
}

function getphuongbyidquan($id){
    $sql="SELECT * FROM phuong WHERE ma_quan='$id'";
    return query($sql);
}
function themcanho($ma_tk, $ma_loai, $ma_quan,$ma_phuong, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien){
    $sql="INSERT into can_ho(ma_tk, ma_quan, id, ma_loai, dia_chi, ten_can_ho, nam_xd, dien_tich, tang, huong_nha, tien_ich, chi_phi_khac, so_phong_ngu, so_phong_vs, gia_thue, hinh, hinha, hinhb, hinhc, an_hien, ghi_chu)
     values ('$ma_tk','$ma_quan', '$ma_phuong', '$ma_loai', '$dia_chi', '$ten_can_ho', '$nam_xd', '$dien_tich', '$tang', '$huong_nha', '$tien_ich', '$chi_phi', '$so_phong_ngu', '$so_phong_vs', '$gia_thue', '$hinh', '$hinha', '$hinhb', '$hinhc', '$an_hien', '$ghi_chu')";
    execute($sql);
}

?> 