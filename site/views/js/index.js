$(document).ready(function() {
    $(window).scroll(function() {
        var body = $('html,body').scrollTop();
        // console.log(body);
        if (body > 50) {
            $('nav').addClass('hienra');
            $('.nav-menu ul li a').css('color', 'black');
            $('.nav-menu3 ul li a').css('color', 'black');
        } else {
            $('nav').removeClass('hienra');
            $('.nav-menu ul li a').css('color', 'white');
            $('.nav-menu3 ul li a').css('color', 'white');
            // $('.sum-menu ul li a').css('color', 'black');
        }
    });
    $('.btn_delete_ch').on('click', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        // console.log(url);
        swal({
                title: "Bạn có chắc chắn xóa?",
                text: "Bạn sẽ không thể khôi phục căn hộ này!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Có tôi chắc chắn!",
                cancelButtonText: "Không!",
                closeOnConfirm: false
            },
            function() {
                window.location.href = url;
                swal("Xóa thành công!", "căn hộ của bạn đã bị xóa.", "success");
            });
    });
    $(window).scroll(function() {
        var body = $('html,body').scrollTop();
        // console.log(body);
        if (body > 1280) {
            $('.item2').addClass('display');

        } else {
            $('.item2').removeClass('display');

            // $('.sum-menu ul li a').css('color', 'black');
        }
    });
    // // Hiện lên văn bản
    // $('.xthem_ch1').click(function (e) { 
    //     $('.xt-ch').eq(0).addClass('xthem__ch').removeClass('xt-ch');
    //     $('.xthem_ch1').addClass('anbot1').text('ẩn đi').removeClass('xthem_ch1');
    //     // $('.xt-ch').eq(2).css('min-height','300px');
    // });
    // $('.xthem_ch2').click(function (e) { 
    //     $('.xt-ch').eq(1).css('min-height','300px');
    //     $('.xthem_ch2').addClass('anbot2').text('ẩn đi');
    //     // $('.xt-ch').eq(2).css('min-height','300px');
    // });
    // $('.xthem_ch3').click(function (e) { 
    //     $('.xt-ch').eq(2).css('min-height','300px');
    //     $('.xthem_ch3').addClass('anbot3').text('ẩn đi');
    //     // $('.xt-ch').eq(2).css('min-height','300px');
    // });
    // $('.xthem_ch4').click(function (e) { 
    //     $('.xt-ch').eq(3).css('min-height','300px');
    //     $('.xthem_ch4').addClass('anbot4').text('ẩn đi');
    //     // $('.xt-ch').eq(2).css('min-height','300px');
    // });
    // $('.xthem_ch5').click(function (e) { 
    //     $('.xt-ch').eq(5).css('min-height','300px');
    //     $('.xthem_ch5').addClass('anbot5').text('ẩn đi');
    //     // $('.xt-ch').eq(2).css('min-height','300px');
    // });
    // $('.xthem_ch6').click(function (e) { 
    //     $('.xt-ch').eq(4).css('min-height','300px');
    //     $('.xthem_ch6').addClass('anbot6').text('ẩn đi');
    //     // $('.xt-ch').eq(2).css('min-height','300px');
    // });
    // $('.anbot1').click(function (e) { 
    //     $('.xthem__ch').eq(0).addClass('xt-ch').removeClass('xthem__ch');
    // });
    // !--slick carousel-- >
    $('.slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.slider1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider2').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

var showtim = document.getElementById('showtim');
var an = document.getElementById('an');
var hien = document.getElementById('hien');

function showtimkiem() {
    showtim.style.display = 'block';
    an.style.display = 'none';
    hien.style.display = 'block';
}

function exit() {
    showtim.style.display = 'none';
    an.style.display = 'block';
    hien.style.display = 'none';
}



function toogle() {
    var submenu = document.getElementsByClassName('sub-menu')[0];
    if (submenu.style.display == 'none') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';

    }
}
//click hình ảnh 
//lấy id căn hộ để show lên
$(".img-click").click(function(e) {
    var btnClick = $(this);

    var id = btnClick.prev().html();
    //    alert(id);
    $.get("?ctrl=home&act=chi_tiet", {
            'canhoid': id
        },
        function(data) {
            $('#myModal').html(data);
        });
});



function showimages(x) {
    var img = document.getElementById('images');
    // var hinh = document.getElementById("hinh").value();
    switch (x) {
        case 1:

            $("#hinh").click(function(e) {
                var btnClick = $(this);

                var id = btnClick.prev().html();
                // alert(id);
                img.src = "../uploaded/" + id + "";

            });


            break;
        case 2:
            $("#hinha").click(function(e) {
                var btnClick = $(this);

                var ida = btnClick.prev().html();
                // alert(id);
                img.src = "../uploaded/" + ida + "";

            });
            break;
        case 3:
            $("#hinhb").click(function(e) {
                var btnClick = $(this);

                var idb = btnClick.prev().html();
                // alert(id);
                img.src = "../uploaded/" + idb + "";

            });
            break;
        case 4:
            $("#hinhc").click(function(e) {
                var btnClick = $(this);

                var idc = btnClick.prev().html();
                // alert(id);
                img.src = "../uploaded/" + idc + "";

            });
            break;
        default:
            break;
    }
}