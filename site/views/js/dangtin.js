function validateform() {
    var ten = document.myform.ten_can_ho.value;
    var gia = document.myform.gia_thue.value;
    var dien_tich = document.myform.dien_tich.value;
    var tang = document.myform.tang.value;
    var tien_ich = document.myform.tien_ich.value;
    var ma_loai = document.myform.ma_loai.value;
    var ma_quan = document.myform.ma_quan.value;

    var phuong = document.myform.phuong.value;
    var dia_chi = document.myform.dia_chi.value;
    var so_phong_ngu = document.myform.so_phong_ngu.value;
    var so_phong_vs = document.myform.so_phong_vs.value;
    var hinh = document.myform.hinh.value;
    var hinha = document.myform.hinha.value;
    var hinhb = document.myform.hinhb.value;
    var hinhc = document.myform.hinhc.value;

    if (ten == null || ten == "" || ten.length < 10) {
        swal("Tiêu đề căn hộ không hợp lệ", "Vui lòng đặt lại !", "warning");

        return false;
    } else if (Number(gia) < 100000) {
        swal("Giá thuê không hợp lệ", "Vui lòng đặt lại !", "warning");

        return false;
    } else if (Number(dien_tich) < 1) {
        swal("Diện tích không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    } else if (Number(tang) < 0 || tang == "") {
        swal("Số tầng không hợp lệ", "Vui lòng đặt lại !", "warning");
        return false;
    } else if (tien_ich == null || tien_ich == "") {
        swal("Tiện ích rỗng", "Vui lòng nhập lại !", "warning");
        return false;
    } else if (ma_loai == null || ma_loai == "") {
        swal("Bạn chưa chọn loại căn", "Vui lòng chọn !", "warning");
        return false;
    } else if (ma_quan == null || ma_quan == "") {
        swal("Bạn chưa chọn quận", "Vui lòng chọn !", "warning");
        return false;
    } else if (phuong == null || phuong == "") {
        swal("Bạn chưa chọn phường", "Vui lòng chọn !", "warning");
        return false;
    } else if (dia_chi == null || dia_chi == "" || dia_chi.length < 10) {
        swal("Địa chỉ không hợp lệ", "Vui lòng nhập lại !", "warning");
        return false;
    } else if (Number(so_phong_ngu) == "" || Number(so_phong_ngu) < 0) {
        swal("Số phòng ngủ không hợp lệ", "warning");
        return false;
    } else if (Number(so_phong_vs) == "" || Number(so_phong_vs) < 0) {
        swal("Số phòng ngủ không hợp lệ", "warning");
        return false;
    } else if (hinh == null || hinh == "") {
        swal("Bạn chưa tải hình 1", "Vui lòng tải hình !", "warning");
        return false;
    } else if (hinha == null || hinha == "") {
        swal("Bạn chưa tải hình 2", "Vui lòng tải hình !", "warning");
        return false;
    } else if (hinhb == null || hinhb == "") {
        swal("Bạn chưa tải hình 3", "Vui lòng tải hình !", "warning");
        return false;
    } else if (hinhc == null || hinhc == "") {
        swal("Bạn chưa tải hình 4", "Vui lòng tải hình !", "warning");
        return false;
    }

}
// onsubmit = "return validateform()"
// name = "myform"
// <
// script src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.js" > < /script> <
// link rel = "stylesheet"
// href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css" >