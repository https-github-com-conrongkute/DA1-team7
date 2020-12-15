<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập </title>
    <link rel="stylesheet" href="./views/css/login.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"> </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css">
</head>

<body>
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
                    <!-- <li><a href="?act=danhnhap">Đăng nhập </a></li> -->
                    <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                    <li><a href="?ctrl=home&act=dangnhap">Đăng nhập</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mt" style="margin-top: 160px;" id="container">
        <?php if (isset($row) != true) { ?>
            <div class="form-container sign-up-container">
                <form action="?act=dangky" method="post">
                    <h1>Đăng ký </h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    </div>
                    <span>hoặc sửa dụng email để đăng ký</span>
                    <input type="text" placeholder="Họ và tên" name="ho_ten" id="ho_ten" value="<?php if (isset($ho_ten) == true) echo $ho_ten; ?>" />
                    <p id="checkid1"></p>
                    <input type="text" placeholder="Tên đăng nhập" name="user" id="user" value="<?php if (isset($user) == true) echo $user; ?>" />
                    <p id="checkid2"></p>
                    <input type="text" placeholder="Email" name="email" value="<?php if (isset($email) == true) echo $email; ?>" />
                    <!-- <p id="checkid"></p> -->
                    <input type="password" id="mk" placeholder="Mật khẩu" name="pass" />
                    <p id="checkid3"></p>
                    <script>
                        $(document).ready(function() {
                            $('#mk').blur(function(e) {
                                var u = $(this).val();
                                $('#checkid3').css('display', 'block');
                                $('#checkid3').load('?act=kiemloi&pass=' + u);
                            });
                            $('#user').blur(function(e) {
                                var u = $(this).val();
                                $('#checkid2').css('display', 'block');
                                $('#checkid2').load('?act=kiemloi&user=' + u);
                            });
                            $('#ho_ten').blur(function(e) {
                                var u = $(this).val();
                                $('#checkid1').css('display', 'block');
                                $('#checkid1').load('?act=kiemloi&ho_ten=' + u);
                            });
                        });
                    </script>
                    <button id="btn_submit_dk" type="submit">Đăng ký</button>
                </form>
            </div>
            <!-- Thông báo email -->
            <?php if (isset($erro['email']) == true) { ?>
                <script>
                    swal("<?= $erro['email'] ?>", "Nhấn để tiếp tục !", "error");
                </script>
            <?php } ?>
            <!-- THông báo đăng ký thành công -->
            <?php if (isset($message) == true) { ?>
                <div class="g_l-mail-px g_l-mail-bg">
                    <form action="?act=gui_lmail" method="post" class="form__glm">
                        <input type="hidden" name="ma_tk" value="<?= $idUser ?>">
                        <h2 style="margin-bottom: 50px;width: 100%;text-align: center;">Kiểm tra email để kích hoạt tài khoản</h2>
                        <input type="submit" value="Gửi lại mail">
                    </form>
                </div>
            <?php } ?>
            <?php if (isset($messagequen) == true) { ?>
                <script>
                    swal("Kiểm tra email để xác nhận tài khoản");
                </script>
            <?php } ?>
            <?php if (isset($messagethanhcong) == true) { ?>
                <script>
                    swal(" Đổi mật khẩu thành công ", "Đăng nhập ngay nào", "success");
                </script>
            <?php } ?>
            <?php if (isset($kichhoattk) == true) { ?>
                <script>
                    swal("<?= $kichhoattk ?>", "Đăng nhập thôi nào !", "success");
                </script>
            <?php } ?>
            <?php if (isset($error_tk) == true) { ?>
                <script>
                    swal("<?= $error_tk ?>", "Nhấp vào đây để tiếp tục !", "error");
                </script>
            <?php } ?>
            <div class="form-container sign-in-container">
                <form action="?act=dangnhap_" method="post">
                    <h1>Đăng nhập </h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    </div>
                    <span>hoặc sử dụng tài khoản của bạn</span>
                    <input type="text" placeholder="Tên đăng nhập" name="tentk" value="<?php if (isset($tentk) == true) echo $tentk; ?>" />
                    <input type="password" placeholder="Mật khẩu" name="pass" />
                    <a href="?act=quenmk">Quên mật khâu ?</a>
                    <button type="submit">Đăng nhập</button>

                    <?php if (isset($error_dn) && ($error_dn != "")) { ?>
                        <script>
                            swal("<?= $error_dn ?>", "Nhập lại !", "warning");
                        </script>
                    <?php  } ?>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Chào mừng trở lại!</h1>
                        <p>Để giữ kết nối với chúng tôi bạn hãy đăng nhập</p>
                        <button class="ghost" id="signIn">Đăng nhập</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, bạn!</h1>
                        <p>Nếu bạn chưa có tài khoản hãy ấn vào đăng ký</p>
                        <button class="ghost" id="signUp">Đăng ký</button>
                    </div>
                </div>
            </div>
        <?php } else {
            require_once $row;
        }
        ?>
    </div>


    <!-- <script src="jq/jquery.js"></script> -->
    <script>
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    </script>

</body>

</html>