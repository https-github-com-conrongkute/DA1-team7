<div class="right__title">Sửa thông tin ADMIN</div>

<div class="right__formWrapper">
    <form action="/admin/?ctrl=tai_khoan&act=updateadmin" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên Admin</label>
            <input type="text" name="tenkh" id="tenkh" placeholder="Họ và tên" value="<?=$kh['ho_ten']?>">
            <input type="hidden" name="ma_kh" value="<?=$kh['ma_tk']?>">
            <?php if(isset($tenkh_tt)==true){ ?>
            <span id="checkuser" ><?=$tenkh_tt?></span>
            <?php } ?>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Tên đăng nhập</label>
            <input type="text" name="tendn" id="email" placeholder="tên đăng nhập" value="<?=$kh['ten_tk']?>">
            <!-- <span id="email"></span> -->
        </div>
        <div class="right__inputWrapper">
            <label for="title">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" value="<?=$kh['email']?>">
            <!-- <span id="email"></span> -->
        </div>
        <div class="right__inputWrapper">
            <label for="title">Số điện thoại</label>
            <input type="number" name="sdt" id="sdt" placeholder="số điện thoại" value="0<?=$kh['sdt']?>">
            <!-- <span id="sdt"></span> -->
        </div>
        <div class="right__inputWrapper">
            <label for="title">Mật khẩu</label>
            <input type="password" name="pass" id="mk" placeholder="Mật khẩu" >
            <!-- <span id="pass"></span> -->
        </div>
        <div class="right__inputWrapper">
            <input type="hidden" name="hinh"  value="<?=$kh['hinh']?>">
            <input type="file" name="file" id="file" class="inputfile" />
            <label for="file"><i class="fas fa-upload"></i> Tải hình ảnh mới lên</label>
        </div>
        <div class="right__inputWrapper">
            <img src="../uploaded/<?=$kh['hinh']?>" id="loada" alt="" style="height: 150px;width: 20%; object-fit: cover;">
            <script>
                // Load hình ảnh lên khi chọn file upload
                $(document).ready(function () {
                    function readURL(input){
                        if(input.files && input.files[0]){
                        var reader = new FileReader();
                        reader.onload = function (e){
                            $('#loada').attr('src', e.target.result);
                            // $('#loadha').css('display','block');
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
        
        <!-- <div class="radion" style="width: 100%;float: left;height:80px;">
            <label for="title" style="font-weight: 700;">Kích hoạt</label><br>
            <label for="" style="margin-right: 10px;"><input type="radio" name="" id="" style="margin-right: 5px;" value="1" >Khóa tài khoản</label>
        </div> -->
        <button class="btn" type="submit">Cập nhật</button>
    </form>
    <?php if(isset($message)==true){ ?>
    <div class="thongbao-khachhang">
        <div class="delete-container">
            <div class="delete-form">
                <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;"><?=$message?></h3>
                <div class="nut">
                    <a href="?ctrl=tai_khoan&act=admin&sid=<?=$_SESSION['sid']?>" class="co" style="padding: 10px 20px;background-color: aqua;border-radius: 20px;width: 100px;color: white;">OK</a>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
</div>
