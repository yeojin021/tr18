$(function () {
    $(function () {
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop();
            if (sct > 0) {
                $('#header').addClass('on');
            } else {
                $('#header').removeClass('on');
            }
        });
    });

});


$(function () {
    const MMN = new Swiper('.main_menu_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '#main_menu .next',
            prevEl: '#main_menu .prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 7,
                spaceBetween: 30,
            }
        },

    });

})

$(function () {
    const MNE = new Swiper('.main_news_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_news .next',
            prevEl: '.main_news .prev',
        },

    });
})


$(function () {
    $('#main_event .main_noti .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);

        $('#main_event .main_noti .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('#main_event .main_noti .tab_content .itm').removeClass('on')
        $('#main_event .main_noti .tab_content .itm').eq(idx).addClass('on')
    });
});


$(function () {


    $(function () {
        $('.to_top').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            })
        });
        $(window).on('scroll', function () {
            let sct = $(window).scrollTop(); console.log(sct)

            if (sct > 400) {
                $('.to_top').addClass('on')
            } else {
                $('.to_top').removeClass('on')
            }
        });
    });
});



$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on');
        $('#header h1').toggleClass('on')
    })
});


$(function () {

    $('.gnb>ul>li>a ').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })
})