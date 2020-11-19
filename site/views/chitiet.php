<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang chủ</title>
    <link rel="stylesheet" href="./views/css/chitiet.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</head>

<body>
    <!-- <div class="menu">
        <div class="banner">
            <img src="../site/img/banner9.jpg" width="100%" height="600px" alt="">
        </div>
        <nav class="menu-logo">
            <div class="menu-logo-bg">
                <div class="nav-logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="#">Trang chủ </a> </li>
                        <li><a href="#">Dịch vụ </a></li>
                        <li><a href="#">Danh sách </a> </li>
                        <li><a href="#">Giới thiệu </a></li>
                        <li><a href="#">Liên hệ </a></li>
                        <li><a href="#">Đăng nhập </a></li>
                        <li><a href="#" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div> -->
    <nav class="hienra">
            <div class="menu-logo-bg">
                <div class="nav-logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="nav-menu2">
                    <ul>
                        <li><a href="index.php">Trang chủ </a> </li>
                        <li><a href="#">Dịch vụ </a></li>
                        <li><a href="?ctrl=home&act=danhsach">Danh sách </a> </li>
                        <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                        <li><a href="#">Liên hệ </a></li>
                        <li><a href="?act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                        <?php if (isset($_SESSION['user']) == true) { ?>
                            <li><a onclick="toogle()" href='#'><?= $_SESSION['user'] ?></a>
                                <ul class="sub-menu">
                                    <li><a href="?act=thongtintk">Thông tin tài khoản</a></li>
                                    <li><a href="">Đổi mật khẩu</a></li>
                                    <li><a href="">Căn hộ cửa tôi</a></li>
                                    <li><a href="?act=dangxuat&logout=1">Đăng xuất</a></li>
                                </ul>
                            </li>
                        <?php } else { ?>
                            <li><a href="?act=dangnhap">Đăng nhập</a></li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        </nav>
    <!-- đây là phần show sản phẩm lên có hình ảnh và có tên,giá,id -->
    <div id="wrapper" style="margin-top: 100px;">
        <div class="item1">
            <div class="box-slideshow"><p>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="../img/b1.jpg" alt="First slide" style="width:100%;" height="500px">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="../img/b2.jpg" alt="Second slide" style="width:100%;" height="500px">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="../img/b3.jpg" alt="Third slide" style="width:100%;" height="500px">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
            </p></div>
            <!-- thông tin nhà cửa như báo giá,độ lớn độ dài -->
            <div class="thongtin">
                <div class="tatcatt">
                    <p class="txt1" style="font-family: 'Noto Sans JP', sans-serif;">BÁN NHÀ HẺM ĐỖ QUANG ĐẨU QUẬN 1</p>
                    <p class="txt2">Phường Phạm Ngũ Lão | Quận 1</p>
                    <div class="btn-tt">
                        <!-- <button class="button-cs1"><p class="txt3">Bán</p></button>
                        <button class="button-cs2"><p class="txt3">Đã Thẩm Định</p></button>
                        <button class="button-cs3"><p class="txt3">ID 277418</p></button> -->
                      <label for="" class="label1">Bán</label>
                      <label for="" class="label2">Đã thẩm định</label>
                      <label for="" class="label3">ID 277418</label>
                    </div>
                    <p class="txt3">2,1 tỷ - 12,4m²</p>
                    <p class="txt4">Giá : 173,4 triệu/m²</p>
                </div>
                <div class="btn">
                    <div ><button class="btn1">LƯU <img src="../trangchitiet/img/download.svg" alt="" width="15px" height="15px" color="#ef7733"></button></div>
                    <div ><button class="btn1">CHIA SẺ <img src="../trangchitiet/img/share.svg" alt="" width="15px" height="15px" color="#ef7733"</button></div>
                    <div ><button class="btn1">VỊ TRÍ <img src="../trangchitiet/img/pin.svg" alt="" width="15px" height="15px" color="#ef7733"</button></div>
                </div>
            </div>
            <!-- phần giới thiệu nhà -->
            <div class="gioithieu-tuvan ">
                <div class="gioithieu ">
                    <h3 class="txt8">Giới thiệu</h3>
                    <p class="txt5">Bán nhà hẻm đường Đỗ Quang Đẩu, khu vực an tĩnh, Quận 1.</p>
                    <p class="txt6">
                       <ul class="ul" class="padding">
                           <li>Hướng: T.Nam</li>
                           <li>Phòng ngủ: 2</li>
                           <li>Phòng tắm: 1</li>
                           <li>Tầng: 1 trệt, 1 lửng + 1 lầu</li>
                           <li>Giấy tờ: Sổ hồng</li>
                           <li>Chiều dài: 3.85m</li>
                           <li>Hẻm: 1.5m</li>
                       </ul>
                    </p>
                </div>
                <div class="tuvan ">
                    <div class="div-text"><p>Đăng ký tư vấn</p></div>
                    <form action="#" method="post" class="form-tuvan">
                        <div class="fiel">
                            <input type="text" name="" id="" placeholder="Nhập tên của bạn">
                        </div>
                        <div class="fiel">
                            <input type="email" name="" id="" placeholder="Nhập Email">
                        </div>
                        <div class="fiel">
                            <input type="number" name="" id="" placeholder="Nhập Số Điện Thoại">
                        </div>
                        <div class="fiel">
                            <input type="date" name="" id="" placeholder="">
                        </div>
                        <div class="fiel-sub">
                            <input type="submit" value="Đặt lịch xem">
                        </div>
                    </form>
                </div>
            </div>
            <!-- thông tin chi tiết hơn -->
            <div class="ttct">
                <h3 class="txt9">Thông tin chi tiết</h3>
                <p class="txt7">
                    Diện tích nhà ngang 3.05m x  dài 3.85m, tổng diện tích sử dụng 25m vuông <br>
                    Kết cấu Nhà gồm 1 trệt 1 lững 1 lầu, 2 phòng ngủ, 1 nhà vệ sinh. Hẻm trước nhà 1.5m. có eo hẻm 1m, <br>
                    Giao thông thuận lợi.tiện di chuyển ra trung tâm quận 1 khu thương mại, chợ Bến Thành, các công ty văn phòng..., hay có thể di chuyển sang các quận lân cận như q3,q4,bình thạnh ,,,,

                    Khu vực: an ninh KHÔNG phức tạp, trộm cắp. Gần khu sầm uất, 

                    Ngoài mặt tiền đường có đầy đủ tiện ích ăn uống, ATM, ngân hàng, siêu thị mini

                    - Sổ hồng chính chủ,Mua vào ở ngay giao dịch an toàn, minh bạch
                </p>
            </div>
        </div>
        <div class="item2">
            <div class="form-timkiem">
                <div class="div-text"><p>TÌM NHANH</p></div>
                <form action="#" method="post" class="tim-kiemm">
                  <label for="" class="form-txt">Loại BĐS :</label>
                  <div class="div">
                      <select name="" id="">
                          <option value="" checked>Nhà Riêng</option>
                          <option value="">Đất Nền</option>
                          <option value="">Chung Cư/Căn Hộ</option>
                          <option value="">Đất Nền Dự Án</option>
                      </select>
                  </div>
                  <div class="div">
                    <select name="" id="">
                        <option value="" checked>Hồ Chí Minh</option>
                    </select>
                  </div>
                  <div class="div">
                    <select name="" id="">
                        <option value="" checked>Quận 1</option>
                        <option value="">Quận 2</option>
                        <option value="">Quận 3</option>
                        <option value="">Quận 4</option>
                        <option value="">Quận 5</option>
                        <option value="">Quận 6</option>
                        <option value="">Quận 7</option>
                        <option value="">Quận 8</option>
                        <option value="">Quận 9</option>
                        <option value="">Quận 10</option>
                        <option value="">Quận 11</option>
                        <option value="">Quận 12</option>
                        <option value="">Quận Gò Vấp</option>
                    </select>
                  </div>
                  <div class="sub">
                      <input type="submit" value="Tìm nhanh">
                  </div>
                </form>
            </div>
        </div>
    </div>
    <!-- dịch vụ khác của Golden Home -->
    <div class="dichvukhac">
        <div class="img-bg">
            <img src="../img/bg-apertment.jpg" alt="">
            <div class="font">
                <p class="text">DỊCH VỤ NỔI BẬT CỦA PROPZY</p>
            </div>
            <div class="container">
                <div class="team7">
                    <div class="icon">
                        <img src="../trangchitiet/img/home.svg" alt="" width="50px" height="30px">
                    </div>
                    <div class="gui">
                        <div class="hypert-text">
                            <p class="text-cuoi">
                                Đăng Bán và Cho Thuê Miễn Phí
                            </p >
                            <p class="text-cuoi">
                                Tiếp cận khách hàng sẵn có, quảng cáo tin đăng
                                miễn phí</p>
                        </div>
                        <div class="submit">
                           <label for="" class="label-end"><a href="#"  style="color: white;font-size: 10pt;">Đăng tin ngay</a></label>
                        </div>
                    </div>
                </div>
                <div class="team7">
                    <div class="icon">
                        <img src="../trangchitiet/img/home2.svg" alt="" width="50px" height="30px">
                    </div>
                    <div class="gui">
                        <div class="hypert-text">
                           <p class="text-cuoi">Tìm Mua và Thuê Như Ý</p>
                           <p class="text-cuoi">
                            Tìm kiếm theo tiêu chí, đảm bảo an toàn pháp lý</p>
                        </div>
                        <div class="submit">
                            <label for="" class="label-end"><a href="#" style="color: white;font-size: 10pt;">Liên hệ ngay</a></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    <!-- Footer Golden Home -->
   
        <div class="divcuoi">
            <span> 2020 © Bản quyền GoldenHome. Đã đăng ký Bản quyền.</span>
        </div>
</body>
</html>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>