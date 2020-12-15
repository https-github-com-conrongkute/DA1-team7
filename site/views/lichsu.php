
                <div class="ch-dd">
                    <h3 style="font-weight: bold; margin-bottom: 30px; margin-top: 50px;">Lịch sử đặt  của bạn</h3>
                    <table class="table table-bordered" style="padding: 0px 20px;">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col" style="width: 50%;">Căn hộ</th>
                                <th scope="col">Ngày xem</th>
                                <th scope="col">Ngày đặt</th>
                                <th scope="col">Ghi chú</th>
                                <th scope="col" style="width: 10%;">Khác</th>
                                <!-- <th scope="col">Trạng thái</th> -->
                                <!-- <th scope="col">Sửa</th>
                                <th scope="col">Xóa</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($lichsu as $ds) {
                                $stt+=1;
                                $canho=canho($ds["ma_can"]);
                                $tk=khachhang($canho["ma_tk"]);
                                // $phuong=getphuongbyid($canho["id"]);
                                ?>
                                
                            <tr>
                                <th scope="row"><?=$stt?></th>
                               
                                <td><span style="width: 75%; float: left;"><?php echo $canho['ten_can_ho']?></span> <?php if (date("d-m-y") <= date_format(date_create($ds['ngay_dat']), "d/m/yy")) {
                                    echo "<span class='neww'>Sắp tới</span>";
                                }?>
                                <br>
                                <p style="width: 100%; float: left;">Chủ căn hộ: <?php echo $tk["ho_ten"]?></p><br>
                                <p>Số điện thoại: 0<?php echo $tk["sdt"]?></p>
                                <p>Địa chỉ nhà: <?php echo $canho["dia_chi"]?></p>
                              </td>
                                <td><?=date_format(date_create($ds['ngay_xem']), "d/m/yy")?></td>
                                <td><?=date_format(date_create($ds['ngay_dat']), "d/m/yy")?></td>
                                <td><?php if (date("Y-m-d") > date_format(date_create($ds['ngay_xem']), "Y-m-d")) {
                                    echo "Đã hết hạn";
                                }
                                else{
                                    echo "Chưa xem nhà";
                                }?>
                                <p style="margin-top: 20px;"><?php
                                if ($ds["trang_thai"]==0) {
                                    ?>
                                    <span style="color: orangered;">Chủ căn hộ chưa duyệt</span>
                                    <?php
                                }
                                else{
                                    ?>
                                    <span style="color: green;">Chủ căn hộ đả đồng ý</span>
                                    <?php
                                }
                                ?></p>    
                            </td>
                                <td><a href="javascript:Delete('?act=deletedatlich&ma_dat=<?=$ds['ma_dat']?>')" style="color: white; background-color: orangered; padding: 2px 5px; border-radius: 10px;">Hủy lịch</a></td>
                                
                            </tr>
                            <?php
                            }?>
                                    
                        </tbody>
                    </table>
                </div>
            <script>
                    function Delete(url) {
                if (confirm('Bạn muốn hủy lịch này')) {
                    document.location = url;
                }
                return false;
    }
            </script>