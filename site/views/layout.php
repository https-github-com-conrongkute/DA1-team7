<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang chủ</title>
    <link rel="stylesheet" href="./views/css/index.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
</head>

<body>
    <?php if (isset($view) == true) { ?>
        <nav class="hienra">
            <div class="menu-logo-bg">
                <div class="nav-logo">
                    <img src="../uploaded/logo.png" alt="">
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
    <?php } else { ?>
        <div class="menu">
            <div class="banner">
                <img src="../uploaded/banner9.jpg" width="100%" height="600px" alt="">
            </div>
            <nav class="menu-logo">
                <div class="menu-logo-bg">
                    <div class="nav-logo">
                        <img src="../uploaded/logo.png" alt="">
                    </div>
                    <div class="nav-menu">
                        <ul>
                            <li><a href="index.php">Trang chủ </a> </li>
                            <li><a href="#">Dịch vụ </a></li>
                            <li><a href="?ctrl=home&act=danhsach">Danh sách </a> </li>
                            <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                            <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                            <?php if (isset($_SESSION['user']) == true) { ?>
                                <li><a onclick="toogle()" onclick="toogle()" href="#"><?= $_SESSION['user'] ?> <i class="fa fa-caret-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="?act=thongtintk&ma_tk=<?=$_SESSION['id']?>">Thông tin tài khoản</a></li>
                                        <li><a href="">Đổi mật khẩu</a></li>
                                        <li><a href="">Căn hộ cửa tôi</a></li>
                                        <li><a href="?ctrl=home&act=dangxuat&logout=1">Đăng xuất</a></li>
                                    </ul>
                                </li>
                            <?php } else { ?>
                                <li><a href="?ctrl=home&act=dangnhap">Đăng nhập</a>
                                </li>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- <div class="nav">
            <div class="navimg">
                <img src="../uploaded/logo.png" width="140px" alt="">
            </div>
            <div class="navmenu">
                <ul>
                    <li><a href="#">Trang chủ </a> </li>
                    <li><a href="#">Dịch vụ </a></li>
                    <li><a href="#">Danh sách </a> </li>
                    <li><a href="#">Giới thiệu </a></li>
                    <li><a href="#">Liên hệ </a></li>
                    <li><a href="?ctrl=home&act=danhnhap">Đăng nhập </a></li>
                    <li><a href="#">Đăng tin</a></li>
                </ul>
            </div>
        </div> -->

            <div class="navtext">
                <h1 style="text-shadow: 2px 2px 2px black;">THUÊ CĂN HỘ SIÊU TỐC</h1>
                <p>Hơn 16.000 nhà riêng, chung cư, căn hộ đang cho thuê. Cam kết luôn có 10 <br> căn hộ trong 48 giờ.</p>
            </div>
            <div class="dangky">
                <h3>Đăng ký tìm nhà siêu tốc !</h3>
                <input type="text" placeholder="Họ và tên">
                <input type="text" placeholder="Email">
                <input type="text" placeholder="Số điện thoại">
                <input class="submit" type="submit" value="Tham gia ngay">
            </div>
            <div class="dangky2">
                <div class="text1">
                    <h2>Tại sao nên chọn chúng tôi ?</h2>
                </div>
                <div class="text2">
                    <div class="box1">
                        <div class="icon1">
                            <img src="../uploaded/fast.png" alt="">
                        </div>
                        <a href="#">Tận tâm</a>
                        <p>Golden luôn đồng <br> hành, hỗ trợ mọi vấn <br> đề mọi lúc trong thời <br> gian ngắn nhất.</p>
                    </div>
                    <div class="box1">
                        <div class="icon1">
<<<<<<< HEAD
                            <img src="../uploaded//guard.png" alt="">
=======
                            <img src="../uploaded/guard.png" alt="">
>>>>>>> fa99b1fcd2d1e15fac55b01f1b8d0c103d87861c
                        </div>
                        <a href="#">Đáng tin cậy</a>
                        <p>Tất cả nhà thuê <br> chính chủ, không trung <br> gian, cam kết an <br> tâm khi thuê.</p>
                    </div>
                    <div class="box1">
                        <div class="icon1">
                            <img src="../uploaded/like.png" alt="">
                        </div>
                        <a href="#">Dịch vụ miễn phí</a>
                        <p>Dịch vụ tìm nhà <br> và dẫn đi xem hoàn <br> toàn miễn phí.</p>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
    <?php if (isset($view) == true) {
        require_once $view;
    } else { ?>
        <div class="danhsach " >
            <div class="tieude">
                <h3 style="font-weight: bold; color: orange;color:black;">DANH SÁCH</h3>
                <h2 style="font-size: 30pt;">Nhà cho thuê nhiều nhất</h2>
            </div>
            <div class="loc-canho">
                <select name="" id="" class="select">
                    <option value="">Giá từ thấp đến cao</option>
                    <option value="">Giá từ cao đến thấp</option>
                    <option value="">Mới nhất</option>
                </select>
                <select name="" id="" class="select">
                    <option value="">Mức giá</option>
                    <option value="">Dưới 3 triệu</option>
                    <option value="">3 triệu - 5 triệu</option>
                    <option value="">5 triệu - 8 triệu</option>
                    <option value="">8 triệu - 10 triệu</option>
                    <option value="">10 triệu - 15 triệu</option>
                    <option value="">15 triệu - 20 triệu</option>
                    <option value="">Trên 20 triệu</option>
                </select>
                <select name="" id="" class="select">
                    <option value="">Loại căn hộ</option>
                    <option value="">Chung cư</option>
                    <option value="">Nhà ở</option>
                </select>
                <select name="" id="" class="select">
                    <option value="">Tp. Hồ Chí Minh</option>
                </select>
                <button class="btn-loc"><i class="fas fa-search"></i></button>
            </div>
            <div class="boxcenter">
                <div class="canho slider1">
<<<<<<< HEAD
                    <div class="box2">
=======
                    <div class="box2" >
>>>>>>> fa99b1fcd2d1e15fac55b01f1b8d0c103d87861c
                        <img src="../uploaded/b1.jpg" alt="">
                        <div class="box2text">
                            <a data-toggle="modal" data-target="#myModal" href="#">Cho thuê phòng CHDV quận 4 - không gian đẹp, nội thất đầy đủ.</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a data-toggle="modal" data-target="#datlich" href="#">Đặt lịch xem</a>
                        </div>
                    </div>

                    <div class="box2">
                        <img src="../uploaded/b2.jpg" alt="">
                        <div class="box2text">
                            <a data-toggle="modal" data-target="#myModal" href="#">Cho Thuê Căn Hộ Chung Cư Tháp Mười Vừa Sửa Sang Mới Đẹp P2 Q6 </a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>
                    <div class="box2">
                        <img src="../uploaded/b3.jpg" alt="">
                        <div class="box2text">
                            <a data-toggle="modal" data-target="#myModal" href="#">Cho thuê căn hộ studio chung cư Vinhomes Grand Park - View hướng Tây Nam</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>
                    <div class="box2">
                        <img src="../uploaded/b3.jpg" alt="">
                        <div class="box2text">
                            <a data-toggle="modal" data-target="#myModal" href="#">Cho thuê căn hộ studio chung cư Vinhomes Grand Park - View hướng Tây Nam</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>
                    <div class="box2" style="margin-right: 30px;">
                        <img src="../uploaded/b3.jpg" alt="">
                        <div class="box2text">
                            <a data-toggle="modal" data-target="#myModal" href="#">Cho thuê căn hộ studio chung cư Vinhomes Grand Park - View hướng Tây Nam</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>

                </div>
                <div class="canho slider2">
                    <div class="box2">
                        <img src="../uploaded/b4.jpg" alt="">
                        <div class="box2text">
                            <a href="#">Cho thuê căn hộ dịch vụ Quận Bình Thạnh - Hẻm Nguyễn Xí</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>
                    <div class="box2">
                        <img src="../uploaded/b5.png" alt="">
                        <div class="box2text">
                            <a href="#">Cho thuê căn hộ dịch vụ - CityLand Park Hill - Quận Gò Vấp</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>
                    <div class="box2">
                        <img src="../uploaded/b6.jpg" alt="">
                        <div class="box2text">
                            <a href="#">Cho thuê Văn Phòng Tầng 5 đường Ung Văn Khiêm - Phường 25 – Bình Thạnh</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>
                    <div class="box2">
                        <img src="../uploaded/b6.jpg" alt="">
                        <div class="box2text">
                            <a href="#">Cho thuê Văn Phòng Tầng 5 đường Ung Văn Khiêm - Phường 25 – Bình Thạnh</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>
                    <div class="box2" style="margin-right: 30px;">
                        <img src="../uploaded/b6.jpg" alt="">
                        <div class="box2text">
                            <a href="#">Cho thuê Văn Phòng Tầng 5 đường Ung Văn Khiêm - Phường 25 – Bình Thạnh</a>
                        </div>
                        <div class="gia">
                            <a href="#" style="color:orange;font-size:18px;"> Giá </a>: 4,000,000 vnđ
                        </div>
                        <div class="datlich">
                            <a href="#">Đặt lịch xem</a>
                        </div>
                    </div>

                </div>
                <div class="xemthem">
                    <a href="?ctrl=home&act=danhsach">Xem thêm </a>
                </div>
            </div>
        </div>
        <div class="gioithieu">
            <img src="../uploaded/gioithieu.jpg" alt="">
            <div class="textgt">
                <h1 style="color: white; font-weight: bold;">Về chúng tôi</h1>
                Đội ngũ chuyên viên tư vấn của chúng tôi với kinh nghiệm dày dặn và nắm vững thị trường sẽ giúp bạn tìm kiếm căn hộ phù hợp với nhu cầu của bạn. Bạn chỉ cần đưa ra thông tin, chúng tôi sẽ tư vấn hỗ trợ bạn tìm ra căn hộ như mình mong muốn. Tùy theo diện
                tích của phòng ngủ rộng hay chật hẹp, có vuông vắn hay không mà chúng ta lựa chọn cách bài trí nội thất và trang trí sao cho phù hợp nhất. Chính vì vậy trước khi bắt tay vào thiết kế phòng ngủ bạn nên nghiên cứu thật kỹ kết cấu và diện tích
                căn phòng để đưa ra ý tưởng Decor hợp lý nhất. Thiết kế phòng ngủ có diện tích nhỏ siêu đẹp: sử dụng các đồ nội thất đa năng để tiết kiệm diện tích vừa mang lại công năng sử dụng tuyệt vời. Chúng ta nên lựa chọn phong cách thiết kế nội thất
                tối giản với 3 tông màu tối đa trong căn phòng.
            </div>
        </div>
        <div class="thuenha">
            <div class="tieude2">
                <h3 style="font-weight: bold;">LÀM SAO</h3>
                <h2>Thuê nhà với Golden Home ?</h2>
            </div>
            <div class="thuenhatext">
                <div class="box3">
                    <div class="box-img">
                        <img src="../uploaded/sale.png" alt="">
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">Điền form đăng ký</a>
                        <p>Để lại SĐT, email để Propzy liên hệ tư vấn</p>
                    </div>
                </div>
                <div class="box3">
                    <div class="box-img">
                        <img src="../uploaded/address.png" alt="">
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">Propzy tìm nhà giúp</a>
                        <p>Golden tìm kiếm nhà thuê theo khu vực và nhu cầu của bạn</p>
                    </div>
                </div>
                <div class="box3">
                    <div class="box-img">
                        <img src="../uploaded/clock.png" alt="">
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">Xem nhà trong vòng 48h</a>
                        <p>Dẫn bạn đi xem nhà trong vòng 48h</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="thuenha">
            <div class="tieude3">
                <h2>Khách hàng nói gì về Golden Home ?</h2>
            </div>
            <div class="thuenhatext slider">
                <div class="box5">
                    <div class="box-img">
                        <img src="../uploaded/avt.PNG" alt="">
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">Selena Gomez</a>
                        <p>“Nếu không thể bán ngay tôi cũng có thể cho thuê đầu tư dài hạn mà không bao giờ sợ lỗ”</p>
                    </div>
                </div>
                <div class="box5">
                    <div class="box-img">
                        <img src="../uploaded/avt.PNG" alt=""> <br>
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">Charlie Puth</a> <br>
                        <p>"Rất ok. Lần sau chắc chắn sẽ ghé lại đây. view đẹp, giá rẻ, ngay trung tâm."
                        </p>
                    </div>
                </div>
                <div class="box5">
                    <div class="box-img">
                        <img src="../uploaded/avt.PNG" alt=""> <br>
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">T-ARA</a> <br>
                        <p>Phòng ốc vị trí thuận lợi , nhân viên tư vấn nhiệt tình</p>
                    </div>
                </div>
                <div class="box5">
                    <div class="box-img">
                        <img src="../uploaded/avt.PNG" alt=""> <br>
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">T-ARA</a> <br>
                        <p>Phòng ốc vị trí thuận lợi , nhân viên tư vấn nhiệt tình</p>
                    </div>
                </div>
                <div class="box5">
                    <div class="box-img">
                        <img src="../uploaded/avt.PNG" alt=""> <br>
                    </div>
                    <div class="thuenhatext-text">
                        <a href="#">T-ARA</a> <br>
                        <p>Phòng ốc vị trí thuận lợi , nhân viên tư vấn nhiệt tình</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tuvan">
            <div class="tuvanimg">
                <img src="../uploaded/banner-f.jpg" width="100%" alt="">
                <div class="tuvantext">
                    <h1>Bạn vẫn chưa tìm được nhà ưng ý?</h1>
                    <p>Còn rất nhiều nhà riêng, căn hộ, chung cư chưa được đăng lên, hãy để Propzy tư vấn chọn
                        <br> giúp bạn!</p>
                    <div class="tuvan2">
                        <a href="#">TƯ VẤN MIỄN PHÍ</a>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
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

    <div class="modal fade" id="myModal" role="dialog">
        <div class="divlon">
            <div class="div1">
                <!-- Modal content-->
                <div class="divimg">
                    <div class="imglon">
                        <img id="images" src="../uploaded/b3.jpg" width="100%" height="280px" alt="">
                    </div>
                    <div class="divnho">
                        <div class="imgnho nho1">
                            <img src="../uploaded/b1.jpg" alt="" onclick="showimages(1)">
                        </div>
                        <div class="imgnho">
                            <img src="../uploaded/b2.jpg" alt="" onclick="showimages(2)">
                        </div>
                        <div class="imgnho">
                            <img src="../uploaded/b4.jpg" alt="" onclick="showimages(3)">
                        </div>
                        <div class="imgnho">
                            <img src="../uploaded/b5.png" alt="" onclick="showimages(4)">
                        </div>
                    </div>
                </div>
                <div class="divtext">
                    <div class="divtext1">
                        <ul>
                            <li>- Chiều dài: </li> <br>
                            <li>- Hẻm: </li> <br>
                            <li>- Phòng ngủ: 2</li> <br>
                            <li>- Hướng: Không xác định </li>
                        </ul>
                    </div>
                    <div class="divtext1">
                        <ul>
                            <li>- Chiều rộng: </li> <br>
                            <li>- Tầng: 2 </li> <br>
                            <li>- Phòng tắm: 1</li> <br>
                            <li>- Giấy tờ: Không có</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="div2">
                <i data-dismiss="modal" class="glyphicon glyphicon-remove"></i>
                <div class="divmota1">
                    <h3>Cho thuê phòng CHDV quận 4 - không gian đẹp, nội thất đầy đủ.</h3>
                    <input class="ipmt" type="submit" value="Thuê">
                    <input class="ipmt2" type="submit" value="Đã thẩm định">
                    <input class="ipmt3" type="submit" value="ID: 234567">

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
                    Giá: <a>4 triệu - 25 m²</a>
                    <input type="button" value="Đặt lịch xem" data-toggle="modal" data-target="#datlich" data-dismiss="modal">
                </div>
            </div>

        </div>
    </div>

    <div class="modal fade dl" id="datlich" role="dialog">
        <div class="divdl">
            <i data-dismiss="modal" class="glyphicon glyphicon-remove"></i>
            <h1>ĐẶT LỊCH XEM</h1>
            <input class="ipdl1" type="text" placeholder="Họ và tên"> <br>
            <input class="ipdl2" type="number" id="sdt" placeholder="Số điện thoại">
            <input class="ipdl3" type="email" placeholder="Địa chỉ Email"> <br>
            <input class="ipdl4" type="date" placeholder="Chọn ngày">

            <div class="guitt">
                <a href="#">GỬI THÔNG TIN</a>
            </div>
        </div>
    </div>
    <div class="divcuoi">
        <span> 2020 © Bản quyền GoldenHome. Đã đăng ký Bản quyền.</span>
    </div>


</body>

</html>
<script src="./views/js/index.js"></script>