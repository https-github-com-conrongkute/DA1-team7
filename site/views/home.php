<?php
foreach ($can_ho as $ch){?>
<div class="box2">
                <img src="uploaded/<?php
                        if(is_file('uploaded/'.$ch['hinh']))
                          echo $ch['hinh'];
                        else
                          echo 'eror.png';
                        ?>" alt="">
                <div class="box2text">
                    <a data-toggle="modal" data-target="#myModal<?=$ch['ma_can']?>" href="#"><?=$ch['ten_can_ho']?></a>
                </div>
                <div class="gia">
                    <a href="#" style="color:orange;font-size:18px;"> Giá </a>: <?=number_format($ch['gia_thue'],0,"",".")?> VNĐ
                </div>
                <div class="datlich">
                    <a data-toggle="modal" data-target="#datlich<?=$ch['ma_can']?>" href="#">Đặt lịch xem</a>
                </div>
            </div>
            <div class="modal fade" id="myModal<?=$ch['ma_can']?>" role="dialog">
        <div class="divlon">
            <div class="div1">
                <!-- Modal content-->
                <div class="divimg">
                    <div class="imglon">
                        <img src="uploaded/<?php
                        if(is_file('uploaded/'.$ch['hinh']))
                          echo $ch['hinh'];
                        else
                          echo 'eror.png';
                        ?>" width="100%" height="280px" alt="">                      
                    </div>
                    <div class="divnho">
                        <div class="imgnho nho1">
                            <img src="uploaded/<?php
                        if(is_file('uploaded/'.$ch['hinh']))
                          echo $ch['hinh'];
                        else
                          echo 'eror.png';
                        ?>" alt="">
                        </div>
                        <div class="imgnho">
                            <img src="uploaded/<?php
                        if(is_file('uploaded/'.$ch['hinha']))
                          echo $ch['hinha'];
                        else
                          echo 'eror.png';
                        ?>" alt="">
                        </div>
                        <div class="imgnho">
                            <img src="uploaded/<?php
                        if(is_file('uploaded/'.$ch['hinhb']))
                          echo $ch['hinhb'];
                        else
                          echo 'eror.png';
                        ?>" alt="">
                        </div>
                        <div class="imgnho">
                            <img src="uploaded/<?php
                        if(is_file('uploaded/'.$ch['hinhc']))
                          echo $ch['hinhc'];
                        else
                          echo 'eror.png';
                        ?>" alt="">
                        </div>
                    </div>
                </div>
                <div class="divtext">
                    <div class="divtext1">
                        <ul>
                            <li>- Chiều dài: </li> <br>
                            <li>- Hẻm: </li> <br>
                            <li>- Phòng ngủ: 2</li> <br>
                            <li>- Hướng: <?=$ch['huong_nha']?> </li>
                        </ul>
                    </div>
                    <div class="divtext1">
                        <ul>
                            <li>- Chiều rộng: </li> <br>
                            <li>- Số Tầng: <?=$ch['tang']?> </li> <br>
                            <li>- Phòng tắm: 1</li> <br>
                            <li>- Giấy tờ: Không có</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="div2">
                <i data-dismiss="modal" class="glyphicon glyphicon-remove"></i>
                <div class="divmota1">
                    <h3><?=$ch['ten_can_ho']?></h3>
                    <input class="ipmt" type="submit" value="Thuê">
                    <input class="ipmt2" type="submit" value="Đã thẩm định">
                    <input class="ipmt3" type="submit" value="ID: <?=$ch['ma_can']?>">

                </div>
                <div class="divmota2">
                    <h4>Thông tin chi tiết</h4>
                    <hr>
                    <p>Cho thuê căn hộ dịch vụ - CityLand Park Hill - Quận Gò Vấp - Diện tích sử dụng:25m2. Gồm 1 phòng ngủ và 1 wc. - Căn hộ mới hoàn thiện. Đang để trống. Full nội thất. - Tọa lạc ngay trung tâm Q.Gò Vấp, tiếp giáp Bình Thạnh, Tân Bình,
                        Q.12, Phú Nhuận và kết nối với hệ thống giao thông huyết mạch.... - Vị trí đẹp, thuận lợi giao thông. Khu dân cư văn minh, cao cấp, an ninh 24/7.
                    </p>
                    <input type="button" value="Xem thêm">
                </div>
                <div class="divmota3">
                    Giá: <a> <?=number_format($ch['gia_thue'],0,"",".")?> VNĐ - <?=$ch['dien_tich']?> m²</a>
                    <input type="button" value="Đặt lịch xem" data-toggle="modal" data-target="#datlich<?=$ch['ma_can']?>" data-dismiss="modal">
                </div>
            </div>

        </div>
    </div>
    <div class="modal fade dl" id="datlich<?=$ch['ma_can']?>" role="dialog">
        <div class="divdl">
            <i data-dismiss="modal" class="glyphicon glyphicon-remove"></i>
            <h1>ĐẶT LỊCH XEM</h1>
            <form action="<?=SITE_URL?>/?act=datlich&ma_can=<?=$ch['ma_can']?>" method="post">
            <input type="hidden" name="idcanho" value="<?=$ch['ma_can']?>">
            <input class="ipdl1" name="hoten" type="text" placeholder="Họ và tên"> <br>
            <input class="ipdl2" name="sdt" type="number" placeholder="Số điện thoại">
            <input class="ipdl3" name="email" type="email" placeholder="Địa chỉ Email"> <br>
            <input class="ipdl4" name="ngay_xem" type="date" placeholder="Chọn ngày">
            <div class="guitt" id="submit">
                <input type="submit" value="GỬI THÔNG TIN">  
            </div>
            </form>
            
        </div>
    </div>
   <?php } ?>