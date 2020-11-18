<!-- <?php
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
?> -->