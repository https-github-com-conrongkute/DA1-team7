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
        slidesToScroll: 1,
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
        slidesToScroll: 1,
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

function showimages(x) {
    var img = document.getElementById('images');
    switch (x) {
        case 1:
            img.src = "../uploaded/b1.jpg";
            break;
        case 2:
            img.src = "../uploaded/b2.jpg";
            break;
        case 3:
            img.src = "../uploaded/b3.jpg";
            break;
        case 4:
            img.src = "../uploaded/b4.jpg";
            break;
        default:
            break;
    }
}

function toogle() {
    var submenu = document.getElementsByClassName('sub-menu')[0];
    if (submenu.style.display == 'none') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';

    }
}