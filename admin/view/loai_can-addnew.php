<div class="right__title">Bảng loại căn hộ</div>
<p class="right__desc">Chèn loại căn hộ</p>
<div class="right__formWrapper">
    <form action="/admin/?ctrl=loai_can&act=insert" onsubmit = "return validateformloaican()" name ="myformloaican" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên loại căn hộ</label>
            <input type="text" id="tenloai" name="tenloai" placeholder="Tên loại căn">
        </div>
        <button class="btn" type="submit">Thêm</button>
    </form>
</div>
<script>
    function validateformloaican() {
    var tenloai = document.myformloaican.tenloai.value;

    if (tenloai == null || tenloai == "" || tenloai.length < 3) {
        swal("Tên loại căn không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    }
  

}
</script>