<div class="right__title">Bảng khách hàng</div>
<div class="right__table">
    <p class="right__tableTitle">Danh sách khách hàng</p>
    <div class="right__tableWrapper">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th style="text-align: left;">Họ và tên</th>
                    <th>Tên đăng nhập</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Vai trò</th>
                    <th>Trạng thái</th>
                    <th>Hình</th>
                    <!-- <th>ID Sản Phẩm</th>
                    <th>Trạng Thái</th> -->
                    <th>Sửa</th>
                    <th>Xóa</th>

                </tr>
            </thead>
            <tbody>
                <?php foreach($ds_kh as $ds){ ?>
                <tr>
                    <td>1</td>
                    <td><?=$ds['ho_ten']?></td>
                    <td><?=$ds['ten_tk']?></td>
                    <td><?=$ds['sdt']?></td>
                    <td><?=$ds['email']?></td>
                    <td><?=($ds['vai_tro']==1) ? 'Quản trị':"khách hàng"?></td>
                    <td><?=($ds['kich_hoat']==1)? 'Đã kích hoạt':"Đã bị khóa"?></td>
                    <td> <?php if($ds['hinh'] == null){ ?>
                        <img src="./uploaded/user.jpg" alt="" style="width: 100px;height:100px;border-radius: 50%;object-fit: cover;">
                    <?php }else{ ?>
                        <img src="./uploaded/<?=$ds['hinh']?>" alt="" style="width: 100px;height:100px;border-radius: 50%;object-fit: cover;">
                    <?php } ?>
                    </td>
                    <td>
                        <a href="?ctrl=tai_khoan&act=edit&ma_kh=<?=$ds['ma_tk']?>" style="color: #455A64;"><i class="fas fa-edit"></i></a>
                    </td>
                    <td>
                        <a class="sua" href="#" style="color: #455A64;"><i class="fas fa-trash-alt"></i></a>
                        <div class="delete-loaican">
                            <div class="delete-container">
                                <div class="delete-form">
                                    <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;">Bạn có muốn xóa không ?</h3>
                                    <div class="nut">
                                        <a href="#" class="co" style="padding: 10px 20px;background-color: #f0f0f0;border-radius: 20px;width: 100px;margin-right: 10px;color:black;">Không</a>
                                        <a href="<?=ADMIN_URL?>/?ctrl=tai_khoan&act=delete&ma_kh=<?=$ds['ma_tk']?>" class="co" style="padding: 10px 20px;background-color: red;border-radius: 20px;width: 100px;color: white;">Có</a>
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