<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
    <link rel="stylesheet" href="./views/css/about.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <nav class="menu-logo">
        <div class="menu-logo-bg">
            <div class="nav-logo">
                <img src="../uploaded/logo.png" alt="">
            </div>
            <div class="nav-menu3">
                <ul>
                    <li><a href="index.php">Trang chủ </a> </li>
                    <li><a href="?ctrl=home&act=danhsach&loai_can=1">Danh sách nhà thuê</a> </li>
                    <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                    <li><a href="?act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                    <?php if (isset($_SESSION['user']) == true) { ?>
                                <li><a  href="?act=thongtintk&ma_tk=<?=$_SESSION['id']?>"><?= $_SESSION['user']?> <i class="fa fa-caret-down"></i></a>
                                    <ul class="sub-menu">
                                        <li><a href="?act=thongtintk&ma_tk=<?=$_SESSION['id']?>">Thông tin tài khoản</a></li>
                                        <li><a href="?act=doimk&ma_tk=<?=$_SESSION['id']?>">Đổi mật khẩu</a></li>
                                        <li><a href="?act=ch-dd&ma_tk=<?=$_SESSION['id']?>">Căn hộ của tôi</a></li>
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
    <div class="menu">
        <div class="banner">
            <img src="../uploaded//banner9.jpg" width="100%" height="600px" alt="">
        </div>

        <div class="navtext">
            <h1 style="text-shadow: 2px 2px 2px black;">GIỚI THIỆU VỀ CHÚNG TÔI</h1>
            <p>Hơn 16.000 nhà riêng, chung cư, căn hộ đang cho thuê. Cam kết luôn có 10 <br> căn hộ trong 48 giờ.</p>
        </div>
    </div>
    <div class="thoahiep">
        <div class="divth1 imgth">
            <img src="../uploaded/ab1.jpg" alt="">
        </div>
        <div class="divth1 ">
            <div class="divtext">
                <h1>Chúng tôi không bao giờ thỏa hiệp
                    <br> với chất lượng công việc ...</h1>
                <p>Golden Home là một trong những công ty bất động sản nổi tiếng nhất <br>
                    trên khắp nước Mỹ. Bạn có thể tìm thấy tài sản mơ ước của mình <br>
                    hoặc xây dựng tài sản</p>
            </div>
            <div class="divicon">
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-1.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3> Giá trị nhỏ nhất</h3>
                        <p>Ưu tiên chi phí thấp giúp tất <br>
                            cả mọi người xây dựng bất <br>
                            động sản nhiều hơn</p>
                    </div>
                </div>
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-2.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3> Tiếp thị tốt nhất</h3>
                        <p>Ưu tiên chi phí thấp giúp tất <br>
                            cả mọi người xây dựng bất <br>
                            động sản nhiều hơn</p>
                    </div>
                </div>
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-3.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3>Dễ dàng tìm kiếm</h3>
                        <p>Bạn có thể tìm tài sản của<br>
                            mình một cách đơn giản và <br>
                            dễ dàng</p>
                    </div>
                </div>
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-4.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3>Đảm bảo</h3>
                        <p>Bạn có thể tìm tài sản của<br>
                            mình một cách đơn giản và <br>
                            dễ dàng</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="dichvu">
        <div class="dvtext">
            <h1>Dịch vụ mà chúng tôi cung cấp</h1>
            <p>Golden Home là một trong những công ty bất động sản nổi tiếng nhất trên khắp nước Mỹ. Bạn có thể tìm <br>
                thấy tài sản mơ ước của mình hoặc xây dựng tài sản với chúng tôi. Chúng tôi luôn coi trọng <br>
                khách hàng của mình</p>
        </div>
        <div class="dvicon">
            <div class="dvicon1">
                <div class="dviconimg">
                    <img src="../uploaded//service-1.png" alt="">
                </div>
                <div class="dvicontext">
                    <h3> Mua tài sản</h3>
                    <p>Chúng tôi mua nhiều tài sản khác nhau giống <br>
                        như những người khác, những người muốn<br>
                        bán con của họ với sự tin tưởng</p>
                </div>
            </div>
            <div class="dvicon1">
                <div class="dviconimg">
                    <img src="../uploaded//service-2.png" alt="">
                </div>
                <div class="dvicontext">
                    <h3> Bán tài sản</h3>
                    <p>Số lượng tài sản để bán khác nhau của các <br>
                        tài sản như nhiều người muốn bán con cháu<br>
                        của họ</p>
                </div>
            </div>
            <div class="dvicon1">
                <div class="dviconimg">
                    <img src="../uploaded//service-3.png" alt="">
                </div>
                <div class="dvicontext">
                    <h3> Cho thuê tài sản</h3>
                    <p>Nếu bạn cần tài sản cho thuê nhiều tài sản<br>
                        khác nhau như nhiều người muốn bán đức<br>
                        tin của họ</p>
                </div>
            </div>
        </div>
    </div>
    <div class="price">
        <div class="price1">
            <div class="priceimg1">
                <div class="priceimga">
                    <img src="../uploaded//ch2.jpg" alt="">
                </div>
                <div class="priceimgtext">
                    <p>Giá $ 89,000</p>
                </div>
            </div>
            <div class="priceimg2">
                <div class="priceimga">
                    <img src="../uploaded//ch1.jpg" alt="">
                </div>
                <div class="priceimgtext">
                    <p>Giá $1,53,000</p>
                </div>
            </div>
        </div>
        <div class="price2">
            <div class="divtext">
                <h1>Chúng tôi luôn mang lại chất lượng
                    <br> tốt nhất </h1>
                <p>Golden Home là một trong những công ty bất động sản nổi tiếng nhất <br>
                    trên khắp nước Mỹ. Bạn có thể tìm thấy tài sản mơ ước của mình <br>
                    hoặc xây dựng tài sản</p>
            </div>
            <div class="divicon">
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-5.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3>Sơn cảm ứng Royel</h3>
                        <p>Sơn là tấm gương phản chiếu vẻ<br>
                            đẹp ngôi nhà mơ ước cùng chúng<br>
                            tôi xây dựng tài sản</p>
                    </div>
                </div>
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-6.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3> Đầy đủ nội thất</h3>
                        <p>Các tài sản được trang trí đẹp và <br>
                            đầy đủ tiện nghi luôn sẵn sàng <br>
                            cho tất cả mọi người</p>
                    </div>
                </div>
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-7.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3>Thiết kế nội thất mới nhất</h3>
                        <p>Tất cả nội thất đều là gương mới<br>
                            nhất và sang trọng của ngôi nhà <br>
                            đẹp trong mơ</p>
                    </div>
                </div>
                <div class="divicon1">
                    <div class="icon">
                        <img src="../uploaded//feature-8.png" alt="">
                    </div>
                    <div class="divicontext">
                        <h3> Không ngừng bảo mật</h3>
                        <p>An ninh trong khu vực tài sản của<br>
                            chúng tôi là ưu tiên chính cho tất cả<br>
                            các nhân viên của chúng tôi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="daili">
        <div class="dltext">
            <h1>Đại lí của chúng tôi </h1>
            <p>Golden Home là một trong những công ty bất động sản nổi tiếng nhất trên khắp nước Mỹ. Bạn có thể tìm <br>
                thấy tài sản mơ ước của mình hoặc xây dựng tài sản với chúng tôi. Chúng tôi luôn coi trọng <br>
                khách hàng của mình</p>
        </div>
        <div class="dlimg">
            <div class="dlimg1" style="height: 400px; margin-top: 40px;">
                <img src="../uploaded//avt.PNG" alt="" style="height: 250px;">
                <h3>Park Jiyeon</h3>
                <p>Đại lý bất động sản</p>
            </div>
            <div class="dlimg1" style="height: 400px; margin-top: 40px;">
                <img src="../uploaded//avt.PNG" alt="" style="height: 250px;">
                <h3>Park Soyeon</h3>
                <p>Đại lý bất động sản</p>

            </div>
            <div class="dlimg1" style="height: 400px; margin-top: 40px;">
                <img src="../uploaded//avt.PNG" alt="" style="height: 250px;">
                <h3>Park Hyomin</h3>
                <p>Đại lý bất động sản</p>

            </div>
            <div class="dlimg1" style="height: 400px; margin-top: 40px;">
                <img src="../uploaded//avt.PNG" alt="" style="height: 250px;">
                <h3>Ham Eunjung</h3>
                <p>Đại lý bất động sản</p>

            </div>
        </div>
    </div>
    <div class="divlogo">
        <div class="logo">
            <img src="../uploaded//01.png" alt="">
        </div>
        <div class="logo">
            <img src="../uploaded//02.png" alt="">
        </div>
        <div class="logo">
            <img src="../uploaded//03.png" alt="">
        </div>
        <div class="logo">
            <img src="../uploaded//04.png" alt="">
        </div>
        <div class="logo">
            <img src="../uploaded//05.png" alt="">
        </div>
    </div>
    <div class="tuvan">
        <div class="tuvanimg">
            <img src="../uploaded/banner-f.jpg" width="100%" alt="">
            <div class="tuvantext">
                <h1>Bạn vẫn chưa tìm được nhà ưng ý?</h1>
                <p>Còn rất nhiều nhà riêng, căn hộ, chung cư chưa được đăng lên, hãy để Golden Home tư vấn chọn
                    <br> giúp bạn!</p>
                <div class="tuvan2">
                    <a href="#">TƯ VẤN MIỄN PHÍ</a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
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
            <input type="text" placeholder="Địa chỉ email" style="font-size: 11pt;"><input class="ip2" type="submit" value="Đăng ký">
        </div>
    </div>
    <!-- Footer Golden Home -->

    <div class="divcuoi">
        <span> 2020 © Bản quyền GoldenHome. Đã đăng ký Bản quyền.</span>
    </div>

</body>

</html>
<script src="./views/js/index.js"></script>