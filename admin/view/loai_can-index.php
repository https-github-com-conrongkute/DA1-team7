<div class="right__title">Bảng loại căn hộ</div>
<div class="right__table">
    <p class="right__tableTitle">Danh sách loại căn hộ</p>
    <div class="right__tableWrapper">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th style="text-align: center;">Loại căn hộ</th>
                    <!-- <th>ID Sản Phẩm</th>
                    <th>Trạng Thái</th> -->
                    <th>Sửa</th>
                    <th>Xóa</th>

                </tr>
            </thead>
            <tbody>
            <?php foreach($ds as $ds) { 
                $stt+=1;
                ?>
                <tr>
                    <td><?=$stt?></td>
                    <td><?=$ds["ten_can"]?></td>

                    <td>
                        <a href="/admin/?ctrl=loai_can&act=edit&ma_loai=<?=$ds['ma_loai']?>" style="color: #455A64;"><i class="fas fa-edit"></i></a>
                    </td>
                    <td>
                    <a href="javascript:Delete('/admin/?ctrl=loai_can&act=delete&ma_loai=<?=$ds['ma_loai']?>')" style="color: #455A64;"><i class="fas fa-trash-alt"></i></a>
                    </td>
                </tr>
            <?php }?>
            </tbody>

        </table>

    </div>
</div>
