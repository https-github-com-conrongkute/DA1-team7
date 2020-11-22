<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang chủ</title>
    <link rel="stylesheet" href="./danhsach/assets/css/app/search.css?ver=20.30.13.11.2020" async/>
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
    <!-- <div class="menu">
        <div class="banner">
            <img src="site/./uploaded/banner9.jpg" width="100%" height="600px" alt="">
        </div>
        <nav class="menu-logo">
            <div class="menu-logo-bg">
                <div class="nav-logo">
                    <img src="./uploaded/logo.png" alt="">
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
                    <li><a href="#">Dịch vụ </a></li>
                    <li><a href="?ctrl=home&act=danhsach">Danh sách nhà thuê</a> </li>
                    <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                    <li><a href="#">Liên hệ </a></li>
                    <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px; color: rgb(255, 255, 255) !important;">Đăng tin</a></li>
                    <?php if (isset($_SESSION['user']) == true) { ?>
                    <li>
                        <a href="#" onclick="toogle()">
                            <?= $_SESSION['user'] ?>
                        </a>
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
                    <form action="" class="formtimkiem1">
                        <div class="row mtop">
                            <div class="col-3">
                                <select name="" id="" class="w-75 select pad" style="font-size: 10pt;">
                                        <option value="">Căn hộ/Chung cư</option>
                                        <option value="">Nhà ở</option>
                                    </select>
                            </div>
                            <div class="col-6">
                                <input type="text" class="w-100 select2 pad" style="border: none; font-size: 12pt; height: 50px; border-bottom: 1px gray solid;" placeholder="Nhập địa chỉ để tiềm kiếm căn hộ...">
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
                                <select name="" id="" class="select1 " style="font-size: 10pt;">
                                        <option value="">Quận/Huyện</option>
                                        <option value="">Quận 1</option>
                                        <option value="">Quận 2</option>
                                        <option value="">Quận 3</option>
                                    </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="" class="select1" style="font-size: 10pt;">
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
                                <select name="" id="" class="select1 " style="font-size: 10pt;">
                                        <option value="">Diện tích</option>
                                        <option value="">10 - 20 m2</option>
                                        <option value="">20 - 30 m2</option>
                                    </select>
                            </div>

                        </div>
                        <div class="row mtop">
                            <div class="col-3">
                                <select name="" id="" class="select1 " style="font-size: 10pt;">
                                        <option value="">Số tầng</option>
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value=""><?=$i?></option>
                                            <?php
                                        }?>
                                    </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="" class="select1 " style="font-size: 10pt;">
                                        <option value="">Số phòng ngủ</option>
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value=""><?=$i?></option>
                                            <?php
                                        }?>
                                    </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="" class="select1 " style="font-size: 10pt;">
                                        <option value="">Số phòng vệ sinh</option>
                                        <?php for ($i=1; $i <= 10 ; $i++) { 
                                            ?>
                                            <option value=""><?=$i?></option>
                                            <?php
                                        }?>
                                    </select>
                            </div>
                            <div class="col-3">
                                <select name="" id="" class="select1 " style="font-size: 10pt;">
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
    <!-- đây là phần show sản phẩm lên có hình ảnh và có tên,giá,id -->
    <div id="wrapper" style="margin-top: 150px;">
        <div class="item1">
            <div id="view-as-grid" class="row list-layout-0 list-item">
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b1.jpg" alt="Căn hộ Singapore cho thuê trung tâm Quận 3"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="?ctrl=home&act=chitiet" class="title">Căn hộ Singapore cho thuê trung tâm Quận 3</a></h2>
                            <div class="imeta-1"> <b>Đ. Trần Quang Diệu, P.13, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>1</strong></span> <span><i class="fa fa-building"></i> <strong>1</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>188,9 ngàn/m²</b></div>
                            </div>
                            <div class="group"> <a href="#"> Dự án : <span class="cl1 w5" title=""></span></a> </div>
                            <div class="imeta-3"> <span> <a href="#"> Thuê: <strong class="cl1">5</strong> </a> </span> </div>
                            <div class="wprice">
                                <div class="imeta-2"> <span><b>8,5 triệu</b></span> <span><b>45 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277377" listingid="277377" object='{"id":277377 }' class="btnlike  save-listing save-listing-277377"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b2.jpg" alt="Cho thuê căn hộ dịch vụ tầng 4 đầy đủ nội thất"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="#" class="title">Cho thuê căn hộ dịch vụ tầng 4 đầy đủ nội thất</a></h2>
                            <div class="imeta-1"> <b>Đ. Võ Thị Sáu, P.8, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>1</strong></span> <span><i class="fa fa-building"></i> <strong>1</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>219,5 ngàn/m²</b></div>
                            </div>
                            <div class="wprice" style="margin-top: -50px;">
                                <div class="imeta-2"> <span><b>9 triệu</b></span> <span><b>41 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277418" listingid="277418" object='{"id":277418 }' class="btnlike  save-listing save-listing-277418"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                            <!-- Phường -->
                            <div class="widget widget-menu">
                                <h2 class="widget-title">Các phường trong Quận</h2>
                                <div class="widget-content">
                                    <ul>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 1 </span>  </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 2 </span>  </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 3 </span>  </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 4 </span> </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 5 </span></a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 6 </span> </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 7 </span> </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 8 </span>  </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 9</span> </a>
                                            </h3>
                                        </li>
                                        <li>
                                            <h3>
                                                <a href="#"> <span class="text"> Phường 10 </span> </a>
                                            </h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b3.jpg" alt="Cho thuê căn hộ dịch vụ tòa nhà Léman Luxury tầng 14"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="#" class="title">Cho thuê căn hộ dịch vụ tòa nhà Léman Luxury tầng 14</a></h2>
                            <div class="imeta-1"> <b>Đ. Nguyễn Đình Chiểu, P.6, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>2</strong></span> <span><i class="fa fa-building"></i> <strong>2</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>591,7 ngàn/m²</b></div>
                            </div>
                            <div class="wprice">
                                <div class="imeta-2"> <span><b>44,374 triệu</b></span> <span><b>75 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277620" listingid="277620" object='{"id":277620 }' class="btnlike  save-listing save-listing-277620"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b2.jpg" alt="Cho thuê căn hộ dịch vụ tầng 4 đầy đủ nội thất"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="#" class="title">Cho thuê căn hộ dịch vụ tầng 4 đầy đủ nội thất</a></h2>
                            <div class="imeta-1"> <b>Đ. Võ Thị Sáu, P.8, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>1</strong></span> <span><i class="fa fa-building"></i> <strong>1</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>219,5 ngàn/m²</b></div>
                            </div>
                            <div class="wprice" style="margin-top: -50px;">
                                <div class="imeta-2"> <span><b>9 triệu</b></span> <span><b>41 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277418" listingid="277418" object='{"id":277418 }' class="btnlike  save-listing save-listing-277418"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b1.jpg" alt="Căn hộ Singapore cho thuê trung tâm Quận 3"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="?ctrl=home&act=chitiet" class="title">Căn hộ Singapore cho thuê trung tâm Quận 3</a></h2>
                            <div class="imeta-1"> <b>Đ. Trần Quang Diệu, P.13, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>1</strong></span> <span><i class="fa fa-building"></i> <strong>1</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>188,9 ngàn/m²</b></div>
                            </div>
                            <div class="group"> <a href="#"> Dự án : <span class="cl1 w5" title=""></span></a> </div>
                            <div class="imeta-3"> <span> <a href="#"> Thuê: <strong class="cl1">5</strong> </a> </span> </div>
                            <div class="wprice">
                                <div class="imeta-2"> <span><b>8,5 triệu</b></span> <span><b>45 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277377" listingid="277377" object='{"id":277377 }' class="btnlike  save-listing save-listing-277377"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b2.jpg" alt="Cho thuê căn hộ dịch vụ tầng 4 đầy đủ nội thất"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="#" class="title">Cho thuê căn hộ dịch vụ tầng 4 đầy đủ nội thất</a></h2>
                            <div class="imeta-1"> <b>Đ. Võ Thị Sáu, P.8, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>1</strong></span> <span><i class="fa fa-building"></i> <strong>1</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>219,5 ngàn/m²</b></div>
                            </div>
                            <div class="wprice" style="margin-top: -50px;">
                                <div class="imeta-2"> <span><b>9 triệu</b></span> <span><b>41 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277418" listingid="277418" object='{"id":277418 }' class="btnlike  save-listing save-listing-277418"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b3.jpg" alt="Cho thuê căn hộ dịch vụ tòa nhà Léman Luxury tầng 14"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="#" class="title">Cho thuê căn hộ dịch vụ tòa nhà Léman Luxury tầng 14</a></h2>
                            <div class="imeta-1"> <b>Đ. Nguyễn Đình Chiểu, P.6, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>2</strong></span> <span><i class="fa fa-building"></i> <strong>2</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>591,7 ngàn/m²</b></div>
                            </div>
                            <div class="wprice">
                                <div class="imeta-2"> <span><b>44,374 triệu</b></span> <span><b>75 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277620" listingid="277620" object='{"id":277620 }' class="btnlike  save-listing save-listing-277620"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b1.jpg" alt="Căn hộ Singapore cho thuê trung tâm Quận 3"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="?ctrl=home&act=chitiet" class="title">Căn hộ Singapore cho thuê trung tâm Quận 3</a></h2>
                            <div class="imeta-1"> <b>Đ. Trần Quang Diệu, P.13, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>1</strong></span> <span><i class="fa fa-building"></i> <strong>1</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>188,9 ngàn/m²</b></div>
                            </div>
                            <div class="group"> <a href="#"> Dự án : <span class="cl1 w5" title=""></span></a> </div>
                            <div class="imeta-3"> <span> <a href="#"> Thuê: <strong class="cl1">5</strong> </a> </span> </div>
                            <div class="wprice">
                                <div class="imeta-2"> <span><b>8,5 triệu</b></span> <span><b>45 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277377" listingid="277377" object='{"id":277377 }' class="btnlike  save-listing save-listing-277377"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="item is-feature">
                        <a href="#" class="img tRes_82"> <img class="lazy-hidden" src="./danhsach/assets/images/ver-4/pc/b3.jpg" alt="Cho thuê căn hộ dịch vụ tòa nhà Léman Luxury tầng 14"> </a>
                        <div class="divtext ">
                            <h2 class="height-search"><a href="#" class="title">Cho thuê căn hộ dịch vụ tòa nhà Léman Luxury tầng 14</a></h2>
                            <div class="imeta-1"> <b>Đ. Nguyễn Đình Chiểu, P.6, Q.3</b> </div>
                            <div class="imeta-3"> <span><i class="fa fa-compass"></i> <strong></strong></span> <span><i class="fa fa-bed"></i> <strong>2</strong></span> <span><i class="fa fa-building"></i> <strong>2</strong></span> </div>
                            <div class="label"> <span class="label-1">Thuê</span>
                                <div class="price2"><b>591,7 ngàn/m²</b></div>
                            </div>
                            <div class="wprice">
                                <div class="imeta-2"> <span><b>44,374 triệu</b></span> <span><b>75 m²</b></span> </div>
                                <div link="thue/can-ho/hcm/quan-3/id277620" listingid="277620" object='{"id":277620 }' class="btnlike  save-listing save-listing-277620"> <span><i class="fa fa-heart-o"></i></span> </div>
                            </div>
                        </div>
                        <a href="#"> </a>
                    </div>
                </div>
                
            </div>
            <div class="pages">
                                <ul class="page-numbers">
                                    <li class="hidden">
                                        <a class="prev page-numbers" href="#"> <i class="fa fa-arrow-right ix"></i> </a>
                                    </li>
                                    <li><a class="page-numbers current " href="#">1</a></li>
                                    <li><a class="page-numbers paginate" href="#">2</a></li>
                                    <li><a class="page-numbers paginate" href="#">3</a></li>
                                    <li><a class="page-numbers paginate" href="#">4</a></li>
                                    <li><a class="page-numbers paginate" href="#">5</a></li>
                                    <li class="">
                                        <a class="next page-numbers" href="thue/can-ho/hcm/p2"> <i class="fa fa-arrow-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
        </div>
        
        <div class="item2">
            <div class="form-timkiem">
                <div class="div-text">
                    <p>Tìm nhanh</p>
                </div>
                <form action="#" method="post" class="tim-kiemm">
                    <label for="" class="form-txt">Loại căn hộ :</label>
                    <div class="div">
                        <select name="" id="" style="font-size: 10pt;">
                          <option value="" checked>Nhà Riêng</option>
                          <option value="">Đất Nền</option>
                          <option value="">Chung Cư/Căn Hộ</option>
                          <option value="">Đất Nền Dự Án</option>
                      </select>
                    </div>
                    <div class="div">
                        <select name="" id="" style="font-size: 10pt;">
                        <option value="" checked>Hồ Chí Minh</option>
                    </select>
                    </div>
                    <div class="div">
                        <select name="" id="" style="font-size: 10pt;">
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

            <div class="form-timkiem">
                <div class="div-text">
                    <p>Các quận lân cận</p>
                </div>
                <form action="#" method="post" class="tim-kiemm">


                    <ul class="lancan">
                        <li>

                            <a href="#"> <span class=""> Quận 2 </span> <span class="count">(1186)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận 7 </span> <span class="count">(652)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận 9 </span> <span class="count">(611)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận 4 </span> <span class="count">(514)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận Bình Thạnh </span> <span class="count">(496)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận Tân Phú </span> <span class="count">(381)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận 1 </span> <span class="count">(312)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận 10 </span> <span class="count">(278)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Huyện Nhà Bè </span> <span class="count">(223)</span> </a>

                        </li>
                        <li>

                            <a href="#"> <span class=""> Quận Bình Tân </span> <span class="count">(212)</span> </a>

                        </li>
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
                            <label for="" class="label-end"><a href="#"  style="color: white;font-size: 10pt;">Đăng tin ngay</a></label>
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
            <img src="./uploaded/logo.png" alt="">
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