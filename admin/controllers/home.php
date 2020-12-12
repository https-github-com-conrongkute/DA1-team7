<?php
require_once "../system/config.php";
require_once "models/thong_ke.php";
$ds_kh = ThongkeKh();
$ds_ch = ThongkeCanho();
$ds_lc = Thongkeloaican();
$ds_q = ThongkeQuan();
$ds_ld = Thongkelichdat();
$ds_hd = Thongkehoadon();
require_once "view/layout.php";

?>