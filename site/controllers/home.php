<?php
$act = "index";
if (isset($_GET['act']) == true) $act = $_GET['act'];
switch ($act) {
  case 'index':
    require_once 'views/layout.php';
    break;
  case 'danhnhap':
    require_once 'views/login.php';
    break;
  case 'dangnhap_':
    break;
}
