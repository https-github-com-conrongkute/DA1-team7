
                <form action="?act=doimk_" method="post" class="form-tk">
                   <h4 style="margin: 40px 0px;font-weight: bold;font-size: 16pt;">Đổi mật khẩu</h4>
                   <div class="tt-right-row">
                       <label for="">Mật khẩu cũ</label>
                       <input type="password" name="passcu" id="">
                   </div>
                   <div class="tt-right-row">
                       <label for="">Mật khẩu mới</label>
                       <input type="password" name="passnew" id="">
                   </div>
                   <div class="tt-right-row">
                       <label for="">Nhập lại mật khẩu mới</label>
                       <input type="password" name="repassnew" id="">
                       <input type="hidden" name="ma_tk" value="<?=$_SESSION['id']?>">
                   </div>
                   <button class="btn-tk">Lưu</button>
                   <?php if(isset($message)==true){  ?>
                    <p style="margin-top: 30px;"><?=$message?></p>
                  <?php } ?>
                </form>
           