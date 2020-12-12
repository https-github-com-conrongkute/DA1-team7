<div class="divdl">
            <i data-dismiss="modal" class="glyphicon glyphicon-remove"></i>
            <h1>ĐẶT LỊCH XEM</h1>
            <?php if (isset($_SESSION["id"])) {
                   
                      ?>
                      <form action="?ctrl=home&act=datlichxem"  method="post" name="myfor"  onsubmit="return validatefor()">
                              <input type="hidden" name="ma_can" value="<?=$idcanho["ma_can"]?>">
                              <input type="hidden" name="ngay_dat" value="<?=date("Y-m-d")?>">
                              <input class="ipdl4" id="ngay_xem" name="ngay_xem" min="<?=date("Y-m-d")?>" type="date" placeholder="Chọn ngày">
                              <input type="hidden" name="ma_tk" value="<?=$_SESSION["id"]?>">
                              <input type="submit" class="guitt" id="dat" name="dat" style="background-color: orangered; font-size: 12pt; color: white; " value="Gửi thông tin">
                    
                    </form>
                    <?php
                    if (isset($message)&&($message!="")) {
                              echo '<p>'.$message.'</p>';
                    }
                    ?>
                      <?php
            }
            else{
                      ?>
                      <form action="">
                    <input class="ipdl4" type="date" placeholder="Chọn ngày">
                    <div class="guitt">
                    <a href="?ctrl=home&act=dangnhap">Bạn cần đăng nhập</a>
                    </div>
                    </form>
                      <?php
            }?>

            
        </div>

