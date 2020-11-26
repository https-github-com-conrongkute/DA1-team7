<div class="ch-dd">
          <h3 style="font-weight: bold; margin-bottom: 30px; margin-top: 50px;">Danh sách khách hàng đặt xem căn hộ của
                    bạn</h3>
          <table class="table table-bordered" style="padding: 0px 20px;">
                    <thead>
                              <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên khách hàng</th>
                                        <th scope="col" style="width: 40%;">Căn hộ</th>
                                        <th scope="col">Ngày xem</th>
                                        <th scope="col">Ngày đặt</th>
                                        <th scope="col">Ghi chú</th>
                                        <!-- <th scope="col">Trạng thái</th> -->
                                        <!-- <th scope="col">Sửa</th>
                                <th scope="col">Xóa</th> -->
                              </tr>
                    </thead>
                    <tbody>
                              <?php foreach ($dsld as $ds) {
                                $stt+=1;
                                
                                ?>

<<<<<<< HEAD
                <div class="ch-dd">
                    <h3 style="font-weight: bold; margin-bottom: 30px; margin-top: 50px;">Lịch sử đặt căn hộ</h3>
                    <table class="table table-bordered" style="padding: 0px 20px;">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Thông tin khách hàng</th>
                                <!-- <th scope="col">Email</th>
                                <th scope="col">Số điện thoại</th> -->
                                <th scope="col">Căn hộ</th>
                                <th scope="col">Ngày xem</th>
                                <th scope="col">Ngày đặt</th>
                                <!-- <th scope="col">Trạng thái</th> -->
                                <th scope="col">Sửa</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach($ds_ld as $ld){ 
                                $ten_kh = getKhachhangIndl($ld['ma_tk']);
                                $can_ho = getcanhoIndl($ld['ma_can']);
                                ?>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <p><strong>Họ và tên:</strong> <?=$ten_kh['ho_ten']?></p>
                                    <p><strong>Email: </strong><?=$ten_kh['email']?></p>
                                    <p><strong>Số điện thoại: </strong><?=$ten_kh['sdt']?></p>
                                </td>
                                <td><?=$can_ho['ten_can_ho']?></td>
                                <td><?=$ld['ngay_xem']?></td>
                                <td><?=$ld['ngay_dat']?></td>
                                <td><a href="">Sửa</a></td>
                                <td><a href="">Xóa</a></td>
                            </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
            
=======
                              <tr>
                                        <th scope="row"><?=$stt?></th>
                                        <td>
                                                  <p><?=$ds['ho_ten']?></p>
                                                  <p>SĐT: 0<?=$ds['sdt']?></p>

                                        </td>
                                        <td><span style="width: 75%; float: left;"> <?=$ds['ten_can_ho']?></span> <?php if (date("d-m-y") <= date_format(date_create($ds['ngay_xem']), "d/m/yy")) {
                                    echo "<span class='neww' style='width: 25%'>Sắp tới</span>";
                                }?></td>
                                        <td><?=date_format(date_create($ds['ngay_xem']), "d/m/yy")?></td>
                                        <td><?=date_format(date_create($ds['ngay_dat']), "d/m/yy")?></td>
                                        <td><?php if (date("d-m-y") >= date_format(date_create($ds['ngay_xem']), "d/m/yy")) {
                                    echo "<span class='hethang'>Đã hết hạn</span>";
                                }
                                else{
                                    echo "Chưa xem nhà";
                                }?></td>

                              </tr>
                              <?php
                            }?>

                    </tbody>
          </table>
</div>
>>>>>>> 4588864c9c2d10b460f7b1f4ee1ec92872f5072d
