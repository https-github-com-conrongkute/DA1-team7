<div class="right__title">Đăng lý tìm nhà nhanh</div>
<div class="right__table">
    <p class="right__tableTitle">Danh sách đăng ký</p>
    <div class="right__tableWrapper">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th style="text-align: center;">Họ và tên </th>
                    <!-- <th>ID Sản Phẩm</th>
                    <th>Trạng Thái</th> -->
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Trạng thái</th>

                </tr>
            </thead>
            <tbody>
            <?php foreach($ds as $ds) { 
                $stt+=1;
                ?>
                <tr>
                    <td><?=$stt?></td>
                    <td><?=$ds["ho_ten"]?></td>
                    <td><?=$ds["email"]?></td>
                    <td><?=$ds["sdt"]?></td>
                    <td><?php if ($ds["trangthai"]==0) {
                              ?>
                              <a href="?ctrl=dangkytim&act=update&id=<?=$ds["id"]?>" style="color: white; background-color: orangered; padding: 5px 10px; border-radius: 20px;">Chưa liên hệ</a>
                              <?php 
                    } else {
                              ?>
                               <span  style="color: white; background-color: green; padding: 5px 10px; border-radius: 20px;">Đả liên hệ</span>

                              <?php
                    }?></td>
                </tr>
            <?php }?>
            </tbody>

        </table>

    </div>
</div>