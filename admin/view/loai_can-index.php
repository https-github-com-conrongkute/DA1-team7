<div class="right__title">Bảng loại căn hộ</div>
<div class="right__table">
    <p class="right__tableTitle">Danh sách loại căn hộ</p>
    <div class="right__tableWrapper">
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th style="text-align: left;">Loại căn hộ</th>
                    <!-- <th>ID Sản Phẩm</th>
                    <th>Trạng Thái</th> -->
                    <th>Sửa</th>
                    <th>Xóa</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Chung cư</td>
                    <td>
                        <a href="#" style="color: #455A64;"><i class="fas fa-edit"></i></a>
                    </td>
                    <td>
                        <a class="sua" href="#" style="color: #455A64;"><i class="fas fa-trash-alt"></i></a>
                    </td>
                    <!-- <td></td>
                    <td></td>
                    <td></td>
                    <td></td> -->
                </tr>
            </tbody>

        </table>
        <div class="delete-loaican">
            <div class="delete-container">
                <div class="delete-form">
                    <h3 style="width: 100%;float: left;line-height: 100px;text-align: center;">Bạn có muốn xóa không ?</h3>
                    <div class="nut">
                        <button class="co" style="padding: 2px 5px;background-color: #f0f0f0;border-radius: 20px;width: 100px;margin-right: 10px;outline: none;"> <a href="#" style="color: black;">Không</a></button>
                        <button class="co" style="padding: 2px 5px;background-color: red;border-radius: 20px;width: 100px;outline: none;"> <a href="https://www.w3schools.com/" style="color: white;">Có</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    $(document).ready(function() {
        $('.sua').click(function(add) {
            var delet = $('.delete-loaican');
            delet.css('display', 'block');
        });
        $('.co').click(function(add) {
            var delet = $('.delete-loaican');
            delet.css('display', 'none');
        });
    });
</script>