<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập </title>
    <link rel="stylesheet" href="./views/css/login.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>s
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js"> </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css">
</head>

<body>

    <!-- <div class="header">
        <div class="img">
            <img src="../../uploaded/logo.png"  alt="">
        </div>
        <div class="hdtext">
            <ul>
                <li><a href="index.html">Trang chủ</a></li>
                <li><a href="#">Dịch vụ</a></li>
                <li><a href="#">Danh sách</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li><a href="#">Liên hệ</a></li>
                <li><a href="login.html">Đăng nhập</a></li>
                <li><a href="#">Đăng Ký</a></li>
            </ul>
        </div>
        
    </div> -->
    <nav class="menu-logo">
        <div class="menu-logo-bg">
            <div class="nav-logo">
                <img src="../uploaded/logo.png" alt="">
            </div>
            <div class="nav-menu">
                <ul>
                    <li><a href="index.php">Trang chủ </a> </li>
                    <li><a href="#">Dịch vụ </a></li>
                    <li><a href="#">Danh sách </a> </li>
                    <li><a href="?ctrl=home&act=about">Giới thiệu </a></li>
                    <li><a href="#">Liên hệ </a></li>
                    <!-- <li><a href="?act=danhnhap">Đăng nhập </a></li> -->
                    <li><a href="?ctrl=home&act=dangtin" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                    <li><a href="?ctrl=home&act=dangnhap">Đăng nhập</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mt" style="margin-top: 160px;" id="container">
        <div class="form-container sign-up-container">
            <form action="?act=dangky" method="post">
                <h1>Đăng ký </h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                </div>
                <span>hoặc sửa dụng email để đăng ký</span>
                <input type="text" placeholder="Họ và tên" name="user" />

                <input type="text" placeholder="Email" name="email" />

                <input type="password" placeholder="Mật khẩu" name="pass" />
               
                <button id="btn_submit_dk" type="submit">Đăng ký</button>
            </form>
        </div>
        <!-- Thông báo lỗi matkhau -->
        <?php if (isset($erro['pass']) == true) { ?>
            <script>
                swal("<?= $erro['pass'] ?>", "Nhập lại !", "error");
            </script>
        <?php } ?>
          <!-- Thông báo lỗi email -->
          <?php if (isset($erro['email']) == true) { ?>
            <script>
                swal("<?= $erro['email'] ?>", "Nhập lại !", "error");
            </script>
        <?php } ?>
         <!-- Thông báo lỗi ten dn -->
        <?php if (isset($erro['user']) == true) { ?>
            <script>
                swal("<?= $erro['user'] ?>", "Nhập lại !", "warning");
            </script>
        <?php } ?>
        <!-- THông báo đăng ký thành công -->
        <?php if (isset($message) == true) { ?>
            <script>
                swal("Thành công", "Nhấn để tiếp tục !", "success");
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
                <input type="text" placeholder="Tên đăng nhập" name="tentk" />
                <input type="password" placeholder="Mật khẩu" name="pass" />
                <a href="#">quên mật khâu ?</a>
                <button type="submit">Đăng nhập</button>
                <p>
                    <?php if (isset($message) && ($message != "")) {
                        echo $message;
                    } ?></p>
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
    </div>


    <script src="jq/jquery.js"></script>
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