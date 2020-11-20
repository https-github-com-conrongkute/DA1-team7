<div class="tt-back-gr mt">
    <div class="boxcenter">
        <div class="tt-bg">
            <div class="tt-left">
                <center style="margin-top: 50px;">
                    <div style="width: 100px;height: 100px;border-radius: 50%;background-color: #ccc;">
                   <span class="fas fa-user" style="font-size: 30pt;line-height: 100px;color:white;"></span>
                   </div>
                   <h4><?=$_SESSION["user"]?></h4>
                   <em>Thành viên từ 1/1/2020</em>   
                </center>
                <hr>
                <ul>
                    <li><i class="fas fa-cog"></i><a href="?act=thongtintk">Thông tin tài khoản</a></li>
                    <li><i class="fas fa-lock"></i><a href="?act=doimk">Đổi mật khẩu</a></li>
                    <li><i class="fas fa-home"></i><a href="">Căn hộ đã đăng</a></li>
                    <li><i class="fas fa-sign-out-alt"></i><a href="">Đăng xuất</a></li>
                </ul>
            </div>
            <div class="tt-right">
                <form action="?act=doimk_" method="post" class="form-tk">
                   <h4 style="margin: 40px 0px;font-weight: bold;font-size: 16pt;">Đổi mật khẩu</h4>
                   <div class="tt-right-row">
                       <label for="">Mật khẩu cũ</label>
                       <input type="password" name="passcu" id="">
                   </div>
                   <div class="tt-right-row">
                       <label for="">Mật khẩu mới</label>
                       <input type="password" name="passnew" id="">
                   </div>
                   <div class="tt-right-row">
                       <label for="">Nhập lại mật khẩu mới</label>
                       <input type="password" name="repassnew" id="">
                       <input type="hidden" name="ma_tk" value="<?=$_SESSION['id']?>">
                   </div>
                   <button class="btn-tk">Lưu</button>
                   <?php if(isset($message)==true){  ?>
                    <p style="margin-top: 30px;"><?=$message?></p>
                  <?php } ?>
                </form>
            </div>
        </div>
    </div>
</div>