<?php
require_once "../system/database.php";
function getallcanho(){
          $sql="SELECT * FROM can_ho order by ma_can desc";
          return query($sql);
}
function themcanho($ma_loai, $ma_quan, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien){
          $sql="INSERT into can_ho(ma_quan, ma_loai, dia_chi, ten_can_ho, nam_xd, dien_tich, tang, huong_nha, tien_ich, chi_phi_khac, so_phong_ngu, so_phong_vs, gia_thue, hinh, hinha, hinhb, hinhc, an_hien, ghi_chu)
           values ('$ma_quan', '$ma_loai', '$dia_chi', '$ten_can_ho', '$nam_xd', '$dien_tich', '$tang', '$huong_nha', '$tien_ich', '$chi_phi', '$so_phong_ngu', '$so_phong_vs', '$gia_thue', '$hinh', '$hinha', '$hinhb', '$hinhc', '$an_hien', '$ghi_chu')";
          execute($sql);
}
function getcanhobyid($ma_can){
          $sql="SELECT * FROM can_ho where ma_can='$ma_can'";
          return queryOne($sql);
}
function updatecanho($ma_can,$ma_loai, $ma_quan, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien){
          $sql="UPDATE can_ho SET ma_quan='$ma_quan', ma_loai='$ma_loai', dia_chi='$dia_chi', ten_can_ho='$ten_can_ho', nam_xd='$nam_xd', dien_tich='$dien_tich', tang='$tang', huong_nha='$huong_nha', tien_ich='$tien_ich', chi_phi_khac='$chi_phi', so_phong_ngu='$so_phong_ngu', so_phong_vs='$so_phong_vs', gia_thue='$gia_thue', hinh='$hinh', hinha='$hinha', hinhb='$hinhb', hinhc='$hinhc', an_hien='$an_hien', ghi_chu='$ghi_chu' WHERE ma_can='$ma_can' ";
          execute($sql);
}
function deletecanho($ma_can){
          $sql="DELETE FROM can_ho where ma_can='$ma_can'";
          execute($sql);
}
?>