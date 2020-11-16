<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thông báo</title>
    <link rel="stylesheet" href="./view/css/main.css">
</head>

<body>
    <?php if (isset($message) == true) { ?>
        <!-- Thông báo hãy đăng nhập -->
        <div class="tblogin-bg">
            <div class="tblogin-form">
                <div class="tblogin-container">
                    <h3><?= $message ?></h3>
                    <div class="nut-ys-n">
                        <!-- <a class="t-dn" href="#">Thoát</a> -->
                        <a class="t-dn" href="index.php" style="color: white;">OK</a>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
    <?php if (isset($messege) == true) { ?>
        <!-- Thông báo hãy đăng nhập -->
        <div class="tblogin-bg">
            <div class="tblogin-form">
                <div class="tblogin-container">
                    <h3><?= $messege ?></h3>
                    <div class="nut-ys-n">
                        <!-- <a class="t-dn" href="#">Thoát</a> -->
                        <a class="t-dn" href="login.php"  style="color: white;">OK</a>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
</body>

</html>