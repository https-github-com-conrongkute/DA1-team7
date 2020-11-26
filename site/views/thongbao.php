
                <h4 style="margin: 40px 15px;font-weight: bold;font-size: 16pt;">Thông báo</h4>
                <?php 

                foreach ($showtb as $showtb){
                    $stt+=1;
                        ?>
                        <div class="thongbao" style=" width: 95%; margin: 0 auto; background-color: gainsboro; padding: 10px 5px; border-radius: 10px; margin-bottom: 20px;">
                        <div class="pading" style="padding: 10px 10px;">
                        <p style="font-size: 12pt; "><strong>Thông báo: </strong>Căn hộ của bạn đã có khách hàng đặt!! <?php if ($stt==1) {
                            echo "<span class='neww'> New</span>";
                        }?></p>
                        <strong>Thông tin:</strong>
                        <p><strong>Bài đăng: </strong> <span style="color: orangered; font-weight: bold; font-size: 11pt;"><?=$showtb['ten_can_ho']?></span></p>
                        <strong>Khách hàng: </strong> <span style="color: orangered;"><?php echo $showtb["ho_ten"]?></span> <br>
                        <strong>Ngày xem nhà: </strong> <span style="color: orangered;"><?php echo date_format(date_create($showtb['ngay_xem']), "d/m/yy")?></span> <br>
                        <strong>Ngày đặt: </strong> <span style="color: black;"><?php echo date_format(date_create($showtb['ngay_dat']), "d/m/yy")?></span> <br>
                        <strong>Số điện thoại: </strong> <span style="color: black;">0<?php echo $showtb['sdt']?></span>  
                        </div>
                    </div>
                     <?php   
                    
                } 
                ?>
            
      