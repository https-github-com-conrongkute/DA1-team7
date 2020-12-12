<?php
require_once "../system/database.php";
function gethoadon(){
          $sql="SELECT * FROM payments hd INNER JOIN can_ho ch on hd.ma_can=ch.ma_can INNER JOIN khach_hang kh ON kh.ma_tk = hd.thanh_vien GROUP BY ch.ma_can ORDER BY hd.id desc";
          return query($sql);
}
?>