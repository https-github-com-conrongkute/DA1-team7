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
                <div class="ch-dd" >
                    <h3 style="font-weight: bold; margin-bottom: 50px;">Căn hộ đã đăng</h3>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Thông tin căn hộ</th>
                                <th scope="col">Vị tí</th>
                                <th scope="col">Hình</th>
                                <th scope="col">Giá thuê</th>
                                <th scope="col">Trạng thái</th>
                                <th scope="col">Sửa</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <p style="font-weight: bold;">Cho thuê căn hộ dịch vụ - CityLand Park Hill - Quận Gò Vấp</p>
                                    <p>Loại căn: Căn hộ chung cư</p>
                                    <p>Quận/Huyện: Quận Gò Vấp</p>
                                    <p>Số phòng ngủ: 4</p>
                                    <p>Số phòng vệ sinh: 1</p>
                                    <p>Diện tích: 15 m2</p>
                                    <p>Năm xây dựng: 2018</p>
                                    <p>Tầng: 5</p>
                                </td>
                                <td>
                                    <p>Địa chỉ: 89 Quang Trung, phường 10, Quận Gò Vấp</p>
                                    <p>Hướng nhà: Đông Nam</p>
                                    <p><strong>Tiện ích:</strong></p>
                                    <p><strong>-Vị trí đẹp, thuận lợi giao thông</strong> Khu dân cư văn minh, cao cấp, an ninh 24/7</p>
                                    <p>- Gần các đường di chuyển sang trung tâm, 10 phút di chuyển đến sân bay TSN</p><br>
                                    <p> Khu dân cư và xung quanh</p>
                                </td>
                                <td>
                                    <p><img src="../uploaded/b1.jpg" alt="" style="width: 100px;"></p>
                                    <p><img src="../uploaded/b2.jpg" alt="" style="width: 100px;"></p>
                                    <p><img src="../uploaded/b3.jpg" alt="" style="width: 100px;"></p>
                                    <p><img src="../uploaded/b4.jpg" alt="" style="width: 100px;"></p>
                                </td>
                                <td>
                                    <p>5,000,000</p>
                                    <p><strong>Chi phí khác:</strong></p>
                                    <p>Xe: 100/1tháng Điện nước: Theo giá nhà nước</p>
                                </td>
                                <td>Chưa cho thuê</td>
                                <td><a href="">Sửa</a></td>
                                <td><a href="">Xóa</a></td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>
                                    <p style="font-weight: bold;">Cho thuê căn hộ dịch vụ - CityLand Park Hill - Quận Gò Vấp</p>
                                    <p>Loại căn: Căn hộ chung cư</p>
                                    <p>Quận/Huyện: Quận Gò Vấp</p>
                                    <p>Số phòng ngủ: 4</p>
                                    <p>Số phòng vệ sinh: 1</p>
                                    <p>Diện tích: 15 m2</p>
                                    <p>Năm xây dựng: 2018</p>
                                    <p>Tầng: 5</p>
                                </td>
                                <td>
                                    <p>Địa chỉ: 89 Quang Trung, phường 10, Quận Gò Vấp</p>
                                    <p>Hướng nhà: Đông Nam</p>
                                    <p><strong>Tiện ích:</strong></p>
                                    <p><strong>-Vị trí đẹp, thuận lợi giao thông</strong> Khu dân cư văn minh, cao cấp, an ninh 24/7</p>
                                    <p>- Gần các đường di chuyển sang trung tâm, 10 phút di chuyển đến sân bay TSN</p><br>
                                    <p> Khu dân cư và xung quanh</p>
                                </td>
                                <td>
                                    <p><img src="../uploaded/b1.jpg" alt="" style="width: 100px;"></p>
                                    <p><img src="../uploaded/b2.jpg" alt="" style="width: 100px;"></p>
                                    <p><img src="../uploaded/b3.jpg" alt="" style="width: 100px;"></p>
                                    <p><img src="../uploaded/b4.jpg" alt="" style="width: 100px;"></p>
                                </td>
                                <td>
                                    <p>5,000,000</p>
                                    <p><strong>Chi phí khác:</strong></p>
                                    <p>Xe: 100/1tháng Điện nước: Theo giá nhà nước</p>
                                </td>
                                <td>Chưa cho thuê</td>
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