<div class="right__title">Bảng căn hộ</div>
<p class="right__desc">Chèn khách hàng</p>
<div class="right__formWrapper">
    <form action="/admin/?ctrl=can_ho&act=insert"  onsubmit = "return validateformedit()" name ="myformedit" method="post" enctype="multipart/form-data">
    <input type="hidden" name="ma_tk" value="<?=$_SESSION["sid"]?>">
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
          <select name="ma_phuong" class="form-control" id="phuong">
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
            <input type="number" name="so_phong_vs" class="form-control" id="so_phong_vs" >
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
            <select name="huong_nha" class="form-control" id="huong_nha">
                                            
                                            <option value="1">Đông</option>
                                            <option value="2">Tây</option>
                                            <option value="3">Nam</option>
                                            <option value="4">Bắc</option>
                                            <option value="5">Tây Bắc</option>
                                            <option value="6">Tây Nam</option>
                                            <option value="7">Đông Bắc</option>
                                            <option value="8">Đông Nam</option>
                                        </select>
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
            <label for="file1" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 25%;" alt=""></label>
            <div class="hinhanh"><img src="#" alt="" id="loadha" class="loadh1" style="display: none;width: 35%; height: 70px; object-fit: cover;"></div>
                                        <script>
                                            // Load hình ảnh lên khi chọn file upload
                                            $(document).ready(function () {
                                                function readURL(input){
                                                    if(input.files && input.files[0]){
                                                    var reader = new FileReader();
                                                    reader.onload = function (e){
                                                        $('#loadha').attr('src', e.target.result);
                                                        $('#loadha').css('display','block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                    }
                                                }
                                                $('#file1').change(function () { 
                                                    readURL(this);
                                                });
                                            });
                                        </script>
            </div>
            <div class="col-6">
            <input type="file" name="hinha" id="file2" style="display: none;" class="form-control" />
            <label for="file2" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 25%;" alt=""></label>
            <div class="hinhanh"><img src="#" alt="" id="loadha1" class="loadh1" style="display: none;width: 35%; height: 70px; object-fit: cover;"></div>
                                        <script>
                                            // Load hình ảnh lên khi chọn file upload
                                            $(document).ready(function () {
                                                function readURL(input){
                                                    if(input.files && input.files[0]){
                                                    var reader = new FileReader();
                                                    reader.onload = function (e){
                                                        $('#loadha1').attr('src', e.target.result);
                                                        $('#loadha1').css('display','block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                    }
                                                }
                                                $('#file2').change(function () { 
                                                    readURL(this);
                                                });
                                            });
                                        </script>
            </div>
        </div>
        <div class="row mt-3 mb-2">
            <div class="col-6">
            <input type="file" name="hinhb" id="file3" style="display: none;" class="form-control" />
            <label for="file3" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 25%;" alt=""></label>
            <div class="hinhanh"><img src="#" alt="" id="loadha2" class="loadh1" style="display: none;width: 35%; height: 70px; object-fit: cover;"></div>
                                        <script>
                                            // Load hình ảnh lên khi chọn file upload
                                            $(document).ready(function () {
                                                function readURL(input){
                                                    if(input.files && input.files[0]){
                                                    var reader = new FileReader();
                                                    reader.onload = function (e){
                                                        $('#loadha2').attr('src', e.target.result);
                                                        $('#loadha2').css('display','block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                    }
                                                }
                                                $('#file3').change(function () { 
                                                    readURL(this);
                                                });
                                            });
                                        </script>
            </div>
            <div class="col-6">
            <input type="file" name="hinhc" id="file4" style="display: none;" class="form-control" />
            <label for="file4" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 25%;" alt=""></label>
            <div class="hinhanh"><img src="#" alt="" id="loadha3" class="loadh1" style="display: none;width: 35%; height: 70px; object-fit: cover;"></div>
                                        <script>
                                            // Load hình ảnh lên khi chọn file upload
                                            $(document).ready(function () {
                                                function readURL(input){
                                                    if(input.files && input.files[0]){
                                                    var reader = new FileReader();
                                                    reader.onload = function (e){
                                                        $('#loadha3').attr('src', e.target.result);
                                                        $('#loadha3').css('display','block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                    }
                                                }
                                                $('#file4').change(function () { 
                                                    readURL(this);
                                                });
                                            });
                                        </script>
            </div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Các tiện ích</label>
            <textarea name="noi_dung"  cols="30" rows="3" id="noi_dung" ></textarea>
            <!-- <span id="email"></span> -->
        </div>

        <div class="radion" style="width: 100%;float: left;height:80px;">
            <label for="title" style="font-weight: 700;">Ẩn hiện</label><br>
            <label for="" style="margin-right: 10px;"><input type="radio" name="an_hien" id="" style="margin-right: 5px;" value="1" checked>Hiện</label>
            <label for=""><input type="radio" name="an_hien" id="" style="margin-right: 5px;" value="0">Ẩn</label>
        </div>
        <input class="btn" name="canho" type="submit" value="Thêm căn hộ">
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
<script>
    function validateformedit() {
    var ten = document.myformedit.ten_can_ho.value;
    var gia = document.myformedit.gia_thue.value;
    var dia_chi = document.myformedit.dia_chi.value;
    var dien_tich = document.myformedit.dien_tich.value;
    var tang = document.myformedit.tang.value;
    var so_phong_ngu = document.myformedit.so_phong_ngu.value;
    var so_phong_vs = document.myformedit.so_phong_vs.value;
    var hinh = document.myformedit.hinh.value;
    var hinha = document.myformedit.hinha.value;
    var hinhb = document.myformedit.hinhb.value;
    var hinhc = document.myformedit.hinhc.value;
    var tien_ich = document.myformedit.noi_dung.value;

    if (ten == null || ten == "" || ten.length < 10) {
        swal("Tiêu đề căn hộ không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    }
    else if (dia_chi == null || dia_chi == "" || dia_chi.length < 10) {
        swal("Địa chỉ không hợp lệ", "Vui lòng nhập lại !", "warning");
        return false;
    
     } else if (Number(dien_tich) < 1) {
        swal("Diện tích không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    } else if (Number(tang) < 0 || tang == "") {
        swal("Số tầng không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    } else if (Number(so_phong_ngu) < 0 || so_phong_ngu == "") {
        swal("Số phòng ngủ hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    }
    
    else if (Number(so_phong_vs) < 0 || so_phong_vs == "") {
        swal("Số phòng vệ sinh không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    }
    else if (Number(gia) < 100000) {
        swal("Giá thuê không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    }
     else if (hinh == null || hinh == "") {
        swal("Bạn chưa tải hình 1", "Vui lòng tải hình !", "warning");
        return false;
    } else if (hinha == null || hinha == "") {
        swal("Bạn chưa tải hình 2", "Vui lòng tải hình !", "warning");
        return false;
    } else if (hinhb == null || hinhb == "") {
        swal("Bạn chưa tải hình 3", "Vui lòng tải hình !", "warning");
        return false;
    } else if (hinhc == null || hinhc == "") {
        swal("Bạn chưa tải hình 4", "Vui lòng tải hình !", "warning");
        return false;
    }
    else if (tien_ich == null || tien_ich == "") {
        swal("Tiện ích rỗng", "Vui lòng nhập lại !", "warning");
        return false;
    } 

}
// onsubmit = "return validateform()" name = "myformedit"

</script>




