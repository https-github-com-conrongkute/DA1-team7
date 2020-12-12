<?php
if (isset($mke)&($mke==true)) {
          require_once $mke;
}
else{
          ?>
          <form  style="margin-top: 180px;"  action="?ctrl=home&act=quenmk_"  method="post" name="myfor"  onsubmit="return validatefor()">
          <label for="" style="font-size: 15pt; font-weight: bold;" >Mời nhập email để xác nhận</label>
          <input type="email" name="email" id="email" placeholder="Nhập email xác nhận...">
          <input type="submit" name="guiemail" style="width: 20%; float: right; background-color: orangered; border-radius: 10px; color: white; font-weight: bold;" value="Xác nhận">
</form>
          <?php
}
?>
<?php if(isset($erro['email'])==true){ ?>
            <script>
                swal("<?=$erro['email']?>", "Nhấn để tiếp tục !", "error");
            </script>
        <?php } ?>
<script>
    function validatefor() {
        var name = document.myfor.email.value;
        if (name == null || name == "") {
          swal("Bạn chưa nhập email", "Vui lòng nhập  !", "warning");
            return false;
        } 
    }
</script>