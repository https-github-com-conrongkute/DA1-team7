<div class="tt-back-gr mt">
    <div class="boxcenter">
        <div class="tt-bg">
            <div class="tt-left">
                <center style="margin-top: 50px;">
                    <div style="width: 100px;height: 100px;border-radius: 50%; overflow: hidden;">
                   <img src="../uploaded/<?=$_SESSION['shinh']?>" style="width: 100%;" alt="">
                   </div>
                   <h4><?=$_SESSION["user"]?></h4>
                </center>
                <hr>
                <ul>
                    <li><i class="fas fa-cog"></i><a href="?act=thongtintk">Thông tin tài khoản</a></li>
                    <li><i class="fas fa-lock"></i><a href="?act=doimk">Đổi mật khẩu</a></li>
                    <li><i class="fas fa-home"></i><a href="?act=ch-dd">Căn hộ đã đăng</a></li>
                    <li><i class="far fa-calendar"></i><a href="?act=ds-ld">Dach sách lịch đặt</a></li>
                    <li><i class="fas fa-sign-out-alt"></i><a href="">Đăng xuất</a></li>
                </ul>
            </div>
            <div class="tt-right">
                <form action="" method="post" class="form-tk">
                   <h4 style="margin: 40px 0px;font-weight: bold;font-size: 16pt;">Thông tin cá nhân</h4>
                   <div class="tt-right-row">
                       <label>Họ và tên</label>
                       <input type="text" name="tenkh" id="" value="<?=$_SESSION['name']?>">
                       <input type="hidden" name="ma_tk" value="<?=$_SESSION['id']?>">
                   </div>
                   
                   <div class="tt-right-row">
                     <label>Mật khẩu</label>
                     <p><?php
                     for($i=0; $i<strlen($_SESSION['mat_khau']); $i++){
                         echo "*";
                     }
                     ?></p>
                      
                   </div>
                   <div class="tt-right-row">
                       <label>Email</label>
                       <input type="email" name="email" id=""  value="<?=$_SESSION['email']?>">
                   </div>
                   <div class="tt-right-row">
                       <label>Số điện thoại</label>
                       <input type="text" name="sdt" id=""  value="0<?=$_SESSION['sdt']?>">
                   </div>
                   <button class="btn-tk">Lưu</button>
                </form>
                <!-- <div class="thongbao-datlic">
                    <h4 style="margin: 40px 0px;font-weight: bold;font-size: 16pt;">Thông báo</h4>
                    <a class="mt-5" href="?act=ds-ld">Đã có lịch đặt mới click để xem chi tiết</a>
                </div> -->
            </div>
            <div class="thongbaoch" style="margin: 0px 10px; ">
            <h4 style="margin: 40px 10px;font-weight: bold;font-size: 16pt;">Thông báo</h4>
          
                <?php foreach ($canhodadang as $chda) {
                    $lichdat=getAllLichdat($chda['ma_can']);
                    $khachhang=getkhachhangBYid($lichdat["ma_tk"]);
                    if ($lichdat["ma_can"]==true) {
                        ?>
                       
                        <div class="thongbao" style="width: 95%; margin: 0 auto; background-color: gainsboro; padding: 10px 5px; border-radius: 10px;">
                        <p style="font-size: 12pt; "><strong>Thông báo: </strong>Căn hộ của bạn đã có khách hàng đặt!!</p>
                        <strong>Thông tin:</strong>
                        <p><strong>Bài đăng: </strong> <span style="color: orangered; font-weight: bold; font-size: 11pt;"><?=$chda['ten_can_ho']?></span></p>
                        <strong>Khách hàng: </strong> <span style="color: orangered;"><?php echo $khachhang["ho_ten"]?></span> <br>
                        <strong>Ngày xem nhà: </strong> <span style="color: orangered;"><?php echo date_format(date_create($lichdat['ngay_xem']), "d/m/yy")?></span> <br>
                        <strong>Ngày đặt: </strong> <span style="color: black;"><?php echo date_format(date_create($lichdat['ngay_dat']), "d/m/yy")?></span> <br>
                        <strong>Số điện thoại: </strong> <span style="color: black;">0<?php echo $khachhang['sdt']?></span> 

                    </div>
                        <?php
                    }
                }?>
            
            </div>
        </div>
    </div>
</div>