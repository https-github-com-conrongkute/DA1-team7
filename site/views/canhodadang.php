<div class="ch-dd">
    <h3 style="font-weight: bold; margin-bottom: 20px; margin-top: 50px;">Căn hộ đã đăng</h3>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">STT</th>
                <th scope="col">Thông tin căn hộ</th>
                <th scope="col">Vị tí</th>
                <!-- <th scope="col">Hình</th> -->
                <!-- <th scope="col">Giá thuê</th> -->
                <th scope="col" style="width: 17%;">Trạng thái</th>
                <th scope="col">Sửa</th>
                <th scope="col">Xóa</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($dsch as $c) {
                $maloai = maloaican($c["ma_loai"]);
                $quan = maquan($c["ma_quan"]);
                $stt += 1;
            ?>

                <tr>
                    <th scope="row"><?= $stt ?></th>
                    <td>
                        <p style="font-weight: bold;"><?= $c["ten_can_ho"] ?></p>
                        <p>Loại căn: <?php echo $maloai["ten_can"] ?></p>
                        <p>Quận/Huyện: <?php echo $quan["ten_quan"] ?></p>
                        <p>Số phòng ngủ: <?= $c["so_phong_ngu"] ?></p>
                        <p>Số phòng vệ sinh: <?= $c["so_phong_vs"] ?></p>
                        <p>Diện tích: <?= $c["dien_tich"] ?> </p>
                        <p>Năm xây dựng: <?= $c["nam_xd"] ?></p>
                        <p>Tầng: <?= $c["tang"] ?></p>
                        <p><strong>Giá thuê:</strong></p>
                        <p> <?=number_format($c["gia_thue"],0,'','.') ?> VND</p>
                        <p><strong>Chi phí khác:</strong></p>
                        <p><?= $c["chi_phi_khac"] ?></p>
                    </td>
                    <td>
                        <p>Địa chỉ: <?= $c["dia_chi"] ?></p>
                        <p>Hướng nhà: <?php if ($c["huong_nha"] == 1) echo "Đông";
                                        elseif ($c["huong_nha"] == 2) echo "Tây";
                                        elseif ($c["huong_nha"] == 3) echo "Nam";
                                        elseif ($c["huong_nha"] == 4) echo "Bắc";
                                        elseif ($c["huong_nha"] == 5) echo "Tây Bắc";
                                        elseif ($c["huong_nha"] == 6) echo "Tây Nam";
                                        elseif ($c["huong_nha"] == 7) echo "Đông Bắc";
                                        elseif ($c["huong_nha"] == 8) echo "Đông Nam";
                                        ?></p>
                        <p><strong>Tiện ích:</strong></p>
                        <p><?= $c["tien_ich"] ?></p>
                        <p><strong>Hình ảnh</strong></p>
                          <p>
                            <img src="../uploaded/<?= $c["hinh"] ?>" alt="" style="width: 70px;height: 50px;float: left;margin: 10px 10px;" >
                            <img src="../uploaded/<?= $c["hinha"] ?>" alt="" style="width: 70px;height: 50px;float: left;margin: 10px 10px;" >
                            <img src="../uploaded/<?= $c["hinhb"] ?>" alt="" style="width: 70px;height: 50px;float: left;margin: 10px 10px;" >
                            <img src="../uploaded/<?= $c["hinhc"] ?>" alt="" style="width: 70px;height: 50px;float: left;margin: 10px 10px;" >
                        </p>
                    </td>
                    <td>
                        
                        <p style="margin-top: 40px;"><em><?= ($c['an_hien'] == 0) ? "<span class='nono' style='background-color: orangered; padding: 5px; color: white; width: 100%; border-radius: 10px;'>Chờ xét duyệt</span>" : "<span class='yesyes' style='background-color: green; padding: 5px; color: white; width: 100%; border-radius: 10px;'>Đã duyệt</span>" ?></em></p>
                        <p style="margin-top: 20px;"><?php if ($c["an_hien"]==0) {
                            ?>
                            <a style="background-color: orangered; padding: 5px; color: white; width: 100%; border-radius: 10px;" href="?act=thanhtoan&ma_can=<?=$c["ma_can"]?>">Thanh toán</a>
                            <?php
                        }
                        else{
                            ?>
                            <span class="yesyes" style="background-color: green; padding: 5px; color: white; width: 100%; border-radius: 10px;">Đã thanh toán</span>
                            <?php
                        }?></p>
                    </td>
                    <td><a href="?act=edit_ch&ma_can=<?=$c['ma_can']?>"><i class="fas fa-edit"></i></a></td>
                    <td><a class="btn_delete_ch" href="?act=delete_ch&ma_can=<?= $c['ma_can'] ?>"><i class="fas fa-trash-alt"></i></a></td>
                </tr>
            <?php } ?>

        </tbody>
    </table>
</div>