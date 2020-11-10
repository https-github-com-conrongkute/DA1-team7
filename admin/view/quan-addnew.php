<div class="right__title">Bảng Quận</div>
<p class="right__desc">Thêm Quận/Huyện</p>
<div class="right__formWrapper">
    <form action="<?=ADMIN_URL?>/?ctrl=quan&act=insert" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên Quận/Huyện</label>
            <input type="text" name="ten_quan" placeholder="Tên quận/huyện">
        </div>
        <button class="btn" type="submit">Thêm</button>
    </form>
</div>