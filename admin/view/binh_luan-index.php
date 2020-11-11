<div class="right__title">Bảng bình luận</div>
<div class="right__table">
    <p class="right__tableTitle">Danh sách bình luận</p>
    <div class="right__tableWrapper">
        <table>
            <thead>
                <tr>
                    <th>Mã bình luận</th>
                    <th>Khách hàng</th>
                    <th>Căn hộ</th>
                    <th style="text-align: left;">Nội dung</th>
                    <th>Ngày bình luận</th>
                    <th>Trạng thái</th>
                    <!-- <th>ID Sản Phẩm</th>
                    <th>Trạng Thái</th> -->
                    <th>Sửa</th>
                    <th>Xóa</th>

                </tr>
            </thead>
            <tbody>
                <?php foreach($ds_bl as $ds){ ?>
                <tr>
                    <td><?=$ds['ma_bl']?></td>
                    <td><?php $tenkh = showKhachhangdatlich($ds['ma_tk']); echo $tenkh['ho_ten']; ?></td>
                    <td><?php $tencan = showCanhodatlich($ds['ma_can']); echo $tencan['ten_can_ho']; ?></td>
                    <td><?=$ds['noi_dung']?></td>
                    <td><?=date_format(date_create($ds['ngay_bl']), "d/m/yy")?></td>
                    <td><?=($ds['an_hient']==1)? "Đang hiện":"Đang ẩn"?></td>
                    <td>
                        <a href="?ctrl=binhluan&act=edit&ma_bl=<?=$ds['ma_bl']?>" style="color: #455A64;"><i class="fas fa-edit"></i></a>
                    </td>
                    <td>
                        <a class="sua" href="#" style="color: #455A64;"><i class="fas fa-trash-alt"></i></a>
                        <div class="delete-loaican">
                            <div class="delete-container">
                                <div class="delete-form">
                                    <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;">Bạn có muốn xóa không ?</h3>
                                    <div class="nut">
                                        <a href="#" class="co" style="padding: 10px 20px;background-color: #f0f0f0;border-radius: 20px;width: 100px;margin-right: 10px;color:black;">Không</a>
                                        <a href="<?=ADMIN_URL?>/?ctrl=binhluan&act=delete&ma_bl=<?=$ds['ma_bl']?>" class="co" style="padding: 10px 20px;background-color: red;border-radius: 20px;width: 100px;color: white;">Có</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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