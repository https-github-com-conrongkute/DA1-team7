<?php
require_once "../system/config.php";
require_once "models/thong_ke.php";
$ds_kh = ThongkeKh();
$ds_ch = ThongkeCanho();
$ds_bl =ThongkeBinhluan();
$ds_lc = Thongkeloaican();
$ds_q = ThongkeQuan();
$ds_ld = Thongkelichdat();
require_once "view/layout.php";

?>