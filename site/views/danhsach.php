<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách căn hộ</title>
    <link rel="stylesheet" href="./danhsach/assets/css/app/search.css?ver=20.30.13.11.2020" async />
    <link rel="stylesheet" href="./views/css/danhsach.css">
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
                    <li><a href="?ctrl=home&act=danhsach&loai_can=1">Danh sách nhà thuê</a> </li>
                    <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                    <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px; color: rgb(255, 255, 255) !important;">Đăng tin</a></li>
                    <?php if (isset($_SESSION['user']) == true) { ?>
                        <li>
                            <a href="?act=thongtintk">
                                <?= $_SESSION['user'] ?> <i class="fa fa-caret-down"></i>
                            </a>
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
                    <form action="?ctrl=home&act=timkiemall" method="POST" class="formtimkiem1">
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
                            <select name="ma_quan" id="" class="select1 ">
                                        <option value="0">Quận</option>
                                        <?php foreach($quanzzz as $q) {?>
                                            <option value="<?=$q["ma_quan"]?>"><?=$q["ten_quan"]?></option>
                                        <?php }?>
                                    </select>
                            </div>
                            <div class="col-3">
                            <select name="mucgia" id="" class="select1">
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
                            <select name="dientich" id="" class="select1 ">
                                        <option value="0">Diện tích</option>
                                        <option value="1">10 - 50 m²</option>
                                        <option value="2">50 - 100 m²</option>
                                        <option value="3">100 - 200 m²</option>
                                    </select>
                            </div>

                        </div>
                        <div class="row mtop">
                            
                            <div class="col-4">
                            <select name="sophongngu" id="" class="select1 ">
                                        <option value="0">Số phòng ngủ</option>
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value="<?=$i?>"><?=$i?></option>
                                            <?php
                                        }?>
                                    </select>
                            </div>
                            <div class="col-4">
                            <select name="sophongvs" id="" class="select1 ">
                                        <option value="0">Số phòng vệ sinh</option>
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value="<?=$i?>"><?=$i?></option>
                                            <?php
                                        }?>
                                    </select>
                            </div>
                            <div class="col-4">
                                <select name="huongnha" id="" class="select1 ">
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

            <div class="row" style="margin-bottom: 10px; border-bottom: 1px gainsboro solid; height: 35px;">
                <div class="col-6">
                    <h2 style="font-weight: bold; color: orangered; font-family: sans-serif;">// DANH SÁCH CÁC CĂN HỘ  </h2>
                </div>
                <div class="col-6">
                    <!-- <select name="" id="gia_ds" class="form-control" style="width: 70%; float: right; font-size: 10pt;">
                        <option value="0">Sắp xếp</option>
                        <option value="1">Tăng dần</option>
                        <option value="2">Giảm dần</option>
                    </select> -->
                </div>
            </div>

            <div id="view-as-grid" class="row list-layout-0 list-item">
                <?php foreach ($dsch_tl as $ch) {
                    ?>   
                      
                    <div class="col-6 col-lg-4">
                        <a href="?ctrl=home&act=chitiet&ma_can=<?=$ch["ma_can"]?>">
                            <div class="item is-feature">
                                <a href="?ctrl=home&act=chitiet&ma_can=<?=$ch["ma_can"]?>" class="img tRes_82"> <img class="lazy-hidden" src="../uploaded/<?=$ch["hinh"]?>" > </a>
                                <div class="divtext ">
                                <h2 class="height-search"><a href="?ctrl=home&act=chitiet&ma_can=<?=$ch["ma_can"]?>" class="title"><?= $ch['ten_can_ho'] ?></a></h2>
                                <div class="imeta-1"> <b><?= $ch['dia_chi'] ?></b> </div>
                                <div class="imeta-3"> <span><i class="fa fa-bath"></i> <strong><?=$ch['so_phong_vs']?></strong></span> <span><i class="fa fa-bed"></i> <strong><?=$ch['so_phong_ngu']?></strong></span> <span><i class="fa fa-building"></i> <strong><?=$ch['tang']?></strong></span> </div>
                                <div class="label"> <span class="label-1" style="background-color: orangered;"><a href="?ctrl=home&act=chitiet&ma_can=<?=$ch["ma_can"]?>" style="color: white;">Thuê</a></span>
                                  
                                </div>
                                <div class="wprice">
                                    <div class="imeta-2"> <span><b><?=number_format($ch['gia_thue'],0,'','.') ?> VNĐ</b></span> <span><b><?=$ch['dien_tich']?> m²</b></span> </div>
                                    <div link="thue/can-ho/hcm/quan-3/id277377" listingid="277377" object='{"id":277377 }' class="btnlike  save-listing save-listing-277377"> <span> </span> </div>
                                </div>
                            </div>
                            
                            </div>
                        </a>
                    </div>
                   
                <?php } ?>


            </div>
            <div class="pages" style="width: 100%; float: left;">
               
                <ul class="page-numbers">

                    <?=$links?>
                </ul>
            </div>
        </div>

        <div class="item2">
            <div class="form-timkiem">
                <div class="div-text">
                    <p>Tìm nhanh</p>
                </div>
                <form action="?ctrl=home&act=timkiemnhanh" method="post" class="tim-kiemm">
                    <label for="" class="form-txt">Loại căn hộ :</label>
                    <div class="div">
                        <select name="loai_can" id="" style="font-size: 10pt;">
                        <?php foreach( $loaican as $ls) {?>
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
                        <?php foreach($quan as $q) {?>
                            <option value="<?=$q["ma_quan"]?>"><?=$q["ten_quan"]?></option>
                        <?php }?>
                        </select>
                    </div>
                    <div class="sub">
                        <input type="submit" name="timnhanh" value="Tìm nhanh">
                    </div>
                </form>
            </div>

            <div class="form-timkiem" style="overflow: hidden;">
                <div class="div-text">
                    <p>Các quận lân cận </p>
                </div>
                <form action="#" method="post" class="tim-kiemmphuong">


                    <ul class="lancan">
                    <?php foreach($quanz as $q) {
                        $soluong=soluongcanhoinquan($q["ma_quan"]);
                       ?>
                        <li>
                            <a href="?ctrl=home&act=danhsach&ma_quan=<?= $q["ma_quan"]?>"> <span class=""> <?=$q["ten_quan"]?> </span> <span class="count">SL: (<?php echo $soluong["soluong"]?>)</span> </a>
                        </li>
                    <?php }?>
                    </ul>
                </form>


            </div>
            <!-- Phường -->
            <div class="form-timkiem" style="overflow: hidden;">
                <div class="div-text">
                    <p>Các phường trong <?php if(isset($_GET["ma_quan"]))
                     { $q=getquanbyid($_GET["ma_quan"]); 
                    echo $q["ten_quan"];
                } 
                    else{

                        echo "Quận 1";
                    }
                    ?></p>
                </div>
                <form action="#" method="post" class="tim-kiemmphuong">
                <ul class="lancan">
                    <?php if (isset($_GET["ma_quan"])) {
                        $phuong=getphuongbyidquan($_GET["ma_quan"]);
                        foreach($phuong as $p){
                        ?>
                    
                        <li>

                            <a href="?ctrl=home&act=danhsach&ma_quan=<?=$ma_quan?>&id=<?=$p["id"]?>"> <span class=""> <?=$p["phuong"]?> </span> </a>

                        </li>
                    <?php } } else {
                        $ma_quan=1;
                        $phuong=getphuongbyidquan($ma_quan);
                        foreach($phuong as $p){
                        ?>
                    <li>

                    <a href="?ctrl=home&act=danhsach&ma_quan=<?=$ma_quan?>&id=<?=$p["id"]?>"> <span class=""> <?=$p["phuong"]?> </span> </a>

                    </li>
                        <?php } }?>
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
                                Tiếp cận khách hàng sẵn có, quảng cáo tin đăng miễn phí</p>
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
                    <?php foreach ($quanzz as $q) {
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
    <script src="./views/js/index.js"></script>
</body>

</html>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>