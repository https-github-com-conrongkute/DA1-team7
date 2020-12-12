<div class="right__title">Bảng loại căn hộ</div>
<p class="right__desc">Sửa tên loại căn hộ</p>
<div class="right__formWrapper">
    <form action="/admin/?ctrl=loai_can&act=update" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên loại căn hộ</label>
            <input type="text" name="tenloai" value="<?=$dslc["ten_can"]?>">
            <input type="hidden" name="maloai" value="<?=$dslc["ma_loai"]?>">
        </div>
        <button class="btn" type="submit">Cập nhật</button>
    </form>
</div>