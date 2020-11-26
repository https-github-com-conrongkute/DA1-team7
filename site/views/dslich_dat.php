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
