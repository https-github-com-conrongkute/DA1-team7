<form  style="margin-top: 150px;"  action="?ctrl=home&act=doipassemail&email=<?=$_GET["email"]?>"  method="post" name="myforpass"  onsubmit="return validatepass()">
          <label for="" style="font-size: 15pt; font-weight: bold;" >Mời nhập mật khẩu mới </label>
          <input type="password" name="pass" id="pass" placeholder="Nhập mật khẩu mới">
          <label for="" style="font-size: 15pt; font-weight: bold;" >Nhập lại mật khẩu </label>
          <input type="password" name="repass" id="repass" placeholder="Nhập lại mật khẩu mới">
          <input type="submit" name="gui" style="width: 20%; float: right; background-color: orangered; border-radius: 10px; color: white; font-weight: bold;" value="Xác nhận">
</form>
<?php if(isset($erro['email'])==true){ ?>
            <script>
                swal("<?=$erro['email']?>", "Nhấn để tiếp tục !", "error");
            </script>
        <?php } ?>

        <?php if(isset($messagethatbai)==true){ ?>
            <script>
                swal("<?=$messagethatbai?>", "Nhấn để tiếp tục !", "error");
            </script>
        <?php } ?>
<script>
    function validatepass() {
        var pass = document.myforpass.pass.value;
        var repass = document.myforpass.repass.value;
        if (pass == null || pass == "") {
          swal("Bạn chưa nhập mật khẩu", "Vui lòng nhập  !", "warning");
            return false;
        }
        else if (pass.length < 4) {
          swal("Mật khẩu quá ngắn", "Vui lòng nhập lại !", "warning");
            return false;
        }

        if(pass != repass) {
          swal("Mật khẩu không trùng khớp", "Vui lòng nhập  !", "warning");
            return false;
        }
    }
</script>