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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"> </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
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
    <nav class="menu-logo">
        <div class="menu-logo-bg">
            <div class="nav-logo">
                <img src="../uploaded/logo.png" alt="">
            </div>
            <div class="nav-menu">
                <ul>
                    <li><a href="index.php">Trang chủ </a> </li>
                    <li><a href="?ctrl=home&act=danhsach&ma_quan=4">Danh sách nhà thuê</a> </li>
                    <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                    <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px; color: rgb(255, 255, 255) !important;">Đăng tin</a></li>
                    <?php if (isset($_SESSION['user']) == true) { ?>
                        <li><a href="#" onclick="toogle()"><?= $_SESSION['user'] ?></a>
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
            <a href="#" onclick="showtimkiem()" id="an">Tìm kiếm <i class="fa fa-search"></i></a>
            <a href="#" onclick="exit()" id="hien">Tìm kiếm <i class="fa fa-close"></i></a>
            <div class="w-100 boxtim position-absolute" id="showtim">
                <!--Tiềm kiếm ẩn-->
                <div class="tiemkiemtrong">
                    <h4>Thuê</h4>
                    <form action="?ctrl=home&act=timkiemall" class="formtimkiem1" method="POST">
                        <div class="row mtop">
                            <div class="col-3">
                            <select name="loai_can" id="" class="w-75 select pad">
                                        <?php foreach($loaicanz as $lc) {?>
                                        <option value="<?=$lc["ma_loai"]?>"><?=$lc["ten_can"]?></option>
                                        <?php }?>
                            </select>
                            </div>
                            <div class="col-6">
                                <input type="text" name="key" class="w-100 select2 pad" style="border: none; font-size: 12pt; height: 50px; border-bottom: 1px gray solid;" placeholder="Nhập địa chỉ để tiềm kiếm căn hộ...">
                            </div>
                            <div class="col-3">
                                <button class="w-75 select2 bgcam" style="font-size: 10pt; color: white;">Tìm kiếm <i class="fa fa-search"></i></button>
                            </div>
                            <!--Thành phố quận huyện-->

                        </div>
                        <div class="row mtop">
                            <div class="col-3">
                                <select name="" id="" class="select1 " style="font-size: 10pt;">
                                    <option value="">Tp Hồ Chí minh</option>

                                </select></div>
                            <div class="col-3">
                            <select name="ma_quan" id="" class="select1 " style="font-size: 10pt;">
                                        <option value="0">Quận</option>
                                        <?php foreach($quanz as $q) {?>
                                            <option value="<?=$q["ma_quan"]?>"><?=$q["ten_quan"]?></option>
                                        <?php }?>
                                    </select>
                            </div>
                            <div class="col-3">
                            <select name="mucgia" id="" class="select1" style="font-size: 10pt;">
                                    <option value="0">Mức giá</option>
                                    <option value="1">Dưới 3 triệu</option>
                                    <option value="2">3 triệu - 5 triệu</option>
                                    <option value="3">5 triệu - 8 triệu</option>
                                    <option value="4">8 triệu - 10 triệu</option>
                                    <option value="5">10 triệu - 15 triệu</option>
                                    <option value="6">15 triệu - 20 triệu</option>
                                    <option value="7">Trên 20 triệu</option>
                                    </select>
                            </div>
                            <div class="col-3">
                            <select name="dientich" id="" class="select1 " style="font-size: 10pt;">
                                        <option value="0">Diện tích</option>
                                        <option value="1">10 - 50 m²</option>
                                        <option value="2">50 - 100 m²</option>
                                        <option value="3">100 - 200 m²</option>
                                    </select>
                            </div>

                        </div>
                        <div class="row mtop">

                            <div class="col-4">
                                <select name="sophongngu" id="" class="select1 " style="font-size: 10pt;">
                                    <option value="">Số phòng ngủ</option>
                                    <?php for ($i = 1; $i <= 10; $i++) {
                                    ?>
                                        <option value="<?= $i ?>"><?= $i ?></option>
                                    <?php
                                    } ?>
                                </select>
                            </div>
                            <div class="col-4">
                                <select name="sophongvs" id="" class="select1 " style="font-size: 10pt;">
                                    <option value="">Số phòng vệ sinh</option>
                                    <?php for ($i = 1; $i <= 10; $i++) {
                                    ?>
                                        <option value="<?= $i ?>"><?= $i ?></option>
                                    <?php
                                    } ?>
                                </select>
                            </div>
                            <div class="col-4">
                                <select name="huongnha" id="" class="select1 " style="font-size: 10pt;">
                                <option value="0">Hướng nhà</option>
                                        <option value="1">Đông</option>
                                        <option value="2">Tây</option>
                                        <option value="3">Nam</option>
                                        <option value="4">Bắc</option>
                                        <option value="5">Đông Bắc </option>
                                        <option value="6">Đông Nam</option>
                                        <option value="7">Tây Bắc</option>
                                        <option value="8">Tây Bắc</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </nav>
    <!-- đây là phần show sản phẩm lên có hình ảnh và có tên,giá,id -->
    <div id="wrapper" style="margin-top: 150px;">
        <div class="item1">
            <div class="box-slideshow">
                <p>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators" style="left: 50px;">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="../uploaded/<?= $row['hinh'] ?>" alt="First slide" style="width:100%;" height="500px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../uploaded/<?= $row['hinhb'] ?>" alt="Second slide" style="width:100%;" height="500px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../uploaded/<?= $row['hinhc'] ?>" alt="Third slide" style="width:100%;" height="500px">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="../uploaded/<?= $row['hinhc'] ?>" alt="Four slide" style="width:100%;" height="500px">
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
                </p>
            </div>
            <!-- thông tin nhà cửa như báo giá,độ lớn độ dài -->
            <div class="thongtin">
                <div class="tatcatt">
                    <p class="txt1" style="font-family: 'Noto Sans JP', sans-serif;"><?= $row['ten_can_ho'] ?></p>
                    <p class="txt2"><?= $row['dia_chi'] ?></p>
                    <div class="btn-tt">
                        <!-- <button class="button-cs1"><p class="txt3">Bán</p></button>
                        <button class="button-cs2"><p class="txt3">Đã Thẩm Định</p></button>
                        <button class="button-cs3"><p class="txt3">ID 277418</p></button> -->
                        <label for="" class="label1">Thuê</label>
                        <label for="" class="label2">Đã thẩm định</label>
                        <label for="" class="label3">ID <?=$row["ma_can"]?></label>
                    </div>
                    <p class="txt3"><?=number_format($row['gia_thue'], 0, '', '.')?> VNĐ - <?= $row['dien_tich'] ?>m²</p>
                    <p class="txt4">Giá : <?php $gia = $row['gia_thue'] / $row['dien_tich']; echo number_format($gia,0,'','.')?> VNĐ/m²</p>
                </div>
                <div class="btn">
                    <?php if (isset($_SESSION['cart']) == true) {

                        if ($_SESSION['cart'][$row['ma_can']]['ma_can'] == $row['ma_can']) {
                            echo ' <div><button class="btn1" style="background-color: orangered;"><a href="?act=delete-gh&id='.$_SESSION['cart'][$row['ma_can']]['ma_can'].'" style="color: white;">ĐÃ LƯU<i class="fa fa-download" style="margin-left:5px;"></i></a></button></div>';
                        }else{
                            echo '<div><button class="btn1" ><a href="?act=add-gh&id='.$row['ma_can'].'" style="color: orangered;">LƯU<i class="fa fa-download" style="margin-left:5px;"></i></a></button></div>';
                        }
                    }
                    ?>
                    <?php if (isset($_SESSION['cart']) == false) { ?>
                        <div><button class="btn1" style="color: orangered;"><a href="?act=add-gh&id=<?= $row['ma_can'] ?>" style="color: orangered;">LƯU<i class="fa fa-download" style="margin-left:5px;"></i></a></button></div>
                    <?php } ?>
                    <div><button class="btn1">CHIA SẺ <i class="fa fa-share" style="margin-left:5px;"></i></button></div>
                    <div><button class="btn1">VỊ TRÍ <i class="fa fa-map-marker" style="margin-left:5px;"></i></button></div>
                </div>
            </div>
            <!-- phần giới thiệu nhà -->
            <div class="gioithieu-tuvan ">
                <div class="gioithieu ">
                    <h3 class="txt8">Giới thiệu</h3>
                    <p class="txt5"><?= $row['ten_can_ho'] ?></p>
                    <p class="txt6">
                        <div class="row">
                            <div class="col-6 txtx">
                                <ul>
                                    <li class="li1">Hướng: <?php if ($row["huong_nha"] == 1) echo "Đông";
                                        elseif ($c["huong_nha"] == 2) echo "Tây";
                                        elseif ($c["huong_nha"] == 3) echo "Nam";
                                        elseif ($c["huong_nha"] == 4) echo "Bắc";
                                        elseif ($c["huong_nha"] == 5) echo "Tây Bắc";
                                        elseif ($c["huong_nha"] == 6) echo "Tây Nam";
                                        elseif ($c["huong_nha"] == 7) echo "Đông Bắc";
                                        elseif ($c["huong_nha"] == 8) echo "Đông Nam";
                                        ?></li>
                                    <li>Phòng ngủ: <?= $row['so_phong_ngu'] ?></li>
                                    <li>Phòng tắm: <?= $row['so_phong_vs'] ?></li>
                                    <li>Tầng: <?= $row['tang'] ?> </li>

                                </ul>
                            </div>
                            <div class="col-6 txtx">
                                <ul>
                                    <li>Giấy tờ: Sổ hồng</li>
                                    <li>Diện tích: <?= $row['dien_tich'] ?>m2</li>
                                    <li>Hẻm: 1.5m</li>
                                </ul>
                            </div>
                        </div>
                    </p>
                </div>
                <div class="tuvan ">
                    <div class="div-text">
                        <p>Đăng lịch xem căn hộ này</p>
                    </div>
                    <?php if (isset($_SESSION["id"])) {
                        ?>
                        <form action="?ctrl=home&act=datlichxem" method="post" class="form-tuvan"  name="myform"  onsubmit="return validateform()">
                        <div class="fiel">
                            <input type="hidden" name="ma_can" value="<?= $row['ma_can'] ?>" id="" style="font-size: 10pt;" placeholder="Nhập tên của bạn">
                        </div>
                        <div class="fiel">
                            <input type="hidden" name="ma_tk" value="<?= $_SESSION['id'] ?>" id="" style="font-size: 10pt;" placeholder="Nhập Email">
                        </div>
                        <div class="fiel">
                            <input type="hidden" name="ngay_dat" value="<?=date("Y-m-d")?>" id="" style="font-size: 10pt;" placeholder="Nhập Số Điện Thoại">
                        </div>
                        <div class="fiel" style="margin-top: 50px;">
                            <input type="date" min="<?=date("Y-m-d")?>" name="ngay_xem" id="" style="font-size: 10pt;" >
                        </div>
                        <div class="fiel-sub">
                            <input type="submit" name="dat" value="Đặt lịch xem" style="font-size: 10pt;">
                        </div>
                    </form>
                    <?php
                    } else{
                        ?>
                        <div  class="form-tuvan">
                        <div class="fiel" >
                            <input type="date" name="" id="" style="font-size: 10pt; margin-left: 25px;" placeholder="">
                        </div>
                        <div class="fiel-sub">
                            <input type="submit" name="dat" onclick="Show()"  value="Đặt lịch xem" style="font-size: 10pt; margin-left: 25px;">
                        </div>
                    </div>
                    
                        <?php
                    }?>
                </div>
            </div>
            <!-- thông tin chi tiết hơn -->
            <div class="ttct">
                <h3 class="txt9">Thông tin chi tiết</h3>
                <p class="txt7">

                    <p class="txt77"> Địa chỉ: <?= $row['dia_chi'] ?></p>

                    <p class="txt77"> Diện tích <?= $row['dien_tich'] ?>m2. </p>

                    <p class="txt77"> <?=$row["tien_ich"]?></p>

                </p>
            </div>
        </div>
        <div class="item2">
            <div class="form-timkiem">
                <div class="div-text">
                    <p>Tìm nhanh</p>
                </div>
                <form action="?ctrl=home&act=timkiemnhanh" method="post" class="tim-kiemm1">
                    <label for="" class="form-txt">Loại căn hộ :</label>
                    <div class="div">
                        <select name="loai_can" id="" style="font-size: 10pt;">
                            <?php foreach($loaican as $ls){?>
                                <option value="<?=$ls["ma_loai"]?>"><?=$ls["ten_can"]?></option>
                            <?php }?>
                        </select>
                    </div>
                    <div class="div">
                        <select name="" id="" style="font-size: 10pt;">
                            <option value="" checked>Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div class="div">
                        <select name="ma_quan" id="" style="font-size: 10pt;">
                            <?php foreach ($quanall as $q) { ?>
                                <option value="<?=$q['ma_quan'] ?>"><?= $q['ten_quan'] ?></option>
                            <?php } ?>
                        </select>
                    </div>
                    <div class="sub">
                        <input type="submit" name="timnhanh" value="Tìm nhanh">
                    </div>
                </form>
            </div>

            <div class="form-timkiemlancan">
                <div class="div-text">
                    <p>Các quận lân cận</p>
                </div>
                <form action="#" method="post" class="tim-kiemm">


                    <ul class="lancan">
                    
                    <?php foreach($quan as $q) {
                        $soluong=soluongcanhoinquan($q["ma_quan"]);
                       ?>
                        <li>


                            <a href="?ctrl=home&act=danhsach&ma_quan=<?= $q["ma_quan"]?>"> <span class=""> <?=$q["ten_quan"]?> </span> <span class="count">SL: (<?php echo $soluong["soluong"]?>)</span> </a>

                        </li>
                    <?php }?>
                    </ul>


                </form>
            </div>
            <div class="form-timkiemlancan " style="overflow: hidden;">
                <div class="div-text" >
                    <p>Các phường trong quận</p>
                </div>
                <form action="#" method="post" class="tim-kiemm">


                    <ul class="lancan" >
                    <?php $phuong=getphuongbyidquan($row["ma_quan"]);
                        foreach($phuong as $p){
                        ?>
                        <li>

                            <a href="?ctrl=home&act=danhsach&ma_quan=<?=$row["ma_quan"]?>&id=<?=$p["id"]?>"> <span class=""> <?=$p["phuong"]?> </span> <span class="count"></span> </a>

                        </li>
                        <?php }?>
                    </ul>


                </form>
            </div>
        </div>

    </div>
    <!-- dịch vụ khác của Golden Home -->
    <div class="dichvukhac">
        <div class="img-bg">
            <img src="../uploaded/banner-f.jpg" alt="">
            <div class="font">
                <p class="text">DỊCH VỤ NỔI BẬT CỦA GOLDEN HOME</p>
            </div>
            <div class="container">
                <div class="team7">
                    <div class="icon">
                        <i class="fa fa-home" style="font-size:90px;color:white;"></i>
                    </div>
                    <div class="gui">
                        <div class="hypert-text">
                            <p class="text-cuoi">
                                Đăng Bán và Cho Thuê Miễn Phí
                            </p>
                            <p class="text-cuoi2">
                                Tiếp cận khách hàng sẵn có, quảng cáo tin đăng
                                miễn phí</p>
                        </div>
                        <div class="submit">
                            <label for="" class="label-end"><a href="#" style="color: white;font-size: 10pt;">Đăng tin ngay</a></label>
                        </div>
                    </div>
                </div>
                <div class="team7">
                    <div class="icon">
                        <i class="fa fa-home" style="font-size:90px;color:white;"></i>
                    </div>
                    <div class="gui">
                        <div class="hypert-text">
                            <p class="text-cuoi">Tìm Mua và Thuê Như Ý</p>
                            <p class="text-cuoi2">
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
    <div class="thongbao" id="thongbao">
                <form action="">
                    <div class="boxcenter">
                    <div class="row">
                        <div class="col-12" style="text-align: center;">
                        <p class="tbdn">Đăng nhập để tiếp tục</p>
                        </div>
                    </div>
                    <div class="row mt-5" >
                        <div class="col-6"><a href="?ctrl=home&act=dangnhap" class="tbdn1">OK</a></div>
                        <div class="col-6"><span onclick="dong()" class="tbdn1" style="cursor: pointer;">Thoát</span></div>
                    </div>
                    </div>
                </form>
    </div>
    <script src="./views/js/index.js"></script>
</body>

</html>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<script>
    var thongbao=document.getElementById("thongbao");
    function Show(){
        thongbao.style.display="block";
    }
    function dong(){
        thongbao.style.display="none";
    }

    function validateform() {
        var name = document.myform.ngay_xem.value;
        if (name == null || name == "") {
          swal("Bạn chưa chọn ngày", "Vui lòng đặt lại !", "warning");
            return false;
        } 
    }
</script>

