<div class="right__title">Danh sách các hóa hơn</div>
<div class="right__table">
    <p class="right__tableTitle">Số lượng hóa đơn: <?php echo $tkhd["soluong"]?> </p>
    <p>Doanh thu = <?php echo ($tkhd["soluong"] * 10000)?> VND</p>
    <div class="right__tableWrapper">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th style="text-align: center;">Mã hóa đơn</th>
                    <th>Người thanh toán</th>
                    <th>Số tiền</th>
                    <th>Căn hộ</th>
                    <th>Ngân hàng</th>
                    <th>Thời gian thanh toán</th>
                    

                </tr>
            </thead>
            <tbody>
            <?php foreach($ds as $ds) { 
                $stt+=1;
                ?>
                <tr>
                    <td><?=$stt?></td>
                    <td><?=$ds["order_id"]?></td>
                    <td><?=$ds["ho_ten"]?></td>
                    <td><?=$ds["money"]?> VND</td>
                    <td><?=$ds["ten_can_ho"]?>
                    <p>Mã căn: <?=$ds["ma_can"]?></p></td>
                    <th> <?=$ds["code_bank"]?></th>
                    <th> <?=date_format(date_create($ds["time"]), "d-m-Y")?>
          <p><?=date_format(date_create($ds["time"]), "H-i-s")?></p></th>
                </tr>
            <?php }?>
            </tbody>

        </table>

    </div>
</div>
