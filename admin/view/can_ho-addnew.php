<div class="right__title">Bảng căn hộ</div>
<p class="right__desc">Chèn khách hàng</p>
<div class="right__formWrapper">
    <form action="<?= ADMIN_URL ?>/?ctrl=can_ho&act=insert" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tiêu đề cho thuê</label>
            <input type="text" name="ten_can_ho" id="ten_can_ho" placeholder="">
        </div>
        <div class="row">
                  <!-- Loại căn -->
        <div class="col-4">
          <label for="exampleInputEmail1">Loại căn hộ</label>
          <select name="ma_loai" class="form-control" id="">
                    <?php foreach($row as $row) {?>
                    <option value="<?=$row["ma_loai"]?>"><?=$row["ten_can"]?></option>
                    <?php }?>
          </select>
          </div>
          <!-- Quận -->
          <div class="col-4">
          <label for="exampleInputEmail1">Quận</label>
          <select name="ma_quan" class="form-control" id="quan">
                    <?php foreach($quan as $quan) {?>
                    <option value="<?=$quan["ma_quan"]?>"><?=$quan["ten_quan"]?></option>
                    <?php }?>
          </select>
          </div>
          <div class="col-4">
          <label for="exampleInputEmail1">Phường</label>
          <select name="ma_quan" class="form-control" id="phuong">
                  <option value="">Chọn phường</option>
          </select>
          </div>
          </div>
          <div class="row">
          <div class="col-6">
          <label for="exampleInputPassword1">Địa chỉ</label>
          <input type="text" class="form-control" name="dia_chi" id="dia_chi">
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
            <option value="<?=$i?>"><?=$i?></option>;
                <?php
            } 
            ?>
        </select>
        </div>
          </div>
          <div class="row">
        <div class="col-6">
            <label for="title">Diện thích căn hộ</label>
            <input type="number" name="dien_tich" class="form-control" id="dien_tich" placeholder="Diện tích căn hộ m2">
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Số Tầng</label>
            <input type="number" name="tang" class="form-control" id="tang">
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <!-- Phòng ngủ và vệ sinh -->
        <div class="row">
        <div class="col-6">
            <label for="title">Số phòng ngủ</label>
            <input type="number" name="so_phong_ngu" class="form-control" id="so_phong_ngu" >
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Số phòng vệ sinh</label>
            <input type="number" name="so_phong_vs" class="form-control" id="so_phong_ngu" >
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <div class="row">
        <div class="col-6">
            <label for="title">Giá thuê</label>
            <input type="number" name="gia_thue" class="form-control" id="gia_thue" >
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Các chi phí khác</label>
            <textarea name="chi_phi_khac" id="" class="form-control" cols="30" rows="2" ></textarea>
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <div class="row">
        <div class="col-6">
            <label for="title">Hướng nhà</label>
            <input type="text" name="huong_nha" class="form-control" id="huong_nha" >
            <!-- <span id="email"></span> -->
        </div>
        <div class="col-6">
            <label for="title">Ghi chú</label>
            <input type="text" name="ghi_chu" class="form-control" id="ghi_chu" placeholder="Đả thuê/Chưa thuê,...">
            <!-- <span id="sdt"></span> -->
        </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">Hình căn hộ</div>
            <div class="col-6">
            <input type="file" name="hinh" id="file1" style="display: none;" class="form-control" />
            <label for="file1"><img src="../uploaded/uploadhinh.png" style="width: 30%;" alt=""></label>
            </div>
            <div class="col-6">
            <input type="file" name="hinh" id="file2" style="display: none;" class="form-control" />
            <label for="file2"><img src="../uploaded/uploadhinh.png" style="width: 30%;" alt=""></label>
            </div>
        </div>
        <div class="row mt-3 mb-2">
            <div class="col-6">
            <input type="file" name="hinh" id="file3" style="display: none;" class="form-control" />
            <label for="file3"><img src="../uploaded/uploadhinh.png" style="width: 30%;" alt=""></label>
            </div>
            <div class="col-6">
            <input type="file" name="hinh" id="file4" style="display: none;" class="form-control" />
            <label for="file4"><img src="../uploaded/uploadhinh.png" style="width: 30%;" alt=""></label>
            </div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Các tiện ích</label>
            <textarea name="noi_dung" id="" cols="30" rows="3" ></textarea>
            <!-- <span id="email"></span> -->
        </div>

        <div class="radion" style="width: 100%;float: left;height:80px;">
            <label for="title" style="font-weight: 700;">Ẩn hiện</label><br>
            <label for="" style="margin-right: 10px;"><input type="radio" name="an_hien" id="" style="margin-right: 5px;" value="1" checked>Hiện</label>
            <label for=""><input type="radio" name="an_hien" id="" style="margin-right: 5px;" value="0">Ẩn</label>
        </div>
        <button class="btn" type="submit">Thêm căn hộ</button>
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

