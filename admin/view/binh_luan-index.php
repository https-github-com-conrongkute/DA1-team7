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
                    <a href="javascript:Delete('<?=ADMIN_URL?>/?ctrl=binhluan&act=delete&ma_bl=<?=$ds['ma_bl']?>')" style="color: #455A64;"><i class="fas fa-trash-alt"></i></a>
                        
                </tr>
                <?php } ?>
            </tbody>

        </table>

    </div>
</div>