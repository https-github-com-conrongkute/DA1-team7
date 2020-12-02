<div class="ch-dd">
    <?php 
    $toltal = 0;
    if(isset($_SESSION['cart'])==true){
        foreach($_SESSION['cart'] as $list){
            $toltal += $list['sl'];
        }
    }
    ?>
    <h3 style="font-weight: bold; margin-bottom: 20px; margin-top: 50px;">Căn hộ yêu thích (<?=$toltal?>)</h3>
    <?php foreach($_SESSION['cart'] as $list){ ?>
    <div class="box-yt">
        <div class="box-yt__hinh">
            <img src="../uploaded/<?=$list['hinh']?>" alt="">
        </div>
        <div class="box-yt__nd">
          <h3 style="margin-top: 0;margin-bottom: 10px;"><a href="?act=chitiet&ma_can=<?=$list['ma_can']?>" style="text-decoration: none;color: black;"><?=$list['ten_can_ho']?></a></h3>
          <p style="padding: 5px 20px;background-color: #ffebe0;color: #f17423;width: 120px;border-radius: 5px;font-weight: bold;text-align: center;">Cho thuê</p>
          <p style="font-weight: bold;"><span><?=number_format($list['gia_thue'],0,'','.')?> VNĐ</span> | <span><?=$list['dien_tich']?> m2</span></p>
          <p>Địa chỉ: <?=$list['dia_chi']?></p>
        </div>
    </div>
    <?php } ?>
</div>