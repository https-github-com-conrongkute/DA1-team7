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
            <div class="tt-right">
                <div class="ch-dd">
                    <h3 style="font-weight: bold; margin-bottom: 50px;">Căn hộ đã đăng</h3>
                    <table class="table table-bordered">
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
        </div>
    </div>
</div>