<div class="right__title">Bảng đặt lịch</div>
<div class="right__table">
    <p class="right__tableTitle">Danh sách đặt lịch</p>
    <div class="right__tableWrapper">
        <table>
            <thead>
                <tr>
                    <th>Mã lịch xem</th>
                    <th style="text-align: left;">Tên khách hàng</th>
                    <th>Căn hộ</th>
                    <th>Ngày xem</th>
                    <th>Ngày đặt</th>
                    <!-- <th>ID Sản Phẩm</th>
                    <th>Trạng Thái</th> -->
                    <th>Sửa</th>
                    <th>Xóa</th>

                </tr>
            </thead>
            <tbody>
                <?php foreach($ds_dl as $ds){ ?>
                <tr>
                    <td><?=$ds['ma_dat']?></td>
                    <td><?php $tenkh = showKhachhangdatlich($ds['ma_tk']); echo $tenkh['ho_ten']; ?></td>
                    <td><?php $tencan = showCanhodatlich($ds['ma_can']); echo $tencan['ten_can_ho']; ?></td>
                    <td><?=$ds['ngay_xem']?></td>
                    <td><?=$ds['ngay_dat']?></td>
                    <td>
                        <a href="?ctrl=dat_lich&act=edit&ma_dl=<?=$ds['ma_dat']?>" style="color: #455A64;"><i class="fas fa-edit"></i></a>
                    </td>
                    <td>
                    <a href="javascript:Delete('<?=ADMIN_URL?>/admin/?ctrl=dat_lich&act=delete&ma_dl=<?=$ds['ma_dat']?>')" style="color: #455A64;"><i class="fas fa-trash-alt"></i></a>
                        <!-- <div id="delete-loaican">
                            <div class="delete-container">
                                <div class="delete-form">
                                    <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;">Bạn có muốn xóa không ?</h3>
                                    <div class="nut">
                                        <a href="#" class="co" style="padding: 10px 20px;background-color: #f0f0f0;border-radius: 20px;width: 100px;margin-right: 10px;color:black;">Không</a>
                                        <a href="<?=ADMIN_URL?>/admin/?ctrl=dat_lich&act=delete&ma_dl=<?=$ds['ma_dat']?>" class="co" style="padding: 10px 20px;background-color: red;border-radius: 20px;width: 100px;color: white;">Có</a>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </td>
                    <!-- <td></td>
                    <td></td>
                    <td></td>
                    <td></td> -->
                </tr>
                <?php } ?>
            </tbody>

        </table>

    </div>
</div>