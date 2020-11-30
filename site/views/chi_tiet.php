<div class="divlon">
      <div class="div1" >
          <!-- Modal content-->
          <div class="divimg" >
            
              <div class="imglon">
                  <img id="images" src="../uploaded/<?=$can_ho["hinh"]?>" width="100%" height="280px" alt="">
              </div>
              <div class="divnho">
                  <div class="imgnho nho1">
                      <img src="../uploaded/<?=$can_ho["hinh"]?>"  alt="" onclick="showimages(1)">
                  </div>
                  <div class="imgnho">
                      <img src="../uploaded/<?=$can_ho["hinha"]?>" alt="" onclick="showimages(2)">
                  </div>
                  <div class="imgnho">
                      <img src="../uploaded/<?=$can_ho["hinhb"]?>" alt="" onclick="showimages(3)">
                  </div>
                  <div class="imgnho">
                      <img src="../uploaded/<?=$can_ho["hinhc"]?>" alt="" onclick="showimages(4)">
                  </div>
              </div>
          </div>
          <div class="divtext">
              <div class="divtext1">
                  <ul>
                      <li>- Chiều dài: </li> <br>
                      <li>- Phòng ngủ: <?=$can_ho["so_phong_ngu"]?></li> <br>
                      <li>- Hướng: <?=$can_ho["huong_nha"]?> </li><br>
                      <li>-Diện tich: <?=$can_ho["dien_tich"]?> m²</li><br>
                  </ul>
              </div>
              <div class="divtext1">
                  <ul>
                      <li>- Chiều rộng: </li> <br>
                      <li>- Tầng: <?=$can_ho["tang"]?> </li> <br>
                      <li>- Phòng tắm: <?=$can_ho["so_phong_vs"]?></li> <br>
                  </ul>
              </div>
          </div>
      </div>
      <div class="div2">
          <i data-dismiss="modal" class="glyphicon glyphicon-remove"></i>
          <div class="divmota1">
              <h3><?=$can_ho["ten_can_ho"]?></h3>
              <input class="ipmt" type="submit" value="Thuê">
              <input class="ipmt2" type="submit" value="Đã thẩm định">
              <input class="ipmt3" type="submit" value="ID: <?=$can_ho["ma_can"]?>">

          </div>
          <div class="divmota2">
              <h4>Thông tin chi tiết</h4>
              <hr>
              <p><?=$can_ho["tien_ich"]?>
              </p>
          </div>
          <div class="divmota3">
              Giá: <a><?=$can_ho["gia_thue"]?> VND - <?=$can_ho["dien_tich"]?> m²</a>
              <input type="button" value="Đặt lịch xem" data-toggle="modal" data-target="#datlich" data-dismiss="modal">
          </div>
      </div>

  </div>