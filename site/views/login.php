<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập </title>
    <link rel="stylesheet" href="./views/css/login.css">
    <script src='https://kit.fontawesome.com/a076d05399.js'></script>

</head>

<body>

    <!-- <div class="header">
        <div class="img">
            <img src="../img/logo.png"  alt="">
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
                    <img src="img/logo.png" alt="">
                </div>
                <div class="nav-menu">
                    <ul>
                        <li><a href="index.php">Trang chủ </a> </li>
                        <li><a href="#">Dịch vụ </a></li>
                        <li><a href="#">Danh sách </a> </li>
                        <li><a href="#">Giới thiệu </a></li>
                        <li><a href="#">Liên hệ </a></li>
                        <li><a href="?act=danhnhap">Đăng nhập </a></li>
                        <li><a href="#" style="padding: 5px 10px;background-color: orange;border-radius: 12px;">Đăng tin</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    <div class="container mt" style="margin-top: 160px;" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Đăng ký </h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                </div>
                <span>hoặc sửa dụng email để đăng ký</span>
                <input type="text" placeholder="Họ và tên" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Mật khẩu" />
                <button>Đăng ký</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Đăng nhập </h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                </div>
                <span>hoặc sử dụng tài khoản của bạn</span>
                <input type="text" placeholder="Tên đăng nhập" />
                <input type="password" placeholder="Mật khẩu" />
                <a href="#">quên mật khâu ?</a>
                <button>Đăng nhập</button>
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