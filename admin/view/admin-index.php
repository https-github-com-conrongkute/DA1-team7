<div class="right__title">Thông tin ADMIN   </div>
<div class="right__table">
    <p class="right__tableTitle">Danh sách admin</p>
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
                 

                </tr>
            </thead>
            <tbody>
                <?php foreach($ds_kh as $ds) { ?>
                <tr>
                    <td>1</td>
                    <td><?=$ds['ho_ten']?></td>
                    <td><?=$ds['ten_tk']?></td>
                    <td>0<?=$ds['sdt']?></td>
                    <td><?=$ds['email']?></td>
                    <td><?=($ds['vai_tro']==1) ? 'Quản trị':"khách hàng"?></td>
                    <td><?=($ds['kich_hoat']==1)? 'Đã kích hoạt':"Đã bị khóa"?></td>
                    <td> <?php if($ds['hinh'] == null){ ?>
                        <img src="../uploaded/user.jpg" alt="" style="width: 100px;height:100px;border-radius: 50%;object-fit: cover;">
                    <?php }else{ ?>
                        <img src="../uploaded/<?=$ds['hinh']?>" alt="" style="width: 100px;height:100px;border-radius: 50%;object-fit: cover;">
                    <?php } ?>
                    </td>
                    <td>
                        <a href="?ctrl=tai_khoan&act=adminedit&ma_kh=<?=$ds['ma_tk']?>" style="color: #455A64;"><i class="fas fa-edit"></i></a>
                    </td>
                   

                </tr>
                <?php } ?>
            </tbody>

        </table>

    </div>
</div>