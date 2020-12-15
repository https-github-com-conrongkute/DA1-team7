<div class="right__title">Bảng căn hộ</div>
<p class="right__desc">Sửa căn hộ</p>
<div class="right__formWrapper">
    <form action="/admin/?ctrl=can_ho&act=update" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tiêu đề cho thuê</label>
            <input type="text" name="ten_can_ho" id="ten_can_ho" value="<?=$ds["ten_can_ho"]?>">
        </div>
        <div class="row">
                  <!-- Loại căn -->
        <div class="col-4">
          <label for="exampleInputEmail1">Loại căn hộ</label>
          <select name="ma_loai" class="form-control" id="">
                    <?php foreach($row as $row) {?>
                    <option value="<?=$row["ma_loai"]?>" <?php if($ds["ma_loai"]==$row["ma_loai"]) echo "selected";?>><?=$row["ten_can"]?></option>
                    <?php }?>
          </select>
          </div>
          <!-- Quận -->
          <div class="col-4">
          <label for="exampleInputEmail1">Quận</label>
          <select name="ma_quan" class="form-control" id="quan">
                    <?php foreach($quan as $quan) {?>
                    <option value="<?=$quan["ma_quan"]?>" <?php if($ds["ma_quan"]==$quan["ma_quan"]) echo "selected";?>><?=$quan["ten_quan"]?></option>
                    <?php }?>
          </select>
          </div>
          <div class="col-4">
          <label for="exampleInputEmail1">Phường</label>
          <select name="ma_phuong" class="form-control" id="phuong">
          <?php
          $phuong=getphuongbyid($ds["ma_quan"]);
           foreach($phuong as $phuong) {?>
                    <option value="<?=$phuong["id"]?>" <?php if($ds["id"]==$phuong["id"]) echo "selected";?>><?=$phuong["phuong"]?></option>
                    <?php }?>
          </select>
          </div>
          </div>
          <div class="row">
          <div class="col-6">
          <label for="exampleInputPassword1">Địa chỉ</label>
          <input type="text" class="form-control" name="dia_chi" id="dia_chi" value="<?=$ds["dia_chi"]?>">
          </div>
          <div class="form-group col-6">
        <label for="nam_xd">Năm xây dựng</label>
        <select name="nam_xd" class="form-control">
            <?php 
            $year = date('Y');
            $min = $year - 100;
            $max = $year;
            for( $i=$max; $i>=$min; $i-- ) {
                ?>
            <option value="<?=$i?>" <?php if($ds["nam_xd"]==$i) echo "selected";?>><?=$i?></option>;
                <?php
            } 
            ?>
        </select>
        </div>
          </div>
          <div class="row">
        <div class="col-6">
            <label for="title">Diện thích căn hộ (m2)</label>
            <input type="number" name="dien_tich" class="form-control" id="dien_tich" value="<?=$ds["dien_tich"]?>">
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Số Tầng</label>
            <input type="number" name="tang" class="form-control" id="tang" value="<?=$ds["tang"]?>">
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <!-- Phòng ngủ và vệ sinh -->
        <div class="row">
        <div class="col-6">
            <label for="title">Số phòng ngủ</label>
            <input type="number" name="so_phong_ngu" class="form-control" value="<?=$ds["so_phong_ngu"]?>" >
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Số phòng vệ sinh</label>
            <input type="number" name="so_phong_vs" class="form-control" id="so_phong_ngu" value="<?=$ds["so_phong_vs"]?>" >
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <div class="row">
        <div class="col-6">
            <label for="title">Giá thuê</label>
            <input type="number" name="gia_thue" class="form-control" id="gia_thue" value="<?=$ds["gia_thue"]?>">
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Các chi phí khác</label>
            <textarea name="chi_phi_khac" id="" class="form-control" cols="30" rows="2"  ><?=$ds["chi_phi_khac"]?></textarea>
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <div class="row">
        <div class="col-6">
            <label for="title">Hướng nhà</label>
            <select name="huong_nha" class="form-control" id="huong_nha">
                                            <option value="1" <?php if($ds["huong_nha"]== 1) echo "selected";?>>Đông</option>
                                            <option value="2" <?php if($ds["huong_nha"]== 2) echo "selected";?>>Tây</option>
                                            <option value="3" <?php if($ds["huong_nha"]== 3) echo "selected";?>>Nam</option>
                                            <option value="4" <?php if($ds["huong_nha"]== 4) echo "selected";?>>Bắc</option>
                                            <option value="5" <?php if($ds["huong_nha"]== 5) echo "selected";?>>Tây Bắc</option>
                                            <option value="6" <?php if($ds["huong_nha"]== 6) echo "selected";?>>Tây Nam</option>
                                            <option value="7" <?php if($ds["huong_nha"]== 7) echo "selected";?>>Đông Bắc</option>
                                            <option value="8" <?php if($ds["huong_nha"]== 8) echo "selected";?>>Đông Nam</option>
                                        </select>
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Ghi chú</label>
            <input type="text" name="ghi_chu" class="form-control" id="ghi_chu" value="<?=$ds["ghi_chu"]?>">
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">Hình căn hộ</div>
            <div class="col-6">
            <label for="file"><i class="fas fa-upload"></i> Tải hình 1</label><br>
            <input type="file" name="hinh" id="file" class="form-control" /> 
            </div>
            <div class="col-6">
            <label for="file"><i class="fas fa-upload"></i> Tải hình 2</label><br>
            <input type="file" name="hinha" id="file" class="form-control" />
            </div>
        </div>
        <div class="row">
                  <div class="col-6"><img src="../uploaded/<?php if($ds["hinh"]!="") echo $ds["hinh"]; else echo "no-img.png";?>" style="width: 15%;" alt=""></div>
                  <div class="col-6"><img src="../uploaded/<?php if($ds["hinha"]!="") echo $ds["hinha"]; else echo "no-img.png";?>" style="width: 15%;" alt=""></div>
        </div>
        <div class="row mt-3 mb-2">
            <div class="col-6">
            <label for="file"><i class="fas fa-upload"></i> Tải hình 3</label><br>
            <input type="file" name="hinhb" id="file" class="form-control" />
            </div>
            <div class="col-6">
            <label for="file"><i class="fas fa-upload"></i> Tải hình 4</label><br>
            <input type="file" name="hinhc" id="file" class="form-control" />
            </div>
        </div>
        <div class="row">
                  <div class="col-6"><img src="../uploaded/<?php if($ds["hinhb"]!="") echo $ds["hinhb"]; else echo "no-img.png";?>" style="width: 15%;" alt=""></div>
                  <div class="col-6"><img src="../uploaded/<?php if($ds["hinhc"]!="") echo $ds["hinhc"]; else echo "no-img.png";?>" style="width: 15%;" alt=""></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Các tiện ích</label>
            <textarea name="noi_dung" id="" cols="30" rows="3" ><?=$ds["tien_ich"]?></textarea>
            <!-- <span id="email"></span> -->
        </div>

        <div class="radion" style="width: 100%;float: left;height:80px;">
            <label for="title" style="font-weight: 700;">Ẩn hiện</label><br>
            <label for="" style="margin-right: 10px;"><input type="radio" name="an_hien" id="" style="margin-right: 5px;" value="1" <?php if($ds["an_hien"]==1) echo "checked";?>>Hiện</label>
            <label for=""><input type="radio" name="an_hien" id="" style="margin-right: 5px;" value="0" <?php if($ds["an_hien"]==0) echo "checked";?>>Ẩn</label>
        </div>
        <input type="hidden" name="ma_can" value="<?=$ds["ma_can"]?>">
        <input type="hidden" name="hinh1" value="<?=$ds["hinh"]?>">
        <input type="hidden" name="hinha1" value="<?=$ds["hinha"]?>">
        <input type="hidden" name="hinhb1" value="<?=$ds["hinhb"]?>">
        <input type="hidden" name="hinhc1" value="<?=$ds["hinhb"]?>">
        <button class="btn" type="submit">Sửa căn hộ</button>
    </form>

</div>
<script>
    $(document).ready(function () {
        $('#quan').change(function (e) { 
            quan = $('#quan').val(); 
            $.post("?ctrl=can_ho&act=phuong", {'quanid': quan},
                function (data) {
                    $('#phuong').html(data);
                });
        });
    });
</script>
