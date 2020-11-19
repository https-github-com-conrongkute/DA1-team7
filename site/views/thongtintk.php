<div class="tt-back-gr mt">
    <div class="boxcenter">
        <div class="tt-bg">
            <div class="tt-left">
                <center style="margin-top: 50px;">
                    <div style="width: 100px;height: 100px;border-radius: 50%;background-color: #ccc;">
                   <span class="fas fa-user" style="font-size: 30pt;line-height: 100px;color:white;"></span>
                   </div>
                   <h4>Đinh Long</h4>
                   <em>Thành viên từ 1/1/2020</em>   
                </center>
                <hr>
                <ul>
                    <li><i class="fas fa-cog"></i><a href="?act=thongtintk">Thông tin tài khoản</a></li>
                    <li><i class="fas fa-lock"></i><a href="?act=doimk">Đổi mật khẩu</a></li>
                    <li><i class="fas fa-home"></i><a href="">Căn hộ đã đăng</a></li>
                    <li><i class="fas fa-sign-out-alt"></i><a href="">Đăng xuất</a></li>
                </ul>
            </div>
            <div class="tt-right">
                <form action="" method="post" class="form-tk">
                   <h4 style="margin: 40px 0px;font-weight: bold;font-size: 16pt;">Thông tin cá nhân</h4>
                   <div class="tt-right-row">
                       <label>Họ và tên</label>
                       <input type="text" name="tenkh" id="" value="<?=$_SESSION['name']?>">
                       <input type="hidden" name="ma_tk" value="<?=$_SESSION['id']?>">
                   </div>
                   <div class="tt-right-row">
                       <label>Ngày sinh</label>
                       <input type="date" name="ns" id="" >
                   </div>
                   <div class="tt-right-row">
                     <label>Giới tính</label>
                      <select name="gt" id="">
                          <option value="">Giới tính</option>
                          <option value="" <?php if($_SESSION['gioitinh']==1) echo 'selected'?>>Nam</option>
                          <option value="" <?php if($_SESSION['gioitinh']==0) echo 'selected'?>>Nữ</option>
                      </select>
                   </div>
                   <div class="tt-right-row">
                       <label>Email</label>
                       <input type="email" name="email" id=""  value="<?=$_SESSION['email']?>">
                   </div>
                   <div class="tt-right-row">
                       <label>Số điện thoại</label>
                       <input type="text" name="sdt" id=""  value="<?=$_SESSION['sdt']?>">
                   </div>
                   <button class="btn-tk">Lưu</button>
                </form>
            </div>
        </div>
    </div>
</div>