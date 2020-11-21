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
                    <img src="./uploaded/logo.png" alt="">
                </div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="index.php">Trang chủ </a> </li>
                        <li><a href="#">Dịch vụ </a></li>
                        <li><a href="?ctrl=home&act=danhsach">Danh sách nhà thuê</a> </li>
                        <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                        <li><a href="#">Liên hệ </a></li>
                        <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px; color: rgb(255, 255, 255) !important;">Đăng tin</a></li>
                        <?php if (isset($_SESSION['user']) == true) { ?>
                            <li><a href="#" onclick="toogle()"><?= $_SESSION['user'] ?></a>
                                <ul class="sub-menu">
                                    <li><a href="?act=thongtintk">Thông tin tài khoản</a></li>
                                    <li><a href="">Đổi mật khẩu</a></li>
                                    <li><a href="">Căn hộ cửa tôi</a></li>
                                    <li><a href="?act=dangxuat&logout=1">Đăng xuất</a></li>
                                </ul>
                            </li>
                        <?php } else { ?>
                            <li><a href="?ctrl=home&act=dangnhap">Đăng nhập</a></li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
            <div class="menutimkiem w-100  position-relative">
                <a href="#" onclick="showtimkiem()" id="an">Tìm kiếm <i class="fa fa-search"></i></a>
                <a href="#" onclick="exit()" id="hien">Tìm kiếm <i class="fa fa-close"></i></a>
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
                                        <option value="">Quận/Huyện</option>
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
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value=""><?=$i?></option>
                                            <?php
                                        }?>
                                    </select>
                                </div>
                                <div class="col-3">
                                <select name="" id="" class="select1 ">
                                        <option value="">Số phòng ngủ</option>
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value=""><?=$i?></option>
                                            <?php
                                        }?>
                                    </select>
                                </div>
                                <div class="col-3">
                                <select name="" id="" class="select1 ">
                                        <option value="">Số phòng vệ sinh</option>
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value=""><?=$i?></option>
                                            <?php
                                        }?>
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
                        <img src="./uploaded/dangtin2.jpg" alt="Los Angeles" width="100%" height="300px">
                    </div>
                    <div class="carousel-item">
                        <img src="./uploaded/banner7.jpg" alt="Chicago" width="100%" height="300px">
                    </div>
                    <div class="carousel-item">
                        <img src="./uploaded/banner8.jpg" alt="New York" width="100%" height="300px">
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
            <h3>ĐĂNG TIN CĂN HỘ</h3>
            <form action="" class="formdangtin">
                <div class="row thongtincan">
                    <h4 class="w-75 ml-5">* Thông tin căn hộ</h4>
                    <div class="col-6 ml-5">
                        <h4>Loại hình giao dịch</h4>
                        <div class="row">
                            <div class="col-12 " style="font-size: 12pt; float: left; margin-bottom: 20px; margin-top: 20px;">
                                <input type="radio" class="mr-3" checked>
                                <label for="">Cho thuê</label>
                            </div>

                            <div class="col-6">
                                <label for="">Giá thuê (Tháng)</label><br>
                                <input type="number" class="form-control w-100" placeholder="Giá thuê hàng tháng">
                            </div>
                            <div class="col-3">
                                <label for="">Đơn vị tiền tệ</label><br>
                                <select name="" id="" class="form-control w-100">
                                    <option value="">VND</option>
                                </select>
                            </div>
                            <div class="col-12" style="margin: 20px 0px;">
                                <label for="">Tiêu đề cho thuê</label><br>
                                <input type="text" name="" id="" class="form-control w-75">
                            </div>
                            <div class="col-12" style="margin: 20px 0px;">
                                <label for="">Chi phí khác</label><br>
                                <textarea name="noi_dung" id="" cols="60" rows="2" placeholder="Nội dung "></textarea>
                            </div>
                            <div class="col-12" style="margin: 20px 0px;">
                                <label for="">Các tiện ích xung quanh căn hộ</label><br>
                                <textarea name="noi_dung" id="" cols="60" rows="5" placeholder="Nội dung "></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <h4>*Loại căn hộ</h4>
                        <div class="row" style="margin: 20px 0px;">
                            <div class="col-6">
                                <input type="radio" class="mr-3" checked>
                                <label for="">Chung cư / căn hộ</label>
                            </div>
                            <div class="col-6">
                                <input type="radio" class="mr-3">
                                <label for="">Nhà riêng</label>
                            </div>
                            <div class="col-12" style="margin: 20px 0px;">
                                <h4>Địa chỉ căn hộ</h4>
                                <div class="row">
                                    <div class="col-6">
                                        <select name="" class="form-control" id="">
                                            <option value="">TP Hồ Chí Minh</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <select name="" class="form-control" id="">
                                            <option value="">Quận / Huyện</option>
                                            <option value="">Quận 1</option>
                                            <option value="">Quận 2</option>
                                        </select>
                                    </div>
                                    <div class="col-6" style="margin: 20px 0px;">
                                        <label for="">Địa chỉ cụ thể</label>
                                        <input type="text" name="" class="form-control" id="">
                                    </div>
                                    <div class="col-6" style="margin: 20px 0px;">
                                        <label for="">Hướng nhà</label>
                                        <input type="text" name="" class="form-control" id="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <h4>Địa chỉ căn hộ</h4>
                                <div class="row">
                                    <div class="col-6" style="margin: 20px 0px;">
                                        <label for="">Số phòng ngủ</label>
                                        <input type="text" name="" class="form-control" id="">
                                    </div>
                                    <div class="col-6" style="margin: 20px 0px;">
                                        <label for="">Phòng vệ sinh</label>
                                        <input type="text" name="" class="form-control" id="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <h4>Hình căn hộ</h4>
                                <div class="row">
                                    <div class="col-6 anh">
                                        <input type="file" class="form-control" style="overflow: hidden;">
                                        <!-- <label for="" class="w-100 tailen">Tải ảnh lên <i class="fa fa-upload"></i></label> -->
                                    </div>
                                    <div class="col-6">
                                        <input type="file" class="form-control" style="overflow: hidden;">
                                    </div>
                                    <div class="col-6 mt-5">
                                        <input type="file" class="form-control" style="overflow: hidden;">
                                    </div>
                                    <div class="col-6 mt-5">
                                        <input type="file" class="form-control" style="overflow: hidden;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="checkbox" class="ml-5"> <label for="">Tôi đồng ý với các điều khoản giao dịch</label><br>
                <button>Gửi thông tin</button>
            </form>
        </div>
        <div class="dichvu">

            <img src="./uploaded/dichvu.jpg" alt="">
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
            <img src="./uploaded/logo.png" alt="">
            <p>Golden công ty dịch vụ BĐS hiện đại, cung cấp nguồn bất động sản an toàn, 100% được thẩm định pháp lý cho người dùng có nhu cầu mua, bán và thuê BĐS.</p>
            <p>Tầng 4, Tòa nhà Flemington, 182 Lê Đại Hành, Phường 15, Quận 11, TP. Hồ Chí Minh</p>
        </div>
        <div class="box4 b2">
            <div class="tieude4">
                <h4>Danh sách thuê nhà</h4>
            </div>
            <div class="textquan">
                <div class="quan1 l1">
                    <P>Quận 1</P>
                    <P>Quận 2</P>
                    <P>Quận 3</P>
                    <P>Quận 4</P>
                    <P>Quận 5</P>
                    <P>Quận 6</P>
                    <P>Quận 7</P>
                    <P>Quận 8</P>
                    <P>Quận 9</P>
                    <P>Quận 10</P>
                </div>
                <div class="quan1 l2">
                    <P>Quận 11</P>
                    <P>Quận 12</P>
                    <P>Quận Bình Thạnh</P>
                    <P>Quận Phú Nhuận</P>
                    <p>Quận Tân Bình</p>
                    <p>Quận Tân Phú</p>
                    <p>Quận Bình Tân</p>
                    <p>Huyện Nhà Bè</p>
                    <p>Huyện Hóc Môn</p>
                    <p>Huyện Bình Chánh</p>
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