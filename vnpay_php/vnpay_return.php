<?php
    ob_start();
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Thông tin thanh toán</title>
        <!-- Bootstrap core CSS -->
        <link href="/vnpay_php/assets/bootstrap.min.css" rel="stylesheet"/>
        <!-- Custom styles for this template -->
        <link href="/vnpay_php/assets/jumbotron-narrow.css" rel="stylesheet">         
        <script src="/vnpay_php/assets/jquery-1.11.3.min.js"></script>
        <link rel="stylesheet" href="/vnpay_php/assets/hoadon.css">
    </head>
    <body>
        <?php
        require_once("./config.php");
        $vnp_SecureHash = $_GET['vnp_SecureHash'];
        $inputData = array();
        foreach ($_GET as $key => $value) {
            if (substr($key, 0, 4) == "vnp_") {
                $inputData[$key] = $value;
            }
        }
        unset($inputData['vnp_SecureHashType']);
        unset($inputData['vnp_SecureHash']);
        ksort($inputData);
        $i = 0;
        $hashData = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashData = $hashData . '&' . $key . "=" . $value;
            } else {
                $hashData = $hashData . $key . "=" . $value;
                $i = 1;
            }
        }

        //$secureHash = md5($vnp_HashSecret . $hashData);
		$secureHash = hash('sha256',$vnp_HashSecret . $hashData);
        ?>
        <!--Begin display -->
        <div class="container">
            <div class="header clearfix">
                <h3 class="text-muted">Thông tin đơn hàng</h3>
            </div>
            <div class="table-responsive">
                <div class="form-group">
                    <label class="todam">Mã đơn hàng:</label>
                    
                    <label><?php echo $_GET['vnp_TxnRef'] ?></label>
                </div>    
                <div class="form-group">

                    <label class="todam">Số tiền:</label>
                    <label><?=number_format($_GET['vnp_Amount']/100) ?> VNĐ</label>
                </div>  
                <div class="form-group">
                    <label class="todam" >Nội dung thanh toán:</label>
                    <label ><?php echo $_GET['vnp_OrderInfo'] ?></label>
                </div> 
                <div class="form-group">
                    <label class="todam" >Mã phản hồi (vnp_ResponseCode):</label>
                    <label><?php echo $_GET['vnp_ResponseCode'] ?></label>
                </div> 
                <div class="form-group">
                    <label class="todam">Mã GD Tại VNPAY:</label>
                    <label><?php echo $_GET['vnp_TransactionNo'] ?></label>
                </div> 
                <div class="form-group">
                    <label class="todam">Mã Ngân hàng:</label>
                    <label><?php echo $_GET['vnp_BankCode'] ?></label>
                </div> 
                <div class="form-group">
                    <label class="todam">Thời gian thanh toán:</label>
                    <label><?php echo $_GET['vnp_PayDate'] ?></label>
                </div> 
                <div class="form-group">
                    <label class="todam">Kết quả:</label>
                    <label>
                        <?php
                        if ($secureHash == $vnp_SecureHash) {
                            if ($_GET['vnp_ResponseCode'] == '00') {
                                $order_id = $_GET['vnp_TxnRef'];
                                $money = $_GET['vnp_Amount']/100;
                                $note = $_GET['vnp_OrderInfo'];
                                $vnp_response_code = $_GET['vnp_ResponseCode'];
                                $code_vnpay = $_GET['vnp_TransactionNo'];
                                $code_bank = $_GET['vnp_BankCode'];
                                $time = $_GET['vnp_PayDate'];
                                $date_time = substr($time, 0, 4) . '-' . substr($time, 4, 2) . '-' . substr($time, 6, 2) . ' ' . substr($time, 8, 2) . ' ' . substr($time, 10, 2) . ' ' . substr($time, 12, 2);
                                include("../system/database.php");
                                $taikhoan = $_SESSION["id"];
                                $ma_can = $_SESSION["ma_can"];
                                $sql = "SELECT * FROM payments WHERE order_id = '$order_id'";
                                $query = mysqli_query($conn, $sql);
                                $row = mysqli_num_rows($query);
                                
                                if ($row > 0) {
                                    $sql = "UPDATE payments SET order_id = '$order_id', money = '$money', note = '$note', vnp_response_code = '$vnp_response_code', code_vnpay = '$code_vnpay', code_bank = '$code_bank' WHERE order_id = '$order_id'";
                                    execute($sql);
                                } else {
                                    $sql = "INSERT INTO payments(order_id, thanh_vien, ma_can, money, note, vnp_response_code, code_vnpay, code_bank, time) VALUES ('$order_id', '$taikhoan', '$ma_can','$money', '$note', '$vnp_response_code', '$code_vnpay', '$code_bank','$date_time')";
                                    execute($sql);

                                    $sql = "UPDATE can_ho SET an_hien = 1 WHERE ma_can = '$ma_can'";
                                    execute($sql);
                                }
                                
                                echo "Giao dịch thành công";
                                unset($_SESSION["ma_can"]);
                            } else {
                                echo "Giao dịch không thành công";
                            }
                        } else {
                            echo "Chữ ký không hợp lệ";
                        }
                        ?>

                    </label>
                    <br>
                    <a href="/site/?act=ch-dd&ma_tk=<?=$_SESSION["id"]?>">
                        <button style="background-color: orangered; padding: 5px; border-radius: 10px; border: none; color: white; margin-top: 20px;">Quay lại </button>
                    </a>
                </div> 
            </div>
            <p>
                &nbsp;
            </p>
            <footer class="footer">
                <p>&copy; Thanh toán phí đăng bài GoldenHome.com</p>
            </footer>
        </div>  
    </body>
</html>
