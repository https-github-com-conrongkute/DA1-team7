<div class="right__title">Bảng bình luận</div>
<p class="right__desc">Thêm bình luận</p>
<div class="right__formWrapper">
    <form action="<?= ADMIN_URL ?>/?ctrl=binhluan&act=update" method="post" enctype="multipart/form-data">
        <div class="right__inputWrapper">
        <label for="title">Căn hộ</label>
             <select name="can_ho" id="">
                 <option value="">Chọn căn hộ</option>
                 <?php foreach($ds_can as $ch){ 
                     if($ch['ma_can']==$row['ma_can']){
                     ?>
                    <option value="<?=$ch['ma_can']?>" selected><?=$ch['ten_can_ho']?></option>
                     <?php  }else{ ?>
                        <option value="<?=$ch['ma_can']?>"><?=$ch['ten_can_ho']?></option>
                     <?php } } ?>
             </select>
             <?php if(isset($ma_can_tt)==true){ ?>
             <span class="tt"><?=$ma_can_tt?></span>
             <?php } ?>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Khách hàng</label>
            <select name="kh" id="">
                <option value="">Chọn khách hàng</option>
                <?php foreach($ds_kh as $kh){
                    if($kh['ma_tk']==$row['ma_tk']){
                    ?>
                    <option value="<?=$kh['ma_tk']?>" selected><?=$kh['ho_ten']?></option>
                 <?php }else{ ?>
                    <option value="<?=$kh['ma_tk']?>"><?=$kh['ho_ten']?></option>
                 <?php } } ?>
            </select>
            <?php if(isset($ma_kh_tt)==true){ ?>
             <span class="tt"><?=$ma_kh_tt?></span>
             <?php } ?>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Ngày bình luận</label>
            <input type="date" name="ngay_bl" id="" value="<?=$row['ngay_bl']?>">
            <input type="hidden" name="ma_bl" value="<?=$row['ma_bl']?>">
            <!-- <span id="email"></span> -->
        </div>
        <div class="right__inputWrapper">
            <label for="title">Nội dung</label>
            <textarea name="noi_dung" id="" cols="30" rows="5" placeholder="Nội dung bình luận"><?=$row['noi_dung']?></textarea>
            <?php if(isset($noi_dung_tt)==true){ ?>
             <span class="tt"><?=$noi_dung_tt?></span>
             <?php } ?>
            <!-- <span id="email"></span> -->
        </div>
        <button class="btn" type="submit">Chèn bình luận</button>
    </form>
    <?php if(isset($message)==true){ ?>
    <div class="thongbao-khachhang">
        <div class="delete-container">
            <div class="delete-form">
                <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;"><?=$message?></h3>
                <div class="nut">
                    <a href="?ctrl=binhluan&act=index" class="co" style="padding: 10px 20px;background-color: aqua;border-radius: 20px;width: 100px;color: white;">OK</a>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
    <!-- <?php// if(isset($messege)==true){ ?>
        <div class="thongbao-khachhang">
        <div class="delete-container">
            <div class="delete-form">
                <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;"><?php //$messege?></h3>
                <div class="nut">
                    <a href="?ctrl=dat_lich&act=addnew" class="co" style="padding: 10px 20px;background-color: aqua;border-radius: 20px;width: 100px;color: white;">OK</a>
                </div>
            </div>
        </div>
    </div>
    <?php // } ?> -->
</div>