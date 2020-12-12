<?php 
require_once "../system/database.php";
function ThongkeCanho(){
    $sql = "SELECT count(*) as soluong FROM can_ho";
    return queryOne($sql);
}

// Thống kê khách hàng

function ThongkeKh(){
    $sql = "SELECT count(*) as soluong FROM khach_hang";
    return  queryOne($sql);   
}

function Thongkelichdat(){
    $sql = "SELECT count(*) as soluong FROM dat_lich";
    return  queryOne($sql);   
}

function Thongkeloaican(){
    $sql = "SELECT count(*) as soluong FROM loai_can";
    return  queryOne($sql);   
}

function ThongkeQuan(){
    $sql = "SELECT count(*) as soluong FROM quan";
    return  queryOne($sql);   
}
function Thongkehoadon(){
    $sql = "SELECT count(*) as soluong FROM payments";
    return  queryOne($sql);   
}


?>