<div class="ch-dd">
          <h3 style="font-weight: bold; margin-bottom: 30px; margin-top: 50px;">Danh sách khách hàng đặt xem căn hộ của
                    bạn</h3>
          <table class="table table-bordered" style="padding: 0px 20px;">
                    <thead>
                              <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Tên khách hàng</th>
                                        <th scope="col" style="width: 30%;">Căn hộ</th>
                                        <th scope="col">Ngày xem</th>
                                        <th scope="col">Ngày đặt</th>
                                        <th scope="col">Ghi chú</th>
                                        <th scope="col">Duyệt</th>
                                        
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
                                        <td><span style="width: 75%; float: left;"> <?=$ds['ten_can_ho']?></span> <?php if (date("Y-m-d") <= date_format(date_create($ds['ngay_dat']), "Y-m-d")) {
                                    echo "<span class='neww' style='width: 25%'>Sắp tới</span>";
                                }?></td>
                                        <td><?=date_format(date_create($ds['ngay_xem']), "d/m/yy")?></td>
                                        <td><?=date_format(date_create($ds['ngay_dat']), "d/m/yy")?></td>
                                        <td><?php if (date("Y-m-d") >= date_format(date_create($ds['ngay_xem']), "Y-m-d")) {
                                    echo "<span class='hethang'>Đã hết hạn</span>";
                                }
                                else{
                                    echo "Chưa xem nhà";
                                }?></td>
                                <td>
                                  <?php
                                  if ($ds["ngay_xem"] < date("Y-m-d")) {
                                    echo "";
                                  }
                                  else{
                                    ?>
                                    <?php 
                                        if($ds['trang_thai'] == 0){
                                        ?>
                                        <p style="color: blue;">Click <i class='fas fa-hand-point-down'></i></p>
                                        <a href="?act=updatedl&ma_dat=<?=$ds["ma_dat"]?>" style="background-color: orangered; color: white; padding: 5px; border-radius: 10px;">Đồng ý</a>
                                        <?php
                                      }
                                      else{
                                      ?>
                                      <p style="color: green;">Đả đồng ý lịch hẹn</p>
                                      <a href="?act=huydatlich&ma_dat=<?=$ds["ma_dat"]?>" style="background-color: orangered; color: white; padding: 5px; border-radius: 10px;">Hủy hẹn</a>
                                   <?php
                                    }
                                  }
                                  ?>
                                </td>

                              </tr>
                              <?php
                            }?>

                    </tbody>
          </table>
</div>
