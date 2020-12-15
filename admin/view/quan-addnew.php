<div class="right__title">Bảng Quận</div>
<p class="right__desc">Thêm Quận/Huyện</p>
<div class="right__formWrapper">
    <form action="/admin/?ctrl=quan&act=insert" onsubmit = "return validateformquan()" name ="myformequan" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
            <label for="title">Tên Quận/Huyện</label>
            <input type="text" id="ten_quan" name="ten_quan" placeholder="Tên quận/huyện">
        </div>
        <button class="btn" type="submit">Thêm</button>
    </form>
</div>
<script>
    function validateformquan() {
    var ten_quan = document.myformequan.ten_quan.value;

    if (ten_quan == null || ten_quan == "" || ten_quan.length < 3) {
        swal("Tên quận không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    }
  

}
</script>