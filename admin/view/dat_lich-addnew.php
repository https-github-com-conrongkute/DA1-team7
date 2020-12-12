
<div class="right__title">Bảng đặt lịch</div>
<p class="right__desc">Thêm dặt lịch xem</p>
<div class="right__formWrapper">
    <form action="/admin/?ctrl=dat_lich&act=insert" method="post" enctype="multipart/form-data">
    
        <div class="right__inputWrapper hienloi">
        <label for="title">Căn hộ</label>
        
             <select name="can_ho" id="">
                 <option value="">Chọn căn hộ</option>
                 <?php foreach($ds_can as $ch){ 
                     foreach($ds_dl as $dl)
                     ?>
                    <option value="<?=$ch['ma_can']?>"><?=$ch['ten_can_ho']?></option>
                 <?php } ?>
             </select>
             <?php if(isset($ma_can_tt)==true){ ?>
             <p class="bage-check-php"><?=$ma_kh_tt?></p>
             <?php } ?>
        </div>
        <div class="right__inputWrapper hienloi">
            <label for="title">Khách hàng</label>
            <select name="kh" id="">
                <option value="">Chọn khách hàng</option>
                <?php foreach($ds_kh as $kh){ ?>
                    <option value="<?=$kh['ma_tk']?>"><?=$kh['ho_ten']?></option>
                 <?php } ?>
            </select>
            <?php if(isset($ma_kh_tt)==true){ ?>
             <p class="bage-check-php"><?=$ma_kh_tt?></p>
             <?php } ?>
        </div>
        <div class="right__inputWrapper hienloi">
            <label for="title">Ngày đi xem</label>
            <input type="date" name="ngay_di_xem" min="<?=date("Y-m-d")?>" id="email" >
            <?php if(isset($ngay_di_xem_tt)==true){ ?>
             <p class="bage-check-php"><?=$ngay_di_xem_tt?></p>
             <?php } ?>
            <!-- <span id="email"></span> -->
        </div>
        <button class="btn" type="submit">Chèn lịch xem</button>
    </form>
    <?php if(isset($message)==true){ ?>
    <div class="thongbao-khachhang">
        <div class="delete-container">
            <div class="delete-form">
                <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;"><?=$message?></h3>
                <div class="nut">
                    <a href="?ctrl=dat_lich&act=index" class="co" style="padding: 10px 20px;background-color: aqua;border-radius: 20px;width: 100px;color: white;">OK</a>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
    <?php if(isset($messege)==true){ ?>
        <div class="thongbao-khachhang">
        <div class="delete-container">
            <div class="delete-form">
                <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;"><?=$messege?></h3>
                <div class="nut">
                    <a href="?ctrl=dat_lich&act=addnew" class="co" style="padding: 10px 20px;background-color: aqua;border-radius: 20px;width: 100px;color: white;">OK</a>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
</div>
