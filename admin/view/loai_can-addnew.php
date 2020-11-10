<div class="right__title">Bảng loại căn hộ</div>
<p class="right__desc">Chèn loại căn hộ</p>
<div class="right__formWrapper">
    <form action="<?=ADMIN_URL?>/?ctrl=loai_can&act=insert" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên loại căn hộ</label>
            <input type="text" name="tenloai" placeholder="Tên loại căn">
        </div>
        <button class="btn" type="submit">Thêm</button>
    </form>
</div>
