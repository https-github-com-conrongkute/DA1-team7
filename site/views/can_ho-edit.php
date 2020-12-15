<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./views/css/dangtin.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"> </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css">
    <title>Đăng tin</title>
</head>

<body>
    <header>
        <div class=" menu1">
            <span class="col-4 right">
                <a href="#" class="col-3"><i class="fa fa-phone">(+84) 978 942 472</i></a>
                <a href="#" class="col-6"><i class="fa fa-envelope">vietnam@goldenhome.com</i></a>
            </span>
        </div>

    </header>
    <div class="conatiner w-100">

        <nav class="menu-logo">
            <div class="menu-logo-bg">
                <div class="nav-logo">
                    <img src="../uploaded/logo.png" alt="">
                </div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="index.php">Trang chủ </a> </li>
                        <li><a href="#">Dịch vụ </a></li>
                        <li><a href="?ctrl=home&act=danhsach&loai_can=1">Danh sách nhà thuê</a> </li>
                        <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                        <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px; color: rgb(255, 255, 255) !important;">Đăng tin</a></li>
                        <?php if (isset($_SESSION['user']) == true) { ?>
                            <li><a href="#" onclick="toogle()"><?= $_SESSION['user'] ?> <i class="fa fa-caret-down"></i></a>
                                <ul class="sub-menu">
                                    <li><a href="?act=thongtintk&ma_tk=<?= $_SESSION['id'] ?>">Thông tin tài khoản</a></li>
                                    <li><a href="?act=doimk&ma_tk=<?= $_SESSION['id'] ?>">Đổi mật khẩu</a></li>
                                    <li><a href="?act=ch-dd&ma_tk=<?= $_SESSION['id'] ?>">Căn hộ của tôi</a></li>
                                    <li><a href="?ctrl=home&act=dangxuat&logout=1">Đăng xuất</a></li>
                                </ul>
                            </li>
                        <?php } else { ?>
                            <li><a href="?ctrl=home&act=dangnhap">Đăng nhập</a></li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
            <div class="menutimkiem w-100  position-relative">
                <span class="anhien" onclick="showtimkiem()" id="an">Tìm kiếm <i class="fa fa-search"></i></span>
                <span class="anhien" onclick="exit()" id="hien">Tìm kiếm <i class="fa fa-close"></i></span>
                <div class="w-100 boxtim position-absolute" id="showtim">
                    <!--Tiềm kiếm ẩn-->
                    <div class="tiemkiemtrong">
                        <h4>Thuê</h4>
                        <form action="" class="formtimkiem">
                            <div class="row mtop">
                                <div class="col-3">
                                    <select name="" id="" class="w-75 select pad">
                                        <option value="">Căn hộ/Chung cư</option>
                                        <option value="">Nhà ở</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="w-100 select pad" placeholder="Nhập địa chỉ để tiềm kiếm căn hộ...">
                                </div>
                                <div class="col-3">
                                    <button class="w-75 select bgcam">Tìm kiếm <i class="fa fa-search"></i></button>
                                </div>
                                <!--Thành phố quận huyện-->

                            </div>
                            <div class="row mtop">
                                <div class="col-3">
                                    <select name="" id="" class="select1 ">
                                        <option value="">Tp Hồ Chí minh</option>

                                    </select></div>
                                <div class="col-3">
                                    <select name="" id="" class="select1 ">
                                        <option value="">Quận</option>
                                        <option value="">Quận 1</option>
                                        <option value="">Quận 2</option>
                                        <option value="">Quận 3</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <select name="" id="" class="select1">
                                        <option value="">Mức giá</option>
                                        <option value="">Dưới 3 triệu</option>
                                        <option value="">3 triệu - 5 triệu</option>
                                        <option value="">5 triệu - 8 triệu</option>
                                        <option value="">8 triệu - 10 triệu</option>
                                        <option value="">10 triệu - 15 triệu</option>
                                        <option value="">15 triệu - 20 triệu</option>
                                        <option value="">Trên 20 triệu</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <select name="" id="" class="select1 ">
                                        <option value="">Diện tích</option>
                                        <option value="">10 - 20 m2</option>
                                        <option value="">20 - 30 m2</option>
                                    </select>
                                </div>

                            </div>
                            <div class="row mtop">
                                <div class="col-3">
                                    <select name="" id="" class="select1 ">
                                        <option value="">Số tầng</option>
                                        <?php for ($i = 1; $i <= 10; $i++) {
                                        ?>
                                            <option value=""><?= $i ?></option>
                                        <?php
                                        } ?>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <select name="" id="" class="select1 ">
                                        <option value="">Số phòng ngủ</option>
                                        <?php for ($i = 1; $i <= 10; $i++) {
                                        ?>
                                            <option value=""><?= $i ?></option>
                                        <?php
                                        } ?>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <select name="" id="" class="select1 ">
                                        <option value="">Số phòng vệ sinh</option>
                                        <?php for ($i = 1; $i <= 10; $i++) {
                                        ?>
                                            <option value=""><?= $i ?></option>
                                        <?php
                                        } ?>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <select name="" id="" class="select1 ">
                                        <option value="">Hướng nhà</option>
                                        <option value="">Đông</option>
                                        <option value="">Tây</option>
                                        <option value="">Nam</option>
                                        <option value="">Bắc</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>




        <!-- slide show banner -->
        <div class=" banner">
            <div id="demo" class="carousel slide" data-ride="carousel">

                <!-- Indicators -->
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <!-- The slideshow -->
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../uploaded/dangtin2.jpg" alt="Los Angeles" width="100%" height="300px">
                    </div>
                    <div class="carousel-item">
                        <img src="../uploaded/banner7.jpg" alt="Chicago" width="100%" height="300px">
                    </div>
                    <div class="carousel-item">
                        <img src="../uploaded/banner8.jpg" alt="New York" width="100%" height="300px">
                    </div>
                </div>

                <!-- Left and right controls -->
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon" style="width: 100%;"></span>
                </a>
            </div>
        </div>
        <div class="dangtin">
            <h3 style="font-family: sans-serif;">ĐĂNG TIN CĂN HỘ</h3>
            <form onsubmit="return validateform()" name="myform" action="?act=update_ch&ma_tk=<?= $_SESSION["id"] ?>" class="formdangtin" method="POST" enctype="multipart/form-data">
                <div class="row thongtincan">
                    <h4 class="w-75 ml-5">* Thông tin căn hộ</h4>
                    <div class="col-6 ml-5">
                        <h4>Loại hình giao dịch</h4>
                        <div class="row">
                            <div class="col-12 " style="font-size: 12pt; float: left; margin-bottom: 20px; margin-top: 20px;">
                                <input type="radio" class="mr-3" checked>
                                <label for="">Cho thuê</label>
                            </div>
                            <div class="col-12" style="margin: 20px 0px;">
                                <label for="">Tiêu đề cho thuê</label><br>
                                <input type="hidden" name="ma_can" value="<?=$can_ho['ma_can']?>">
                                <input type="text" name="ten_can_ho" id="ten" class="form-control w-75" value="<?= $can_ho['ten_can_ho'] ?>">
                            </div>

                            <div class="col-6">
                                <label for="">Giá thuê (Tháng)</label><br>
                                <input type="number" class="form-control w-100" name="gia_thue" placeholder="Giá thuê hàng tháng" value="<?= $can_ho['gia_thue'] ?>">
                            </div>
                            <div class="col-3">
                                <label for="">Đơn vị tiền tệ</label><br>
                                <select name="" id="" class="form-control w-100">
                                    <option value="">VND</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <label for="title">Diện thích căn hộ</label>
                                <input type="number" name="dien_tich" class="form-control" id="dien_tich" placeholder="Diện tích căn hộ m2" value="<?= $can_ho['dien_tich'] ?>">
                                <!-- <span id="email"></span> -->
                            </div>
                            <div class="col-3">
                                <label for="title">Số Tầng</label>
                                <input type="number" name="tang" class="form-control w-100" id="tang" value="<?= $can_ho['tang'] ?>">
                                <!-- <span id="sdt"></span> -->
                            </div>

                            <div class="col-12" style="margin: 20px 0px;">
                                <div class="form-group" style="width: 74%;">
                                    <label for="">Chi phí khác</label><br>
                                    <textarea name="chi_phi_khac" class="form-control" id="" cols="60" rows="4" style="outline: none;" placeholder="Nội dung "><?= $can_ho['chi_phi_khac'] ?></textarea>
                                </div>
                            </div>
                            <div class="col-12" style="margin: 20px 0px;">
                                <div class="form-group" style="width: 74%;">
                                    <label for="">Các tiện ích xung quanh căn hộ</label><br>
                                    <textarea name="tien_ich" id="" class="form-control" cols="60" rows="4" style="outline: none;" placeholder="Nội dung "><?= $can_ho['tien_ich'] ?></textarea>
                                </div>
                            </div>
                            <div class="col-12">

                                <?php if (isset($_SESSION["id"])) {
                                ?>
                                    <button type="submit">Đăng tin</button>
                                <?php
                                } else {
                                ?>
                                    <a href="?ctrl=home&act=dangnhap" style="color: orangered; font-weight: bold;">Bạn cần đăng nhập để có thể đăng tin</a>
                                <?php
                                }
                                ?>
                            </div>

                        </div>

                    </div>
                    <div class="col-5">
                        <h4>*Loại căn hộ</h4>
                        <div class="row" style="margin: 20px 0px;">
                            <div class="col-12">
                                <label for="">Loại căn hộ</label><br>
                                <select name="ma_loai" class="form-control" id="">
                                    <?php foreach ($loaican as $lc) {
                                        if ($lc['ma_loai'] == $can_ho['ma_loai']) {
                                    ?>
                                            <option value="<?= $lc["ma_loai"] ?>" selected><?= $lc["ten_can"] ?></option>
                                        <?php
                                        } else { ?>
                                            <option value="<?= $lc["ma_loai"] ?>"><?= $lc["ten_can"] ?></option>
                                    <?php }
                                    } ?>
                                </select>
                            </div>
                        </div>

                        <div class="col-12" style="margin: 0px 0px;">
                            <h4>Địa chỉ căn hộ</h4>
                            <div class="row">
                                <div class="col-6">
                                    <select name="" class="form-control" id="">
                                        <option value="">TP Hồ Chí Minh</option>
                                    </select>
                                </div>
                                <div class="col-6">
                                    <select name="ma_quan" class="form-control" id="quan">
                                        <option value="">Chọn quận</option>

                                        <?php foreach ($quan as $quan) {
                                            if ($quan['ma_quan'] == $can_ho['ma_quan']) {
                                        ?>
                                                <option value="<?= $quan["ma_quan"] ?>" selected><?= $quan["ten_quan"] ?></option>
                                            <?php } else { ?>
                                                <option value="<?= $quan["ma_quan"] ?>"><?= $quan["ten_quan"] ?></option>
                                        <?php }
                                        } ?>
                                    </select>
                                </div>
                                <div class="col-6" style="margin: 20px 0px;">
                                    <label for="">Phường</label>
                                    <select name="phuong" class="form-control" id="phuong">
                                        <option value="">Chọn phường</option>
                                    </select>
                                </div>
                                <div class="col-6" style="margin: 20px 0px;">
                                    <label for="">Hướng nhà</label>
                                    <select name="huong_nha" class="form-control" id="">
                                        <option value="">Chọn hướng</option>
                                        <option value="1">Đông</option>
                                        <option value="2">Tây</option>
                                        <option value="3">Nam</option>
                                        <option value="4">Bắc</option>
                                        <option value="5">Tây Bắc</option>
                                        <option value="6">Tây Nam</option>
                                        <option value="7">Đông Bắc</option>
                                        <option value="8">Đông Nam</option>
                                    </select>
                                </div>
                                <div class="col-12" style="margin: 10px 0px;">
                                    <label for="">Địa chỉ cụ thể</label>
                                    <input type="text" name="dia_chi" class="form-control" id="" value="<?= $can_ho['dia_chi'] ?>">
                                </div>
                            </div>
                        </div>
                        <div class="col-12">

                            <div class="row">
                                <div class="col-6" style="margin: 20px 0px;">
                                    <label for="">Số phòng ngủ</label>
                                    <input type="number" name="so_phong_ngu" class="form-control" id="" value="<?= $can_ho['so_phong_ngu'] ?>">
                                </div>
                                <div class="col-6" style="margin: 20px 0px;">
                                    <label for="">Phòng vệ sinh</label>
                                    <input type="number" name="so_phong_vs" class="form-control" id="" value="<?= $can_ho['so_phong_vs'] ?>">
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <h4>Hình căn hộ</h4>
                            <div class="row">
                                <div class="col-6 anh">
                                    <input type="file" name="hinh" class="form-control " id="img" style="overflow: hidden; display: none;">
                                    <label for="img" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 30%; margin: 0 auto;" alt=""></label>
                                    <div class="hinhanh"><img src="../uploaded/<?=$can_ho['hinh'] ?>" alt="" id="loadha" class="loadh1" style="width: 35%; height: 70px; object-fit: cover;"><input type="hidden" name="img" value="<?=$can_ho['hinh']?>"></div>
                                    <script>
                                        // Load hình ảnh lên khi chọn file upload
                                        $(document).ready(function() {
                                            function readURL(input) {
                                                if (input.files && input.files[0]) {
                                                    var reader = new FileReader();
                                                    reader.onload = function(e) {
                                                        $('#loadha').attr('src', e.target.result);
                                                        $('#loadha').css('display', 'block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                }
                                            }
                                            $('#img').change(function() {
                                                readURL(this);
                                            });
                                        });
                                    </script>
                                </div>
                                <div class="col-6">
                                    <input type="file" name="hinha" class="form-control " id="img1" style="overflow: hidden; display: none;">
                                    <label for="img1" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 30%; margin: 0 auto;" alt=""></label>
                                    <div class="hinhanh"><img src="../uploaded/<?=$can_ho['hinha'] ?>" alt="" id="loadha1" class="loadh1" style="width: 35%; height: 70px; object-fit: cover;"><input type="hidden" name="imga" value="<?=$can_ho['hinha']?>"></div>
                                    <script>
                                        // Load hình ảnh lên khi chọn file upload
                                        $(document).ready(function() {
                                            function readURL(input) {
                                                if (input.files && input.files[0]) {
                                                    var reader = new FileReader();
                                                    reader.onload = function(e) {
                                                        $('#loadha1').attr('src', e.target.result);
                                                        $('#loadha1').css('display', 'block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                }
                                            }
                                            $('#img1').change(function() {
                                                readURL(this);
                                            });
                                        });
                                    </script>
                                </div>
                                <div class="col-6 mt-5">
                                    <input type="file" name="hinhb" class="form-control " id="img2" style="overflow: hidden; display: none;">
                                    <label for="img2" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 30%; margin: 0 auto;" alt=""></label>
                                    <div class="hinhanh"><img src="../uploaded/<?= $can_ho['hinhb'] ?>" alt="" id="loadha2" class="loadh1" style="width: 35%; height: 70px; object-fit: cover;"><input type="hidden" name="imgb" value="<?=$can_ho['hinhb']?>"></div>
                                    <script>
                                        // Load hình ảnh lên khi chọn file upload
                                        $(document).ready(function() {
                                            function readURL(input) {
                                                if (input.files && input.files[0]) {
                                                    var reader = new FileReader();
                                                    reader.onload = function(e) {
                                                        $('#loadha2').attr('src', e.target.result);
                                                        $('#loadha2').css('display', 'block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                }
                                            }
                                            $('#img2').change(function() {
                                                readURL(this);
                                            });
                                        });
                                    </script>
                                </div>
                                <div class="col-6 mt-5">
                                    <input type="file" name="hinhc" class="form-control " id="img3" style="overflow: hidden; display: none;">
                                    <label for="img3" class="w-100 tailen"><img src="../uploaded/uploadhinh.png" style="width: 30%; margin: 0 auto;" alt=""></label>
                                    <div class="hinhanh"><img src="../uploaded/<?= $can_ho['hinhc'] ?>" alt="" id="loadha3" class="loadh1" style="width: 35%; height: 70px; object-fit: cover;"><input type="hidden" name="imgc" value="<?=$can_ho['hinhc']?>"></div>
                                    <script>
                                        // Load hình ảnh lên khi chọn file upload
                                        $(document).ready(function() {
                                            function readURL(input) {
                                                if (input.files && input.files[0]) {
                                                    var reader = new FileReader();
                                                    reader.onload = function(e) {
                                                        $('#loadha3').attr('src', e.target.result);
                                                        $('#loadha3').css('display', 'block');
                                                    }
                                                    reader.readAsDataURL(input.files[0]);
                                                }
                                            }
                                            $('#img3').change(function() {
                                                readURL(this);
                                            });
                                        });
                                    </script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        </form>
    </div>
    <br>
    <div class="dichvu">

        <img src="../uploaded/dichvu.jpg" alt="">
        <div class="row dichvunew">
            <div class="sdichvu">
                <h4>DỊCH VỤ NỔI BẬT CỦA GOLDENHOME</h4>
                <div class="row">
                    <div class="col-5 " style="background-color: #ef7733; padding: 40px 20px; margin-top: 20px; margin-right: 170px; border-radius: 20px;">
                        <div class="row">
                            <div class="col-3"><i class="fa fa-home" style="font-size:100px;color:white"></i></div>
                            <div class="col-9" style="text-align: left;">
                                <h5 style="color: white; font-weight: bolder;">ĐĂNG TIN VÀ CHO THUÊ MIỄN PHÍ</h5>
                                <p style="color: white;">Tiếp cận khách hàng sẳn có và quảng cáo tin đăng miễn phí</p>
                                <button style="background-color: rgb(1, 62, 167); color: #ffffff; border: none; padding: 10px 40px ; border-radius: 20px;">Đăng tin ngay</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-5 " style="background-color: #ef7733; padding: 40px 20px; margin-top: 20px; border-radius: 20px; ">
                        <div class="row">
                            <div class="col-3"><i class="fa fa-home" style="font-size:100px;color:white"></i></div>
                            <div class="col-9" style="text-align: left;">
                                <h5 style="color: white; font-weight: bolder;">TÌM VÀ THUÊ NHÀ NHƯ Ý</h5>
                                <p style="color: white;">Tìm theo tiêu chí đảm bảo an toàn pháp lý của nhà nước</p>
                                <button style="background-color: rgb(1, 62, 167); color: #ffffff; border: none; padding: 10px 40px ; border-radius: 20px;">Đăng tin ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </div>
    <footer class="footer">
        <div class="box4 b1">
            <img src="../uploaded/logo.png" alt="">
            <p>Golden công ty dịch vụ BĐS hiện đại, cung cấp nguồn bất động sản an toàn, 100% được thẩm định pháp lý cho người dùng có nhu cầu mua, bán và thuê BĐS.</p>
            <p>Tầng 4, Tòa nhà Flemington, 182 Lê Đại Hành, Phường 15, Quận 11, TP. Hồ Chí Minh</p>
        </div>
        <div class="box4 b2">
            <div class="tieude4">
                <h4>Danh sách các quận</h4>
            </div>
            <div class="textquan">
                <div class="quan1 l1">
                    <?php foreach ($quanall as $q) {
                        $stt += 1; ?>
                        <p><a href="?ctrl=home&act=danhsach&ma_quan=<?= $q["ma_quan"]?>"><?= $q["ten_quan"]?></a></p>

                        <?php
                        if ($stt == 10) {
                        ?>
                </div>
                <div class="quan1 l2">
            <?php
                        }
                    } ?>

            <!-- </div>
                <div class="quan1 l2"> -->

                </div>
            </div>
        </div>
        <div class="box4">
            <h4>Đăng ký để biết thêm thông tin từ Golden</h4> <br>
            <input type="text" value="Địa chỉ email"><input class="ip2" type="submit" value="Đăng ký">
        </div>
    </footer>
    <div class="divcuoi">
        <span> 2020 © Bản quyền GoldenHome. Đã đăng ký Bản quyền.</span>
    </div>

    <script src="./views/js/index.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>
<script>
    $(document).ready(function() {
        $('#quan').change(function(e) {
            quan = $('#quan').val();
            $.post("?ctrl=home&act=phuong", {
                    'quanid': quan
                },
                function(data) {
                    $('#phuong').html(data);
                });
        });
    });
</script>

<script>
    function validateform() {
        var ten = document.myform.ten_can_ho.value;
        var gia = document.myform.gia_thue.value;
        var dien_tich = document.myform.dien_tich.value;
        var tang = document.myform.tang.value;
        var tien_ich = document.myform.tien_ich.value;
        var ma_loai = document.myform.ma_loai.value;
        var ma_quan = document.myform.ma_quan.value;

        var phuong = document.myform.phuong.value;
        var dia_chi = document.myform.dia_chi.value;
        var so_phong_ngu = document.myform.so_phong_ngu.value;
        var so_phong_vs = document.myform.so_phong_vs.value;
        var hinh = document.myform.hinh.value;
        var hinha = document.myform.hinha.value;
        var hinhb = document.myform.hinhb.value;
        var hinhc = document.myform.hinhc.value;

        if (ten == null || ten == "" || ten.length < 10) {
            swal("Tiêu đề căn hộ không hợp lệ", "Vui lòng đặt lại !", "warning");
            return false;
        } else if (Number(gia) < 100000) {
            swal("Giá thuê không hợp lệ", "Vui lòng đặt lại !", "warning");

            return false;
        } else if (Number(dien_tich) < 1) {
            swal("Diện tích không hợp lệ", "Vui lòng đặt lại !", "warning");
            return false;
        } else if (Number(tang) < 0 || tang == "") {
            swal("Số tầng không hợp lệ", "Vui lòng đặt lại !", "warning");
            return false;
        } else if (tien_ich == null || tien_ich == "") {
            swal("Tiện ích rỗng", "Vui lòng nhập lại !", "warning");
            return false;
        } else if (ma_loai == null || ma_loai == "") {
            swal("Bạn chưa chọn loại căn", "Vui lòng chọn !", "warning");
            return false;
        } else if (ma_quan == null || ma_quan == "") {
            swal("Bạn chưa chọn quận", "Vui lòng chọn !", "warning");
            return false;
        } else if (phuong == null || phuong == "") {
            swal("Bạn chưa chọn phường", "Vui lòng chọn !", "warning");
            return false;
        } else if (dia_chi == null || dia_chi == "" || dia_chi.length < 10) {
            swal("Địa chỉ không hợp lệ", "Vui lòng nhập lại !", "warning");
            return false;
        } else if (Number(so_phong_ngu) == "" || Number(so_phong_ngu) < 0) {
            swal("Số phòng ngủ không hợp lệ", "warning");
            return false;
        } else if (Number(so_phong_vs) == "" || Number(so_phong_vs) < 0) {
            swal("Số phòng ngủ không hợp lệ", "warning");
            return false;
        }

    }
</script>