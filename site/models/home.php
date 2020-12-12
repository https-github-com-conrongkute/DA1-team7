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
// xem tất cả 
function getALL_canhoNew3(){
    $sql = "SELECT * FROM can_ho  WHERE an_hien = 1";
    return query($sql);
}
// loại căn
function getLoaican(){
    $sql = "SELECT * FROM loai_can";
    return query($sql);
}
// Xem căn hộ theo loại căn
function getCanho_theoloai($loaican, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE ma_loai='$loaican' AND an_hien = 1 LIMIT $start_list,$path_size";
    return query($sql);
}
//xem căn hộ theo quận
function getCanho_theoquan($ma_quan, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE ma_quan='$ma_quan' AND an_hien = 1 LIMIT $start_list,$path_size";
    return query($sql);
}
//Xem căn hộ theo phường
function getCanho_theophuong($id, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE id='$id' AND an_hien = 1 LIMIT $start_list,$path_size";
    return query($sql);
}
//Xem căn hộ theo quận và loại căn
function getCanho_theoquanvaloaican($loaican, $ma_quan, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE ma_quan='$ma_quan' AND ma_loai='$loaican' AND an_hien = 1 LIMIT $start_list,$path_size";
    return query($sql);
}
//timkiemcan ho theo gia
function getCanho_theogia($sapxep, $loaican, $mucgia, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE  ma_loai='$loaican'";
    if ($mucgia==1) {
        $sql.=" AND gia_thue < 3000000";
    }
    elseif ($mucgia==2) {
        $sql.=" AND 3000000 <= gia_thue AND gia_thue <= 5999999";
    }
    elseif ($mucgia==3) {
        $sql.=" AND 5000000 <= gia_thue AND gia_thue <= 8999999";
    }
    elseif ($mucgia==4) {
        $sql.=" AND 8000000 < gia_thue AND gia_thue <= 19999999";
    }
    elseif ($mucgia==5) {
        $sql.=" AND 10000000 <= gia_thue AND gia_thue <= 15999999";
    }
    elseif ($mucgia==6) {
        $sql.=" AND 15000000 <= gia_thue AND gia_thue <= 29999999";
    }
    elseif ($mucgia==7) {
        $sql.=" AND  gia_thue >= 20000000";
    }
   
    if ($sapxep==1) {
        $sql.=" AND an_hien = 1 ORDER BY gia_thue asc LIMIT $start_list,$path_size";
    }
    elseif ($mucgia==2) {
        $sql.=" AND an_hien = 1 ORDER BY gia_thue desc LIMIT $start_list,$path_size";
    }
    $sql.="";
    return query($sql);
}
//tìm kiếm căn hộ theo loại căn và sắp xếp
function getCanho_theosx($sapxep, $loai_can, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql="";
    if ($sapxep==1) {
        $sql .= "SELECT * FROM can_ho WHERE  ma_loai='$loai_can' AND an_hien = 1 ORDER BY gia_thue asc LIMIT $start_list,$path_size";
    }
    else{
        $sql .= "SELECT * FROM can_ho WHERE  ma_loai='$loai_can' AND an_hien = 1 ORDER BY gia_thue desc LIMIT $start_list,$path_size";
    }
    $sql.="";
    return query($sql);
}

//Tìm kiêm căn hộ ở trang đăng tin
function getCanho_all($loai_can, $key, $ma_quan, $mucgia, $dien_tich, $sophongngu, $sophongvs, $huongnha, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE ma_loai='$loai_can'";
    //key search
    if (isset($key)&&($key!="")) {
        $sql.=" AND ten_can_ho like '%".$key."%' ";
    }
    //Quận
    if (isset($ma_quan)&&($ma_quan != 0)){
        $sql.=" AND ma_quan = '$ma_quan' ";
    }
    //Mức giá
    if($mucgia==0){
        $sql.="";
    }
    elseif ($mucgia==1) {
        $sql.=" AND gia_thue < 3000000";
    }
    elseif ($mucgia==2) {
        $sql.=" AND 3000000 <= gia_thue AND gia_thue <= 5999999";
    }
    elseif ($mucgia==3) {
        $sql.=" AND 5000000 <= gia_thue AND gia_thue <= 8999999";
    }
    elseif ($mucgia==4) {
        $sql.=" AND 8000000 < gia_thue AND gia_thue <= 19999999";
    }
    elseif ($mucgia==5) {
        $sql.=" AND 10000000 <= gia_thue AND gia_thue <= 15999999";
    }
    elseif ($mucgia==6) {
        $sql.=" AND 15000000 <= gia_thue AND gia_thue <= 29999999";
    }
    elseif ($mucgia==7) {
        $sql.=" AND  gia_thue >= 20000000";
    }
    if($dien_tich==0){
        $sql.=" ";
    }
    elseif ($dien_tich==1) {
        $sql.=" AND dien_tich <= 50";
    }
    elseif ($dien_tich==2) {
        $sql.=" AND dien_tich >= 50  AND dien_tich <= 100 ";
    }
    elseif ($dien_tich==3) {
        $sql.=" AND dien_tich >= 100 ";
    }
    //số phòng ngủ
    if (isset($sophongngu)&&($sophongngu != 0)){
        $sql.=" AND so_phong_ngu = '$sophongngu' ";
    }
    if (isset($sophongvs)&&($sophongvs != 0)){
        $sql.=" AND so_phong_vs = '$sophongvs' ";
    }
    if (isset($huongnha)&&($huongnha != 0)){
        $sql.=" AND huong_nha = '$huongnha' ";
    }
    $sql.=" AND an_hien = 1 ORDER BY gia_thue asc LIMIT $start_list,$path_size";
    return query($sql);
}


