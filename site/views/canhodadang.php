
                <div class="ch-dd">
                    <h3 style="font-weight: bold; margin-bottom: 20px; margin-top: 50px;">Căn hộ đã đăng</h3>
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
                            <?php foreach($dsch as $c) {
                                $maloai=maloaican($c["ma_loai"]);
                                $quan=maquan($c["ma_quan"]);
                                ?>
                            
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <p style="font-weight: bold;"><?=$c["ten_can_ho"]?></p>
                                    <p>Loại căn: <?php echo $maloai["ten_can"]?></p>
                                    <p>Quận/Huyện: <?php echo $quan["ten_quan"]?></p>
                                    <p>Số phòng ngủ: <?=$c["so_phong_ngu"]?></p>
                                    <p>Số phòng vệ sinh: <?=$c["so_phong_vs"]?></p>
                                    <p>Diện tích: <?=$c["dien_tich"]?> </p>
                                    <p>Năm xây dựng: <?=$c["nam_xd"]?></p>
                                    <p>Tầng: <?=$c["tang"]?></p>
                                </td>
                                <td>
                                    <p>Địa chỉ: <?=$c["dia_chi"]?></p>
                                    <p>Hướng nhà: <?=$c["huong_nha"]?></p>
                                    <p><strong>Tiện ích:</strong></p>
                                    <p><?=$c["tien_ich"]?></p>
                                </td>
                                <td>
                                    <p><img src="../uploaded/<?=$c["hinh"]?>" alt="" style="width: 70px;"></p>
                                    <p><img src="../uploaded/<?=$c["hinha"]?>" alt="" style="width: 70px;"></p>
                                    <p><img src="../uploaded/<?=$c["hinhb"]?>" alt="" style="width: 70px;"></p>
                                    <p><img src="../uploaded/<?=$c["hinhc"]?>" alt="" style="width: 70px;"></p>
                                </td>
                                <td>
                                    <p><?=$c["gia_thue"]?> VNk</p>
                                    <p><strong>Chi phí khác:</strong></p>
                                    <p><?=$c["chi_phi_khac"]?></p>
                                </td>
                                <td><?=$c["ghi_chu"]?></td>
                                <td><a href="">Sửa</a></td>
                                <td><a href="">Xóa</a></td>
                            </tr>
                            <?php } ?>
                            
                        </tbody>
                    </table>
                </div>
            
