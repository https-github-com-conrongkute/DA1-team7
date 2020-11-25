<div class="tt-back-gr mt">
    <div class="boxcenter">
        <div class="tt-bg">
            <div class="tt-left">
                <center style="margin-top: 50px;">
                    <div style="width: 100px;height: 100px;border-radius: 50%;background-color: #ccc;">
                        <span class="fas fa-user" style="font-size: 30pt;line-height: 100px;color:white;"></span>
                    </div>
                    <h4><?= $_SESSION["user"] ?></h4>
                    <em>Thành viên từ 1/1/2020</em>
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
            <div class="tt-right" style="width: 73%;padding-right: 10px;">
                <div class="ch-dd">
                    <h3 style="font-weight: bold; margin-bottom: 50px;">Căn hộ đã đăng</h3>
                    <table class="table table-bordered pr-2">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Tên khách hàng</th>
                                <th scope="col">Căn hộ</th>
                                <th scope="col">Ngày xem</th>
                                <th scope="col">Ngày đặt</th>
                                <!-- <th scope="col">Trạng thái</th> -->
                                <th scope="col">Sửa</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Đinh Hải Long</td>
                                <td>Cho thuê căn hộ dịch vụ - CityLand Park Hill - Quận Gò Vấp</td>
                                <td>29/12/20020</td>
                                <td>12/12/2020</td>
                                <td><a href="">Sửa</a></td>
                                <td><a href="">Xóa</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div class="thongbaoch" style="margin: 0px 10px; display: none;">
                    <h4 style="margin: 40px 10px;font-weight: bold;font-size: 16pt;">Thông báo</h4>

                    <?php foreach ($canhodadang as $chda) {
                        $lichdat = getAllLichdat($chda['ma_can']);
                        $khachhang = getkhachhangBYid($lichdat["ma_tk"]);
                        if ($lichdat["ma_can"] == Null) {
                    ?>
                            <p>Căn hộ của bạn chưa có khách hàng đặt.</p>
                        <?php
                        } else {
                        ?>
                            <div class="thongbao" style="width: 95%; margin: 0 auto; background-color: gainsboro; padding: 10px 5px; border-radius: 10px;">
                                <p style="font-size: 12pt; "><strong>Thông báo: </strong>Căn hộ của bạn đả có khách hàng đặt!!</p>
                                <strong>Thông tin:</strong>
                                <p><strong>Bài đăng: </strong> <span style="color: orangered; font-weight: bold; font-size: 11pt;"><?= $chda['ten_can_ho'] ?></span></p>
                                <strong>Khách hàng: </strong> <span style="color: orangered;"><?php echo $khachhang["ho_ten"] ?></span> <br>
                                <strong>Ngày xem nhà: </strong> <span style="color: orangered;"><?php echo date_format(date_create($lichdat['ngay_xem']), "d/m/yy") ?></span> <br>
                                <strong>Ngày đặt: </strong> <span style="color: black;"><?php echo date_format(date_create($lichdat['ngay_dat']), "d/m/yy") ?></span> <br>
                                <strong>Số điện thoại: </strong> <span style="color: black;">0<?php echo $khachhang['sdt'] ?></span>

                            </div>
                    <?php
                        }
                    } ?>

                </div>
        </div>
    </div>
</div>