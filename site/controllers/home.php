<?php
session_start();
require_once "PHPMailer-master/src/PHPMailer.php";
require_once "PHPMailer-master/src/SMTP.php";
require_once 'models/home.php';
$act = "index";
if (isset($_GET['act']) == true) $act = $_GET['act'];
switch ($act) {
  case 'index':
    //Xem căn hộ
    $ds_lc = getLoaican();
    $ds_ch = getALLcan_hoNew();
    $ds_ch2 = getALL_canhoNew2();
    $quan = getallquan();
    $loaican=getallloai_can();
    require_once 'views/layout.php';
    break;
  case 'chi_tiet':
    if (isset($_GET['canhoid']) == true) {
      $can_ho = getcan_hoByid($_GET['canhoid']);
      require_once 'views/chi_tiet.php';
    }
    break;
  case 'dat_lich':
    if (isset($_GET['canhoid']) == true) {
      $idcanho = getcan_hoByid($_GET['canhoid']);
      require_once 'views/dat_lich.php';
    }
    break;

    // thay doi thông tin tk
  case 'thaydoitt':
    $tentk = $_POST['tenkh'];

    break;
  case 'dangnhap':
    require_once 'views/login.php';
    break;
    // dang ký:
  case 'dangky':
    $erro = array();
    // Kiểm lỗi
    if (empty($_POST['user'])) {
      $erro['user'] = "Tên tài không để trống";
    } elseif (checktkdn($_POST['user'])) {
      $erro['user'] = 'Tài khoản tồn tại !';
    } else {
      $user = $_POST['user'];
    }
    //Kiểm lỗi họ tên
    if (empty($_POST['ho_ten'])) {
      $erro['ho_ten'] = "Họ tên không để trống";
    } else {
      $ho_ten = $_POST['ho_ten'];
    }
    // Kiểm lỗi mật khẩu
    if (empty($_POST['pass'])) {
      $erro['pass'] = "Mật khẩu không để trống";
    } elseif (strlen($_POST['pass']) < 6) {
      $erro['pass'] = "Mật khẩu của bạn quá ngắn !";
    } else {
      $pass = $_POST['pass'];
    }
    // check email
    if (empty($_POST['email'])) {
      $erro['email'] = 'Email không để trống !';
    } elseif (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $erro['email'] = 'Email không hợp lệ !';
    } elseif (checktkemail($_POST['email'])) {
      $erro['email'] = 'Email tồn tại !';
    } else {
      $email = $_POST['email'];
    }

    if (empty($erro)) {
      // lưu thông tin đăng nhập
      $message = "Thành công !";
      $random = substr(md5(rand()), 20);
      $idUser = Luuthongtintk($ho_ten, $user, $pass, $email, $random);
      // GỬi mail
      // require_once "PHPMailer-master/src/PHPMailer.php";
      // require_once "PHPMailer-master/src/SMTP.php";
      $mail = new PHPMailer\PHPMailer\PHPMailer(true);  //true: enables exceptions
      try {
        $mail->SMTPDebug = 0;  // Enable verbose debug output
        $mail->isSMTP();
        $mail->CharSet  = "utf-8";
        $mail->Host = 'smtp.gmail.com';  //SMTP servers
        $mail->SMTPAuth = true; // Enable authentication
        $mail->Username = 'longdhai2@gmail.com';  // SMTP username
        $mail->Password = 'hailong289';   // SMTP password
        $mail->SMTPSecure = 'ssl';  // encryption TLS/SSL 
        $mail->Port = 465;  // port to connect to                
        $mail->setFrom('longdhai2@gmail.com', 'goldenhome');
        $mail->addAddress($email, $user); //mail và tên người nhận       
        $mail->isHTML(true);  // Set email format to HTML
        $mail->Subject = 'Kích hoạt tài khoản';
        $linkKH = "<a href='http://localhost:/Github/DA1-team7/site/?act=kichhoat&id=" . $idUser . "'>Nhấp vào đây</a>";
        // $linKH = sprintf($linkKH, $idUser);
        $mail->Body = "<h4>Chào mừng thành viên mới</h4>Kích hoạt tài khoản: " . $linkKH;
        $mail->send();
        // $message = 'kích hoạt tài khoản !';
       
      } catch (Exception $e) {
        $message = "Mail không được gửi !";
         echo 'Mail không gửi được. Lỗi: ', $mail->ErrorInfo;
      }
     
      require_once 'views/login.php';
    }
    require_once 'views/login.php';
    break;
  case 'gui_lmail':
    $ma_tk = khachhang($_POST['ma_id']);
    $idUser = $ma_tk['ma_tk'];
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);  //true: enables exceptions
    try {
      $mail->SMTPDebug = 0;  // Enable verbose debug output
      $mail->isSMTP();
      $mail->CharSet  = "utf-8";
      $mail->Host = 'smtp.gmail.com';  //SMTP servers
      $mail->SMTPAuth = true; // Enable authentication
      $mail->Username = 'longdhai2@gmail.com';  // SMTP username
      $mail->Password = 'hailong289';   // SMTP password
      $mail->SMTPSecure = 'ssl';  // encryption TLS/SSL 
      $mail->Port = 465;  // port to connect to                
      $mail->setFrom('longdhai2@gmail.com', 'goldenhome');
      $mail->addAddress($ma_tk['email'], $ma_tk['ho_ten']); //mail và tên người nhận       
      $mail->isHTML(true);  // Set email format to HTML
      $mail->Subject = 'Kích hoạt tài khoản';
      $linkKH = "<a href='http://localhost:/Github/DA1-team7/site/?act=kichhoat&id=" . $idUser . "'>Nhấp vào đây</a>";
      // $linKH = sprintf($linkKH, $idUser);
      $mail->Body = "<h4>Chào mừng thành viên mới</h4>Kích hoạt tài khoản: " . $linkKH;
      $mail->send();
      // $message = 'kích hoạt tài khoản !';
      $message = "Thành công !";
    } catch (Exception $e) {
       $message = "Mail không được gửi !";
       echo 'Mail không gửi được. Lỗi: ', $mail->ErrorInfo;
    }
    require_once 'views/login.php';
    break;
  case 'kichhoat':
    if (isset($_GET['id'])) $idUser = $_GET['id'];
    //Kiểm tra hợp lệ giá trị mới nhận
    $ma_tk = khachhang($idUser);
    if (kichhoattk($idUser)) {
      if ($ma_tk['kich_hoat'] == 0) {
        $kichhoattk = "Kích hoạt thành công ";
        $kich_hoat = 1;
        updateThongtintk($idUser, $kich_hoat);
        require_once 'views/login.php';
      } else {
        $error_tk = "Tài khoản của bạn đã được kích hoạt !";
        require_once 'views/login.php';
      }
    }
    //Gọi hàm cập nhật trạng thái user (đã kích hoạt)
    //Định nghĩa hàm cập nhật trạng thái user
    //Nạp view hiện kết quả
    break;
  case 'kiemloi':
    if (isset($_GET['pass']) == true) {
      $erro = array();
      $pass = $_GET['pass'];
      if (empty($pass)) {
        echo "<span>Mật khẩu không để trống</span>";
      } elseif (strlen($pass) < 6) {
        echo "<span>Mật khẩu của bạn quá ngắn !</span>";
      } else {
        echo "<span style='background-color: green;'>An toàn</span>";
      }
    }
    // kiểm lỗi họ và tên
    if (isset($_GET['ho_ten']) == true) {
      if (empty($_GET['ho_ten'])) {
        echo "<span> không để trống</span>";
      }
    }
    // Kiểm lỗi tên đăng nhập
    if (isset($_GET['user']) == true) {
      if (empty($_GET['user'])) {
        echo "<span> không để trống</span>";
      } elseif (checktkdn($_GET['user'])) {
        echo "<span>Tên tài khoản đã tồn tại</span>";
      } else {
        echo "";
      }
    }
    break;
  case 'dangnhap_':
    $tentk = $_POST['tentk'];
    $pass = $_POST['pass'];
    $checktk = checktk($tentk, $pass);
    if (is_array($checktk)) {
      $_SESSION['user'] = $checktk['ten_tk'];
      $_SESSION['name'] = $checktk['ho_ten'];
      $_SESSION['email'] = $checktk['email'];
      $_SESSION['id'] = $checktk['ma_tk'];
      $_SESSION['shinh'] = $checktk['hinh'];
      $_SESSION['mat_khau'] = $checktk['mat_khau'];
      $_SESSION['vai_tro'] = $checktk['vai_tro'];
      $_SESSION['sdt'] = $checktk['sdt'];
      $_SESSION['gioitinh'] = $checktk['gioitinh'];
      if ($_SESSION['vai_tro'] == 0 && $checktk['kich_hoat'] == 1) {
        $message_dn = 'Đăng nhập thành công';
        header("location: index.php");
      } else {
        $error_dn = 'Đăng nhập thất bại !';
        require_once 'views/login.php';
      }
    } else {
      $error_dn = 'Sai tài khoản hoặc mật khẩu !';
    }
    require_once 'views/login.php';
    break;
    //dang xuat
  case 'dangxuat':
    if (isset($_GET['logout']) && $_GET['logout'] == 1) {
      session_destroy();
      header('location: index.php');
    }
    break;

    // dôi mk
  case 'doimk_':
    $pass_cu = $_POST['passcu'];
    $pass_new = $_POST['passnew'];
    $repass = $_POST['repassnew'];
    $ma_tk = $_POST['ma_tk'];
    if (checkmkcu($pass_cu, $ma_tk)) {
      if ($pass_new == $repass) {
        UpdatePassnew($pass_new, $ma_tk);
        $message = 'Đổi mật khẩu thành công !';
        $view = 'views/doimk.php';
        require_once 'views/layout.php';
      } else {
        $message = 'Mật khẩu mới không trùng khớp !';
        $view = 'views/doimk.php';
        require_once 'views/layout.php';
      }
    } else {
      $message = 'Mật khẩu cũ không trùng khớp !';
      $view = 'views/doimk.php';
      require_once 'views/layout.php';
    }
    break;
  case 'dangtin':
    $quan = getallquan();
    $loaican = getallloai_can();
    $loaican1 = getallloai_can();
    $quanall = getallquan();
    $quanallz = getallquan();
    require_once 'views/dangtin.php';
    break;
  case 'danhsach':
    if (isset($_GET['loai_can']) == true )
    { $loaican = $_GET['loai_can'];
    $page_num = 1;
    if (isset($_GET['page']) == true) $page_num = $_GET['page'];
    $page_size = PATH_SITE;
    $dsch_tl = getCanho_theoloai($loaican, $page_num, $page_size);
    $toltal_rows = Demcanhotheoloai($loaican);
    $basrurl = SITE_URL . "/?act=danhsach&loai_can={$loaican}";
    $links = taolinks($basrurl, $page_num, $page_size, $toltal_rows);
  }

    elseif (isset($_GET['ma_quan']) == true && isset($_GET['id']) == false)
    { $ma_quan = $_GET['ma_quan'];
    $page_num = 1;
    if (isset($_GET['page']) == true) $page_num = $_GET['page'];
    $page_size = PATH_SITE;
    $dsch_tl = getCanho_theoquan($ma_quan, $page_num, $page_size);
    $toltal_rows = Demcanhotheoquan($ma_quan);
    $basrurl = SITE_URL . "/?act=danhsach&ma_quan={$ma_quan}";
    $links = taolinks($basrurl, $page_num, $page_size, $toltal_rows);
  }

  elseif (isset($_GET['id']) == true && isset($_GET['ma_quan']) == true)
  { $ma_quan = $_GET['ma_quan'];
    $id=$_GET["id"];
  $page_num = 1;
  if (isset($_GET['page']) == true) $page_num = $_GET['page'];
  $page_size = PATH_SITE;
  $dsch_tl = getCanho_theophuong($id, $page_num, $page_size);
  $toltal_rows = Demcanhotheophuong($id);
  $basrurl = SITE_URL . "/?act=danhsach&phuong={$id}";
  $links = taolinks($basrurl, $page_num, $page_size, $toltal_rows);
}

    $quan = getallquan();
    $quanz = getallquan();
    $quanzz = getallquan();
    $quanzzz = getallquan();
    $loaican=getallloai_can();
    $loaicanz=getallloai_can();
    
    require_once 'views/danhsach.php';
    break;
  case 'phuong':
    // require_once "models/can_ho.php";

    $ds_p = getphuongbyidquan($_POST['quanid']);
    foreach ($ds_p as $p) {
      echo ' <option value="' . $p['id'] . '">' . $p['phuong'] . '</option>';
    }
    break;
  case 'ct_canho':
    // require_once "models/can_ho.php";

    $canhoid = canho($_POST['canhoid']);


    break;
  case 'about':
    $quan=getallquan();
    require_once 'views/about.php';
    break;
  case 'chitiet':
    $ma_can = $_GET["ma_can"];
    $row = getcan_hoByid($ma_can);
    $quanall = getallquan();
    $quan = getallquan();
    $quanz = getallquan();
    $loaican=getallloai_can();
    $loaicanz=getallloai_can();
    require_once 'views/chitiet.php';
    break;
  case 'ch-dd':
    $ma_tk = $_GET["ma_tk"];
    $dsch = canhodadang($ma_tk);
    $rows = 'views/canhodadang.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'edit_ch':
    $ma_can = $_GET['ma_can'];
    settype($ma_can,'int');
    $quan = getallquan();
    $loaican = getallloai_can();
    $can_ho = canho($ma_can);
    require_once 'views/can_ho-edit.php';
    break;
  // update căn hô
  case 'update_ch':
    if (isset($_POST["ten_can_ho"]) && $_POST["ten_can_ho"] != "") {
      $ten_can_ho = trim(strip_tags($_POST["ten_can_ho"]));
      $ma_can = $_POST['ma_can'];
      $ma_loai = $_POST["ma_loai"];
      $ma_tk = $_GET['ma_tk'];
      $ma_quan = $_POST["ma_quan"];
      $dia_chi = $_POST["dia_chi"];
      $nam_xd = $_POST["nam_xd"];
      $dien_tich = $_POST["dien_tich"];
      $tang = $_POST["tang"];
      $so_phong_ngu = $_POST["so_phong_ngu"];
      $so_phong_vs = $_POST["so_phong_vs"];
      $gia_thue = $_POST["gia_thue"];
      $chi_phi = $_POST["chi_phi_khac"];
      $huong_nha = $_POST["huong_nha"];
      $ghi_chu = $_POST["ghi_chu"];
      $tien_ich = $_POST["tien_ich"];
      $an_hien = 0;
      $ma_phuong = $_POST["phuong"];
      // Hình
      if($_FILES['hinh']['name'] != null){
      $hinh = $_FILES['hinh']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinh);
      move_uploaded_file($_FILES['hinh']['tmp_name'], $target_files);
      }else{
         $hinh = $_POST['img'];
      }
      if($_FILES['hinha']['name'] != null){
      $hinha = $_FILES['hinha']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinha);
      move_uploaded_file($_FILES['hinha']['tmp_name'], $target_files);
      }else{
         $hinha = $_POST['imga'];
      }
     
      if($_FILES['hinhb']['name'] != null){
      $hinhb = $_FILES['hinhb']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinhb);
      move_uploaded_file($_FILES['hinhb']['tmp_name'], $target_files);
      }else{
        $hinhb = $_POST['imgb'];
      }

      if($_FILES['hinhc']['name'] != null){
      $hinhc = $_FILES['hinhc']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinhc);
      move_uploaded_file($_FILES['hinhc']['tmp_name'], $target_files);
      }else{
        $hinhc = $_POST['imgc'];
      }
      settype($ma_can, 'int');
      settype($ma_loai, "int");
      settype($ma_quan, "int");
      settype($so_phong_ngu, "int");
      settype($so_phong_vs, "int");
      settype($tang, "int");
      settype($gia_thue, "int");
      settype($dien_tich, "int");
      settype($ma_tk, "int");
      settype($ma_phuong, "int");
      settype($huong_nha, "int");
      Update_chdt($ma_tk, $ma_loai, $ma_quan, $ma_phuong, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien,$ma_can);
      header("location: " . SITE_URL . "/?ctrl=home&act=ch-dd&ma_tk=" . $_SESSION["id"] . "");
    } else {
      header("location: " . SITE_URL . "/?ctrl=home&act=edit_ch");
    }
    # code...
    break;
  
    //phần thông báo
  case 'ds-ld':
    $ma_tk = $_GET["ma_tk"];
    $dsld = getthongbao($ma_tk);
    $rows = 'views/dslich_dat.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'ch-yt':
    $rows = 'views/can_ho-yt.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'add-gh':
    $idproduct = $_GET['id'];
    settype($idproduct, 'int');
    $ds_ch = getALL_canhoNew3();
    $newproduct = array();
    foreach ($ds_ch as $list) {
      $newproduct[$list['ma_can']] = $list;
    }
    // echo "<pre>";
    // print_r($newproduct[$idproduct]);
    if (!isset($_SESSION['cart']) && $_SESSION['cart'] == null) {
      $newproduct[$idproduct]['sl'] = 1;
      $_SESSION['cart'][$idproduct] = $newproduct[$idproduct];
    } else {

      if (array_key_exists($idproduct, $_SESSION['cart'])) {
        //  echo 'Có tồn tại trong giỏ';
      } else {
        echo 'Sản phẩm có ' . $idproduct . ' chưa có trong giỏ';
        $newproduct[$idproduct]['sl'] = 1;
        $_SESSION['cart'][$idproduct] = $newproduct[$idproduct];
      }
    }
    header("location: index.php?act=chitiet&ma_can=" . $idproduct . "");
    break;
  case 'delete-gh':
    $ma_can = $_GET['id'];
    unset($_SESSION['cart'][$ma_can]);
    header("location: index.php?act=chitiet&ma_can=" . $ma_can . "");
    break;
  case 'lichsu':
    $ma_tk = $_GET["ma_tk"];
    $lichsu = lichsu($ma_tk);
    $rows = 'views/lichsu.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'thongbao':
    $ma_tk = $_GET["ma_tk"];
    $showtb = getthongbao($ma_tk);
    $rows = 'views/thongbao.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'thongtintk':
    $quan=getallquan();
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'doimk':
    $rows = 'views/doimk.php';
    $view = 'views/thongtintk.php';
    require_once 'views/layout.php';
    break;
  case 'dangtincanho':
    if (isset($_POST["ten_can_ho"]) && $_POST["ten_can_ho"] != "") {
      $ten_can_ho = trim(strip_tags($_POST["ten_can_ho"]));
      $ma_loai = $_POST["ma_loai"];
      $ma_tk = $_GET['ma_tk'];
      $ma_quan = $_POST["ma_quan"];
      $dia_chi = $_POST["dia_chi"];
      $nam_xd = $_POST["nam_xd"];
      $dien_tich = $_POST["dien_tich"];
      $tang = $_POST["tang"];
      $so_phong_ngu = $_POST["so_phong_ngu"];
      $so_phong_vs = $_POST["so_phong_vs"];
      $gia_thue = $_POST["gia_thue"];
      $chi_phi = $_POST["chi_phi_khac"];
      $huong_nha = $_POST["huong_nha"];
      $ghi_chu = $_POST["ghi_chu"];
      $tien_ich = $_POST["tien_ich"];
      $an_hien = 0;
      $ma_phuong = $_POST["phuong"];
      // Hình
      $hinh = $_FILES['hinh']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinh);
      move_uploaded_file($_FILES['hinh']['tmp_name'], $target_files);
      if ($hinh == "") {
        $hinh = "no-img.png";
      }

      $hinha = $_FILES['hinha']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinha);
      move_uploaded_file($_FILES['hinha']['tmp_name'], $target_files);
      if ($hinha == "") {
        $hinha = "no-img.png";
      }

      $hinhb = $_FILES['hinhb']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinhb);
      move_uploaded_file($_FILES['hinhb']['tmp_name'], $target_files);
      if ($hinhb == "") {
        $hinhb = "no-img.png";
      }

      $hinhc = $_FILES['hinhc']['name'];
      $pathimg = '../uploaded/';
      $target_files = $pathimg . basename($hinhc);
      move_uploaded_file($_FILES['hinhc']['tmp_name'], $target_files);
      if ($hinhc == "") {
        $hinhc = "no-img.png";
      }

      settype($ma_loai, "int");
      settype($ma_quan, "int");
      settype($so_phong_ngu, "int");
      settype($so_phong_vs, "int");
      settype($tang, "int");
      settype($gia_thue, "int");
      settype($dien_tich, "int");
      settype($ma_tk, "int");
      settype($ma_phuong, "int");
      settype($huong_nha, "int");
      themcanho($ma_tk, $ma_loai, $ma_quan, $ma_phuong, $dia_chi, $ten_can_ho, $nam_xd, $dien_tich, $tang, $so_phong_ngu, $so_phong_vs, $gia_thue, $chi_phi, $huong_nha, $hinh, $hinha, $hinhb, $hinhc, $ghi_chu, $tien_ich, $an_hien);
      header("location: " . SITE_URL . "/?ctrl=home&act=ch-dd&ma_tk=" . $_SESSION["id"] . "");
      
    } else {
      header("location: " . SITE_URL . "/?ctrl=home&act=dangtin");
    }
    break;
  case 'datlichxem';
    if ($_POST["ngay_xem"] != "") {
      if (isset($_POST["dat"])) {

        $ma_can = $_POST['ma_can'];
        
        $ma_tk = $_POST['ma_tk'];
        $ngay_xem = $_POST["ngay_xem"];
        $ngay_dat = $_POST["ngay_dat"];
        datlichid($ma_can, $ma_tk, $ngay_xem, $ngay_dat);
        header("location: " . SITE_URL . "?ctrl=home&act=lichsu&ma_tk=$ma_tk");
        break;
      }
    } else {
      $message = "Bạn chưa đặt ngày";
      $ds_lc = getLoaican();
      $ds_ch = getALLcan_hoNew();
      $ds_ch2 = getALL_canhoNew2();
      require_once "views/layout.php";
    }

    break;
    case 'delete_ch':
      $ma_can = $_GET['ma_can'];
      settype($ma_can,'int');
      DeleteCanho_dd($ma_can);
      header('location: index.php?act=ch-dd&ma_tk='.$_SESSION['id'].'');
      break;
      
      //Hủy lịch đả đặt
      case 'deletedatlich':
        $ma_dat=$_GET["ma_dat"];
        xoadatlich($ma_dat);
        $thongbao="Hủy thành công";
        header("location: ".SITE_URL."/?ctrl=home&act=lichsu&ma_tk=".$_SESSION['id']."");
      break;

      //tìm kiếm nhanh
      case 'timkiemnhanh':
        if (isset($_POST["timnhanh"])) {
        if(isset($_POST["ma_quan"]) == true && isset($_POST["loai_can"]) == true){
          $ma_quan=$_POST["ma_quan"];
          $loaican=$_POST["loai_can"];
          $page_num = 1;
          if (isset($_GET['page']) == true) $page_num = $_GET['page'];
          $page_size = PATH_SITE;
          $dsch_tl = getCanho_theoquanvaloaican($loaican, $ma_quan, $page_num, $page_size);
          $toltal_rows = Demcanhotheoquanvaloaican($loaican , $ma_quan);
          $basrurl = SITE_URL . "/?act=danhsach&ma_quan={$ma_quan}&ma_loai={$loaican}";
          $links = taolinks($basrurl, $page_num, $page_size, $toltal_rows);
        }
        $quan = getallquan();
        $quanz = getallquan();
        $quanzz = getallquan();
        $loaican=getallloai_can();
        require_once 'views/danhsach.php';
      }
        break;

        //Tìm kiếm ở trang chủ
        case 'timkiemtheogia':
          $sapxep=$_POST["sxgia"];
          $loai_can=$_POST["loai_can"];
          $page_num = 1;
          if (isset($_POST["mucgia"]) && ($_POST["mucgia"]!=NULL)) {
          $mucgia=$_POST["mucgia"];
            if (isset($_GET['page']) == true) $page_num = $_GET['page'];
          $page_size = PATH_SITE;
          $dsch_tl = getCanho_theogia($sapxep, $loai_can, $mucgia, $page_num, $page_size);
          $toltal_rows = Demcanhotheogia( $loai_can, $mucgia);
          $basrurl = SITE_URL . "/?act=danhsach&ma_loai={$loai_can}";
          $links = taolinks($basrurl, $page_num, $page_size, $toltal_rows);
          $quan = getallquan();
          $quanz = getallquan();
          $quanzz = getallquan();
          $loaican=getallloai_can();
          }
          else{

            if (isset($_GET['page']) == true) $page_num = $_GET['page'];
          $page_size = PATH_SITE;
          $dsch_tl = getCanho_theosx($sapxep, $loai_can, $page_num, $page_size);
          $toltal_rows = Demcanhotheoloai($loai_can);
          $basrurl = SITE_URL . "/?act=danhsach&ma_loai={$loai_can}";
          $links = taolinks($basrurl, $page_num, $page_size, $toltal_rows);
          $quan = getallquan();
          $quanz = getallquan();
          $quanzz = getallquan();
          $loaican=getallloai_can();
          }
          
        require_once 'views/danhsach.php';
        break;

        //timkiemall
        case 'timkiemall':
          $loai_can=$_POST["loai_can"];
          $key=$_POST["key"];
          $ma_quan=$_POST["ma_quan"];
          $mucgia=$_POST["mucgia"];
          $dien_tich=$_POST["dientich"];
          $sophongngu=$_POST["sophongngu"];
          $sophongvs=$_POST["sophongvs"];
          $huongnha=$_POST["huongnha"];
          $page_num = 1;
          if (isset($_GET['page']) == true) $page_num = $_GET['page'];
          $page_size = PATH_SITE;
          $dsch_tl = getCanho_all($loai_can, $key, $ma_quan, $mucgia, $dien_tich, $sophongngu, $sophongvs, $huongnha, $page_num, $page_size);
          $toltal_rows = Demcanhoall($loai_can, $key, $ma_quan, $mucgia, $dien_tich, $sophongngu, $sophongvs, $huongnha);
          $basrurl = SITE_URL . "/?act=danhsach&key={$key}";
          $links = taolinks($basrurl, $page_num, $page_size, $toltal_rows);
          $quan = getallquan();
          $quanz = getallquan();
          $quanzz = getallquan();
          $quanzzz = getallquan();
          $loaican=getallloai_can();
          $loaicanz=getallloai_can();
          require_once 'views/danhsach.php';
        break;

        case 'dangkytim';
        if (isset($_POST["dangky"])) {
         $ho_ten=$_POST["ho_ten"];
         $email=$_POST["email"];
         $sdt=$_POST["sdt"];
         themdangky($ho_ten, $email, $sdt);
        header("location: ".SITE_URL."?ctrl=home&act=index");
      }
      break;
}
