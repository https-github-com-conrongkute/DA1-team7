<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./view/css/login.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
</head>

<body>
    <div class="container">
        <div class="wrapper-auto">
            <div class="form-backgroud">
                <div class="form-right">
                    <form action="login.php" method="post" class="auto">
                        <h2 class="mt-10">Đăng nhập</h2>
                        
                        <div class="form-row">
                            <label for="" >Tên đăng nhập</label>
                            <input type="text" name="tendn" id="" placeholder="Nhập tên đăng nhập" class="tendn">
                        </div>
                        <div class="form-row">
                            <label for="">Mật khẩu</label>
                            <input type="password" name="pass" id="" placeholder="Mật khẩu của bạn" class="pass">
                            <!-- <a href="" style="text-align: right;line-height: 30px;margin-bottom: 20px;color: black;text-decoration: none;font-size: 14px;">Quên mật khẩu ?</a> -->
                        </div>
                        <div class="form-row">
                            <input type="submit" value="Đăng nhập" name="dn" class="dn">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>