<div class="right__title">Bảng Quận/Huyện</div>
<p class="right__desc">Sửa tên Quận/Huyện</p>
<div class="right__formWrapper">
    <form action="<?=ADMIN_URL?>/admin/?ctrl=quan&act=update" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên loại căn hộ</label>
            <input type="text" name="ten_quan" value="<?=$dsq["ten_quan"]?>">
            <input type="hidden" name="ma_quan" value="<?=$dsq["ma_quan"]?>">
        </div>
        <button class="btn" type="submit">Cập nhật</button>
    </form>
</div>