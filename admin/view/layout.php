<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./view/css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <div class="wrapper">
        <div class="container">
            <div class="dashboard">
                <div class="left">
                    <span class="left__icon">
                        <span></span>
                    <span></span>
                    <span></span>
                    </span>
                    <div class="left__content">
                        <div class="left__logo">thuecanho.com.vn</div>
                        <div class="left__profile">
                            <div class="left__image"><img src="./uploaded/godenhome.png" class="" alt=""></div>
                            <p class="left__name">admin</p>
                        </div>
                        <ul class="left__menu">

                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-edit.svg" alt="">Danh sách loại căn hộ<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="<?=ADMIN_URL?>/?ctrl=loai_can&act=index">Danh sách loại căn</a>
                                    <a class="left__link" href="?ctrl=loai_can&act=addnew">Thêm loại căn hộ</a>
                                </div>
                            </li>
                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-edit.svg" alt="">Quản lý căn hộ<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="insert_p_category.html">Danh sách căn hộ</a>
                                    <a class="left__link" href="view_p_category.html">Xem Danh Mục</a>
                                </div>
                            </li>
                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-edit.svg" alt="">Quản lý hình căn hộ<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="">Danh sách hình </a>
                                    <a class="left__link" href="">Thêm hình căn hộ</a>
                                </div>
                            </li>
                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-edit.svg" alt="">Quản lý các quận<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="">Danh sách các quận</a>
                                    <a class="left__link" href="#">Thêm các quận</a>
                                </div>
                            </li>
                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-users.svg" alt="">Quản lý khách hàng<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="<?=ADMIN_URL?>/?ctrl=tai_khoan&act=index">Danh sách khách hàng</a>
                                    <a class="left__link" href="#">Thêm khách hàng</a>
                                </div>
                            </li>
                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-book.svg" alt="">Quản lý đặt lịch<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="#">Danh sách lịch đặt</a>
                                    <a class="left__link" href="#">Thêm lịch đặt</a>
                                </div>
                            </li>

                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-book.svg" alt="">Quản lý bình luận<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="#">Danh sách</a>
                                    <a class="left__link" href="#">Thêm  bình luận</a>
                                </div>
                            </li>

                            <li class="left__menuItem">
                                <div class="left__title"><img src="./view/assets/icon-user.svg" alt="">Admin<img class="left__iconDown" src="./view/assets/arrow-down.svg" alt=""></div>
                                <div class="left__text">
                                    <a class="left__link" href="">Chèn Admin</a>
                                    <a class="left__link" href="">Xem Admins</a>
                                </div>
                            </li>
                            <li class="left__menuItem">
                                <a href="" class="left__title"><img src="./view/assets/icon-logout.svg" alt="">Đăng Xuất</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Bảng thống kê</div>
                       
                        <div class="right__cards">
                            <a class="right__card bg-success" href="view_product.html">
                                <div class="right__cardTitle">Số căn hộ</div>
                                <div class="right__cardNumber">72</div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="./view/assets/arrow-right.svg" alt=""></div>
                            </a>
                            <a class="right__card bg-danger" href="view_customers.html">
                                <div class="right__cardTitle">Số khách Hàng</div>
                                <div class="right__cardNumber">12</div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="./view/assets/arrow-right.svg" alt=""></div>
                            </a>
                            <a class="right__card" href="view_p_category.html">
                                <div class="right__cardTitle">Số lịch đặt</div>
                                <div class="right__cardNumber">4</div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="./view/assets/arrow-right.svg" alt=""></div>
                            </a>
                            <a class="right__card" href="view_orders.html">
                                <div class="right__cardTitle">Số bình luận</div>
                                <div class="right__cardNumber">72</div>
                                <div class="right__cardDesc">Xem Chi Tiết <img src="./view/assets/arrow-right.svg" alt=""></div>
                            </a>
                        </div>
                        <div class="right__table">
                        <?php require_once "$view"?>     
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="./view/js/main.js"></script>
</body>

</html>
<script>
    $(document).ready(function() {
        $('.sua').click(function(add) {
            var delet = $('.delete-loaican');
            delet.css('display', 'block');
        });
        $('.co').click(function(add) {
            var delet = $('.delete-loaican');
            delet.css('display', 'none');
        });
    });
</script>