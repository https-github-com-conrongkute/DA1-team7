<div class="right__title">Bảng khách hàng</div>
<p class="right__desc">Chèn khách hàng</p>
<div class="right__formWrapper">
    <form action="/admin/?ctrl=tai_khoan&act=insert" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper hienloi">
            <label for="title">Tên khách hàng</label>
            <input type="text" name="tenkh" id="tenkh" placeholder="Họ và tên">
            <p class="bage-check-kh"></p>
            <?php if(isset($tenkh_tt)==true){ ?>
            <p class="bage-check-php"><?=$tenkh_tt?></p>
            <?php } ?>
        </div>
        <div class="right__inputWrapper hienloi">
            <label for="title">Tên đăng nhập</label>
            <input type="text" name="tendn" id="tendn" placeholder="tên đăng nhập">
            <!-- <span id="email"></span> -->
            <p class="bage-check-dn"></p>
            <?php if(isset($ten_dn_tt)==true){ ?>
            <p class="bage-check-php"><?=$ten_dn_tt?></p>
            <?php } ?>
        </div>
        <div class="right__inputWrapper hienloi">
            <label for="title">Email</label>
            <input type="email" name="email" id="email" placeholder="Email">
            <p class="bage-check-email"></p>
            <?php if(isset($email_tt)==true){ ?>
            <p class="bage-check-php"><?=$email_tt?></p>
            <?php } ?>
            <!-- <span id="email"></span> -->
        </div>
        <div class="right__inputWrapper hienloi">
            <label for="title">Số điện thoại</label>
            <input type="number" name="sdt" id="sdt" placeholder="số điện thoại">
            <p id="kqsdt"></p><p class="bage-check-sdt"></p>
            <?php if(isset($sdt_tt)==true) { ?>
            <p class="bage-check-php"><?=$sdt_tt?></p>
            <span id="kq"></span>
            <?php } ?>
        </div>
        <div class="right__inputWrapper hienloi">
            <label for="title">Mật khẩu</label>
            <input type="password" name="pass" id="mk" placeholder="Mật khẩu">
            <p class="bage-check-pass"></p> 
            <?php if(isset($pass_tt)==true){ ?>
            <p class="bage-check-php"><?=$pass_tt?></p>
            <?php } ?>
        </div>
        <div class="right__inputWrapper hienloi">
            <input type="file" name="file" id="file" class="inputfile" />
            <label for="file"><i class="fas fa-upload"></i> Tải hình lên</label>
            <img src="#" alt="" id="loadha" style="height: 100px;object-fit: cover;display: none;width: 15%;">
            <script>
                // Load hình ảnh lên khi chọn file upload
                $(document).ready(function () {
                    function readURL(input){
                        if(input.files && input.files[0]){
                        var reader = new FileReader();
                        reader.onload = function (e){
                            $('#loadha').attr('src', e.target.result);
                            $('#loadha').css('display','block');
                        }
                        reader.readAsDataURL(input.files[0]);
                        }
                    }
                    $('#file').change(function () { 
                         readURL(this);
                    });
                });
            </script>
          
        </div>
        <div class="radion" style="width: 100%;float: left;height:80px;">
            <label for="title" style="font-weight: 700;">Vai trò</label><br>
            <label for="" style="margin-right: 10px;"><input type="radio" name="vai_tro" id="" style="margin-right: 5px;" value="1">Quản trị</label>
            <label for=""><input type="radio" name="vai_tro" id="" style="margin-right: 5px;" value="0">Khách hàng</label>
        </div>
        <button class="btn checkmobile" type="submit">Thêm khách hàng</button>
    </form>
    <?php if(isset($message)==true){ ?>
    <div class="thongbao-khachhang">
        <div class="delete-container">
            <div class="delete-form">
                <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;"><?=$message?></h3>
                <?php if($tk !=NULL) {?>
                <div class="nut">
                    <a href="?ctrl=tai_khoan&act=index" class="co" style="padding: 10px 20px;background-color: aqua;border-radius: 20px;width: 100px;color: white;">OK</a>
                </div>
                <?php } 
                else {
                    ?>
                <div class="nut">   
                    <a href="?ctrl=tai_khoan&act=addnew" class="co" style="padding: 10px 20px;background-color: orangered;border-radius: 20px;width: 100px;color: white;">OK</a>
                </div>                   
                 <?php
                }
                ?>
            </div>
        </div>
    </div>
    <?php } ?>
</div>
<script>
    $(document).ready(function () {
        $('#tenkh').blur(function (e) { 
            var user = $(this).val();
            $('.bage-check-kh').css('display','block');
            $('.bage-check-kh').load('<?=ADMIN_URL?>/admin/?ctrl=tai_khoan&act=kiemloi&username=' + user);
            $('.bage-check-php').css('display','none');
        });
        $('#email').blur(function (e) { 
            var email = $(this).val();
            $('.bage-check-email').css('display','block');
            $('.bage-check-email').load('<?=ADMIN_URL?>/admin/?ctrl=tai_khoan&act=kiemloi&email=' + email);
            $('.bage-check-php').css('display','none');
        });
        $('#tendn').blur(function (e) { 
            var tendn = $(this).val();
            $('.bage-check-dn').css('display','block');
            $('.bage-check-dn').load('<?=ADMIN_URL?>/admin/?ctrl=tai_khoan&act=kiemloi&ten_dn=' + tendn);
            $('.bage-check-php').css('display','none');
        });
        $('#sdt').blur(function (e) { 
            var sdt = $(this).val();
            $('.bage-check-sdt').css('display','block');
            $('.bage-check-sdt').load('<?=ADMIN_URL?>/admin/?ctrl=tai_khoan&act=kiemloi&sdt=' + sdt);
            $('.bage-check-php').css('display','none');
        });
        $('#mk').blur(function (e) { 
            var sdt = $(this).val();
            $('.bage-check-pass').css('display','block');
            $('.bage-check-pass').load('<?=ADMIN_URL?>/admin/?ctrl=tai_khoan&act=kiemloi&pass=' + sdt);
            $('.bage-check-php').css('display','none');
        });
    });
</script>
<script type="text/javascript">
$(document).ready(function() {
    $('#sdt').blur(function (e) { 
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mobile = $('#sdt').val();
    if(mobile !==''){
        if (vnf_regex.test(mobile) == false) 
        {
            $("#kqsdt").html("<span>Số điện thoại của bạn Không đúng định dạng</span>");
            
        }else{
            $("#kqsdt").html("<span style='background-color: green;'>Số điện thoại hợp lệ</span>");
        }
    }else{
        $("#kqsdt").css('display','none');
    }
    });
});
</script>