// Xem căn hộ theo loại giá giảm dàn
function getCanho_theogia_giam($loaican, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE ma_loai='$loaican' AND an_hien = 1 ORDER BY gia_thue ASC LIMIT $start_list,$path_size";
    return query($sql);
}
function getCanho_theogia_tang($loaican, $page_num, $path_size){
    $start_list = ceil($page_num - 1) * $path_size;
    $sql = "SELECT * FROM can_ho WHERE ma_loai='$loaican' AND an_hien = 1 ORDER BY gia_thue ASC LIMIT $start_list,$path_size";
    return query($sql);
}

//Xem tất cả các quận
function getALL_Quan(){
    $sql = "SELECT * FROM quan";
    return query($sql);
}


//Đếm căn hộ theo loại căn theo quận và theo phuòng
function Demcanhotheoloai($loaican){
    $sql = "SELECT count(*) as sodong FROM can_ho WHERE ma_loai='$loaican'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['sodong'];
}
function Demcanhotheoquan($ma_quan){
    $sql = "SELECT count(*) as sodong FROM can_ho WHERE ma_quan='$ma_quan'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['sodong'];
}
function Demcanhotheophuong($id){
    $sql = "SELECT count(*) as sodong FROM can_ho WHERE id='$id'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['sodong'];
}
//Đếm căn hộ theo quận và loại căn
function Demcanhotheoquanvaloaican($loaican,$ma_quan){
    $sql = "SELECT count(*) as sodong FROM can_ho WHERE ma_quan='$ma_quan' AND ma_loai='$loaican'";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['sodong'];
}
//Đếm căn hộ theo giá
function Demcanhotheogia( $loai_can, $mucgia){
    $sql = "SELECT count(*) as sodong FROM can_ho WHERE ma_loai='$loai_can'";
    if ($mucgia==1) {
        $sql.=" AND gia_thue < 3000000";
    }
    elseif ($mucgia==2) {
        $sql.=" AND 3000000 <= gia_thue AND gia_thue <= 5999999";
    }
    elseif ($mucgia==3) {
        $sql.=" AND 5000000 <= gia_thue AND gia_thue <= 8999999";
    }
    elseif ($mucgia==4) {
        $sql.=" AND 8000000 < gia_thue AND gia_thue <= 19999999";
    }
    elseif ($mucgia==5) {
        $sql.=" AND 10000000 <= gia_thue AND gia_thue <= 15999999";
    }
    elseif ($mucgia==6) {
        $sql.=" AND 15000000 <= gia_thue AND gia_thue <= 29999999";
    }
    elseif ($mucgia==7) {
        $sql.=" AND  gia_thue >= 20000000";
    }
    $sql.="";
    $row = query($sql);
    $kq = $row->fetch();
    return $kq['sodong'];
}
//dem căn hộ khi tim kiếm all
function Demcanhoall($loai_can, $key, $ma_quan, $mucgia, $dien_tich, $sophongngu, $sophongvs, $huongnha){
    $sql = "SELECT count(*) as sodong FROM can_ho WHERE ma_loai='$loai_can'";
    if (isset($key)&&($key!="")) {
        $sql.=" AND ten_can_ho like '%".$key."%' ";
    }
    //Quận
    if (isset($ma_quan)&&($ma_quan != 0)){
        $sql.=" AND ma_quan = '$ma_quan' ";
    }
    //Mức giá
    if($mucgia==0){
        $sql.="";
    }
    elseif ($mucgia==1) {
        $sql.=" AND gia_thue < 3000000";
    }
    elseif ($mucgia==2) {
        $sql.=" AND 3000000 <= gia_thue AND gia_thue <= 5999999";
    }
    elseif ($mucgia==3) {
        $sql.=" AND 5000000 <= gia_thue AND gia_thue <= 8999999";
    }
    elseif ($mucgia==4) {
        $sql.=" AND 8000000 < gia_thue AND gia_thue <= 19999999";
    }
    elseif ($mucgia==5) {
        $sql.=" AND 10000000 <= gia_thue AND gia_thue <= 15999999";
    }
    elseif ($mucgia==6) {
        $sql.=" AND 15000000 <= gia_thue AND gia_thue <= 29999999";
    }
    elseif ($mucgia==7) {
        $sql.=" AND  gia_thue >= 20000000";
    }
    if($dien_tich==0){
        $sql.=" ";
    }
    elseif ($dien_tich==1) {
        $sql.=" AND dien_tich <= 50";
    }
    elseif ($dien_tich==2) {
        $sql.=" AND dien_tich >= 50  AND dien_tich <= 100 ";
    }
    elseif ($dien_tich==3) {
        $sql.=" AND dien_tich >= 100 ";
    }
    //số phòng ngủ
    if (isset($sophongngu)&&($sophongngu != 0)){
        $sql.=" AND so_phong_ngu = '$sophongngu' ";
    }
    if (isset($sophongvs)&&($sophongvs != 0)){
        $sql.=" AND so_phong_vs = '$sophongvs' ";
    }
    if (isset($huongnha)&&($huongnha != 0)){
        $sql.=" AND huong_nha = '$huongnha' ";
    }
    $sql.=" AND an_hien = 1";
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
// function datlich($ma_can,$hoten,$email,$sdt,$ngay_xem){
//     $sql="INSERT INTO dat_lich (ma_can, ho_ten, sdt, email, ngay_xem) 
//     VALUES ('$ma_can','$hoten','$email','$sdt','$ngay_xem')";
//     execute($sql);
// }
// Tạo links
function taolinks($baseurl, $page_num, $page_size, $toltal_rows){
    if($toltal_rows <= 0) return "";
    $toltal_page = ceil($toltal_rows / $page_size);
    if($toltal_page <= 0) return "";
    $links =" ";
    if ($page_num >= 2) {
        $pr = $page_num - 1;
        // $links .= "<li class='page-item'><a href='{$baseurl}' class='page-link'><</a></li>";
        $links .= "<li><a class='page-numbers paginate' href='{$baseurl}&page={$pr}'><i class='fa fa-arrow-left'></i></a></li>";
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
    $sql="SELECT ch.ten_can_ho, ch.ma_tk, dl.ma_can ,dl.ma_tk, kh.ho_ten, ngay_xem , ngay_dat, sdt, ma_dat, dl.trang_thai
    FROM can_ho ch INNER JOIN dat_lich dl ON ch.ma_can = dl.ma_can 
    INNER JOIN khach_hang kh ON kh.ma_tk=dl.ma_tk WHERE ch.ma_tk='$id' and ch.an_hien = 1 order by  ma_dat  desc";
    return query($sql);
}
// Xóa căn hộ đã đăng
function DeleteCanho_dd($ma_can){
    $sql = "DELETE FROM can_ho WHERE ma_can='$ma_can'";
    execute($sql);
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
    $sql="SELECT * FROM can_ho WHERE ma_tk='$id' ORDER BY ma_can DESC";
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
function getquanbyid($id){
    $sql="SELECT * FROM quan where ma_quan='$id'";
    return queryOne($sql);
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
// update căn hộ
function  Update_chdt($ma_tk, $ma_loai, $ma_quan, $ma_phuong, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien,$ma_can){
    $sql = "UPDATE can_ho SET ma_tk='$ma_tk', ma_quan='$ma_quan', id='$ma_phuong', ma_loai='$ma_loai', dia_chi='$dia_chi', ten_can_ho='$ten_can_ho', nam_xd='$nam_xd', dien_tich='$dien_tich', tang='$tang', huong_nha='$huong_nha',tien_ich='$tien_ich', chi_phi_khac='$chi_phi' , so_phong_ngu='$so_phong_ngu', so_phong_vs='$so_phong_vs', gia_thue='$gia_thue',hinh='$hinh', hinha='$hinha', hinhb='$hinhb', hinhc='$hinhc',an_hien='$an_hien', ghi_chu='$ghi_chu' WHERE ma_can='$ma_can'";
    execute($sql);
}
function datlichid($ma_can, $ma_tk, $ngay_xem, $ngay_dat){
    $sql="INSERT into dat_lich(ma_can, ma_tk, ngay_xem, ngay_dat) value ('$ma_can', '$ma_tk', '$ngay_xem', '$ngay_dat')";
    execute($sql);

}

//đếm số lượng căn hộ trong 1 quận
function soluongcanhoinquan($id){
    $sql = "SELECT count(*) as soluong FROM can_ho where ma_quan='$id' and an_hien=1";
    return queryOne($sql);
}
//xóa đặt lịch
function xoadatlich($id){
    $sql="DELETE FROM dat_lich where ma_dat='$id'";
    execute($sql);
}
//đang ký tìm nhanh
function themdangky($ho_ten, $email, $sdt){
    $sql="INSERT into dangkytimnha (ho_ten, email, sdt, trangthai) value ('$ho_ten', '$email', '$sdt', 0)";
    execute($sql);
}
//sửa lịch đặt
function updatedl($ma_dat, $trang_thai){
    $sql = "UPDATE dat_lich SET trang_thai ='$trang_thai'  WHERE ma_dat='$ma_dat'";
    execute($sql);
}
function updatematkhau($email, $pass){
    $sql = "UPDATE khach_hang SET mat_khau ='$pass'  WHERE email='$email'";
    execute($sql);
}
?> 