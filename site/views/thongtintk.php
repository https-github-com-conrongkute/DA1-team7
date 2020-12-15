<div class="tt-back-gr mt" >
    <div class="boxcenter">
        <div class="tt-bg">
            <div class="tt-left">
                <center style="margin-top: 50px;">
                    <div style="width: 100px;height: 100px;border-radius: 50%; overflow: hidden;">
                    <img src="../uploaded/<?php if ($_SESSION['shinh']=="") echo "user.png";else echo $_SESSION['shinh'];?>" style="width: 100%;" alt="">
                   </div>
                   <h4><?=$_SESSION["user"]?></h4>
                </center>
                <hr>
                <ul>
                <li><i class="fa fa-bell"></i><a href="?act=thongbao&ma_tk=<?=$_SESSION['id']?>">Thông báo</a></li>
                    <li><i class="fas fa-cog"></i><a href="?act=thongtintk&ma_tk=<?=$_SESSION['id']?>">Thông tin tài khoản</a></li>
                    <li><i class="fas fa-lock"></i><a href="?act=doimk&ma_tk=<?=$_SESSION['id']?>">Đổi mật khẩu</a></li>
                    <li><i class="fas fa-home"></i><a href="?act=ch-dd&ma_tk=<?=$_SESSION['id']?>">Căn hộ đã đăng</a></li>
                    <li><i class="far fa-calendar"></i><a href="?act=ds-ld&ma_tk=<?=$_SESSION['id']?>">Danh sách khách hàng đặt xem</a></li>
                    <li><i class="far fa-calendar"></i><a href="?act=lichsu&ma_tk=<?=$_SESSION['id']?>">Lịch sử đặt của bạn</a></li>
                    <li><i class="fas fa-heart"></i><a href="?act=ch-yt">Căn hộ yêu thích</a></li>
                    <li><i class="fas fa-sign-out-alt"></i><a href="?act=dangxuat&logout=1">Đăng xuất</a></li>
                </ul>
            </div>
            <div class="tt-right">
            <?php if (isset($rows)) {
                require_once "$rows";
            }
            else{
                ?>
                
                <form action="?act=thaydoitt" method="post" class="form-tk">
                   <h4 style="margin-top: 50px; margin-bottom: 20px; font-weight: bold;font-size: 16pt;">Thông tin cá nhân</h4>
                   <div class="tt-right-row">
                       <label>Họ và tên</label>
                       <input type="text" name="tenkh" id="" value="<?=$kh['ho_ten']?>">
                       <input type="hidden" name="ma_tk" value="<?=$kh['ma_tk']?>">
                   </div>
                   <div class="tt-right-row">
                       <label>Email</label>
                       <input type="email" name="email" id=""  value="<?=$kh['email']?>">
                   </div>
                   <div class="tt-right-row">
                       <label>Số điện thoại</label>
                       <input type="text" name="sdt" id=""  value="0<?=$kh['sdt']?>">
                   </div>
                   <button class="btn-tk">Lưu</button>
                </form>
                
           
                <?php
            }?>
             </div>
        </div>
    </div>
</div>