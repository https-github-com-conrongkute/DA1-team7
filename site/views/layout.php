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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"> </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
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
                        <li><a href="?ctrl=home&act=danhsach&loai_can=1">Danh sách nhà thuê</a> </li>
                        <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                        <li><a href="?act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                        <?php if (isset($_SESSION['user']) == true) { ?>
                            <li><a href='?act=thongtintk&ma_tk=<?= $_SESSION['id'] ?>'><?= $_SESSION['user'] ?></a>
                                <ul class="sub-menu">
                                    <li><a href="?act=thongtintk&ma_tk=<?= $_SESSION['id'] ?>">Thông tin tài khoản</a></li>
                                    <li><a href="?act=doimk&ma_tk=<?= $_SESSION['id'] ?>">Đổi mật khẩu</a></li>
                                    <li><a href="?act=ch-dd&ma_tk=<?= $_SESSION['id'] ?>">Căn hộ của tôi</a></li>
                                    <li><a href="?ctrl=home&act=dangxuat&logout=1">Đăng xuất</a></li>
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
                            <li><a href="?ctrl=home&act=danhsach&loai_can=1">Danh sách nhà thuê</a> </li>
                            <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                            <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                            <?php if (isset($_SESSION['user']) == true) { ?>
                                <li><a href="?act=thongtintk&ma_tk=<?= $_SESSION['id'] ?>"><?= $_SESSION['user'] ?> <i class="fa fa-caret-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="?act=thongtintk&ma_tk=<?= $_SESSION['id'] ?>">Thông tin tài khoản</a></li>
                                        <li><a href="?act=doimk&ma_tk=<?= $_SESSION['id'] ?>">Đổi mật khẩu</a></li>
                                        <li><a href="?act=ch-dd&ma_tk=<?= $_SESSION['id'] ?>">Căn hộ của tôi</a></li>
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


            <div class="navtext">
                <h1 style="text-shadow: 2px 2px 2px black; font-family: sans-serif;">THUÊ CĂN HỘ SIÊU TỐC</h1>
                <p>Hơn 16.000 nhà riêng, chung cư, căn hộ đang cho thuê. Cam kết luôn có 10 <br> căn hộ trong 48 giờ.</p>
            </div>
            <div class="dangky">
                <h3>Đăng ký tìm nhà siêu tốc !</h3>
                <form action="?ctrl=home&act=dangkytim" method="post" name="myform"  onsubmit="return validateform()">
                <input type="text" name="ho_ten" placeholder="Họ và tên">
                <input type="email" name="email" placeholder="Email">
                <input type="number"name="sdt" placeholder="Số điện thoại">
                <input class="submit" name="dangky" type="submit" value="Tham gia ngay">
                </form>
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
                            <img src="../uploaded/guard.png" alt="">
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
        <div class="danhsach ">
            <div class="tieude">
                <h3 style="font-weight: bold; color: orange;color:black;">DANH SÁCH</h3>
                <h2 style="font-size: 30pt;">Nhà cho thuê mới nhất</h2>
            </div>
            <div class="loc-canho">
                <form action="?ctrl=home&act=timkiemtheogia" method="post">
                    <select name="sxgia" id="" class="select">
                        <option value="1">Giá từ thấp đến cao</option>
                        <option value="2">Giá từ cao đến thấp</option>
                    </select>
                    <select name="mucgia" id="" class="select">
                        <option value="">Mức giá</option>
                        <option value="1">Dưới 3 triệu</option>
                        <option value="2">3 triệu - 5 triệu</option>
                        <option value="3">5 triệu - 8 triệu</option>
                        <option value="4">8 triệu - 10 triệu</option>
                        <option value="5">10 triệu - 15 triệu</option>
                        <option value="6">15 triệu - 20 triệu</option>
                        <option value="7">Trên 20 triệu</option>
                    </select>
                    <select name="loai_can" id="" class="select">
                        <?php foreach($loaican as $lc) {?>
                            <option value="<?=$lc["ma_loai"]?>"><?=$lc["ten_can"]?></option>
                        <?php }?>
                    </select>
                    <select name="" id="" class="select">
                        <option value="">Tp. Hồ Chí Minh</option>
                    </select>
                    <button class="btn-loc" type="submit"><i class="fas fa-search"></i></button>
                </form>
            </div>
            <div class="boxcenter ">

                <div class="canho slider1">
                    <?php foreach ($ds_ch as $ch) { ?>
                        <div class="box2" id="box2" data-toggle="modal" data-target="#myModal" data-id=<?= $ch["ma_can"] ?>>
                            <div class='click' style="display: none;"><?= $ch["ma_can"] ?></div>
                            <div class="img-click">
                                <img src="../uploaded/<?= $ch['hinh'] ?>" alt="">
                                <input type="hidden" name="ma_can" id="ma_can" value="<?= $ch["ma_can"] ?>">

                                <div class="box2text">
                                    <span><?= $ch['ten_can_ho'] ?></span>
                                </div>
                                <div class="gia">
                                    <a href="#" style="color:orange;font-size:18px;"> Giá </a>: <?= number_format($ch['gia_thue'], 0, ' ', '.') ?> VNĐ
                                </div>
                                <div class="datlich">
                                    <span>Xem căn hộ</span>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    <!--show cái 2-->
                </div>
                <div class="canho slider2">
                    <?php foreach ($ds_ch2 as $ch) { ?>
                        <div class="box2" data-toggle="modal" data-target="#myModal" data-id=<?= $ch["ma_can"] ?>>
                            <div class='click' style="display: none;"><?= $ch["ma_can"] ?></div>
                            <div class="img-click">
                                <img src="../uploaded/<?= $ch['hinh'] ?>" alt="">
                                <input type="hidden" name="ma_can" id="ma_can" value="<?= $ch["ma_can"] ?>">
                                <div class="box2text">
                                    <span><?= $ch['ten_can_ho'] ?></span>
                                </div>
                                <div class="gia">
                                    <a href="#" style="color:orange;font-size:18px;"> Giá </a>: <?= number_format($ch['gia_thue'], 0, ' ', '.') ?> VNĐ
                                </div>
                                <div class="datlich">
                                    <span>Xem căn hộ</span>
                                </div>
                            </div>
                        </div>

                    <?php } ?>

                </div>

                <div class="xemthem">
                    <a href="?ctrl=home&act=danhsach&loai_can=1">Xem thêm </a>
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
                    <?php foreach ($quan as $q) {
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
    <div class="modal fade" id="myModal" role="dialog">

    </div>
    <!-- end căn ho ct -->

    <div class="modal fade dl" id="datlich" role="dialog">

    </div>
    <div class="divcuoi">
        <span> 2020 © Bản quyền GoldenHome. Đã đăng ký Bản quyền.</span>
    </div>



</body>

</html>
<script src="./views/js/index.js"></script>
<script>
        function validateform() {
        var name = document.myform.ho_ten.value;
        var email = document.myform.email.value;
        var sdt = document.myform.sdt.value;
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (name == null || name == "" || name.length < 2) {
          swal("Bạn chưa nhập tên", "Vui lòng nhập !", "warning");
            return false;
        }
        if (email == null || email == "" ) {
          swal("Bạn chưa nhập email", "Vui lòng nhập !", "warning");
            return false;
        }  
        if (sdt == null || sdt == "" || vnf_regex.test(sdt) == false ) {
          swal("Số điện thoại không hợp lệ", "Vui lòng nhập lại!", "warning");
            return false;
        }
        else{
            swal("Gửi thành công", "Nhân viên của chúng tôi sẽ gọi cho bạn!", "success");
            
            return true;
        }  
    }
</script>
<script>
    function validatefor() {
        var name = document.myfor.ngay_xem.value;
        if (name == null || name == "") {
          swal("Bạn chưa chọn ngày", "Vui lòng đặt lại !", "warning");
            return false;
        } 
    }
</script>
