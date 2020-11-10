<div class="right__title">Bảng khách hàng</div>
<p class="right__desc">Chèn khách hàng</p>
<div class="right__formWrapper">
    <form action="<?= ADMIN_URL ?>/?ctrl=loai_can&act=insert" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên khách hàng</label>
            <input type="text" name="tenkh" placeholder="Họ và tên">
        </div>
        <div class="right__inputWrapper">
            <label for="title">Email</label>
            <input type="email" name="email" placeholder="Email">
        </div>
        <div class="right__inputWrapper">
            <label for="title">Số điện thoại</label>
            <input type="number" name="sdt" placeholder="số điện thoại">
        </div>
        <div class="right__inputWrapper">
            <label for="title">Mật khẩu</label>
            <input type="password" name="pass" placeholder="Mật khẩu">
        </div>
        <div class="right__inputWrapper">
            <input type="file" name="file" id="file" class="inputfile" />
            <label for="file"><i class="fas fa-upload"></i>  Tải hình lên</label>
        </div>
        <button class="btn" type="submit">Chèn</button>
    </form>
</div>