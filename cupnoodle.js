// alert();

// loading
$(function () {
    var h = $(window).height();
    $('#wrapper').css('diplay', 'none');
    $('#loader').height(h).css('display', 'block');
    $('#loading').height(h).css('display', 'block');
});

$(function () {
    $(window).load(function () {
        $('#loader').delay(900).fadeOut(800);
        $('#loading').delay(600).fadeOut(300);
        $('#wrapper').css('display', 'block');
    });
});

$(function () {
    setTimeout('stopload()', 1000);
});

function stopload() {
    $('#wrapper').css('dislplay', 'block');
    $('#loader').delay(900).fadeOut(800);
    $('#loading').delay(600).fadeOut(300);
}


// header
$(function () {
    var height = $(".header").height();
    $("body").css("margin-top", height);
});


// topics
$(function () {
    var i = 0;
    if (i == 0) {
        $(".topics_cn_off").click(function () {
            $(".topics_cn_on").animate({
                'opacity': '1',
                'z-index': '999'
            }),
                $(".topics_cn_off").animate({
                    'opacity': '0',
                    'z-index': '1'
                });
        });
    };
});

$(function () {
    var i = 0;
    if (i == 0) {
        $(".topics_on_inner_img").click(function () {
            $(".topics_cn_on").animate({
                'opacity': '0',
                'z-index': '1'
            }),
                $(".topics_cn_off").animate({
                    'opacity': '1',
                    'z-index': '999'
                });
        });
    };
});



// HUNGRYDAYS

$(function () {
    $('.main_img2').css({
        'transform': 'translateY(0)',
        'opacity': '1'
    });
});

//contents_statement
$(function () {
    var offsetTop = $(".statement").offset().top;
    console.log(offsetTop);
});

$(function () {
    $(window).scroll(function () {
        $('.statement_first').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 80) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translaterY(0px)');
                $(this).css('transition', 'all 3s');
            }
        })
    });
});


$(function () {
    $(window).scroll(function () {
        $('.statement_second').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translaterY(0px)');
                $(this).css('transition', 'all 3s');
            }
        })
    });
});


$(function () {
    $(window).scroll(function () {
        $('.statement_second').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 130) {
                $('.statement_end').addClass('hide2');
            }
        })
    });
});

// contents_image
$(function () {
    $(window).scroll(function () {
        $('.cnt_cuts_inner1').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 250) {
                $('.cnt_cuts_inner1').addClass('hide3');
            }
        })
    });
});

$(function () {
    $(window).scroll(function () {
        $('.cnt_cuts_inner2').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 260) {
                $('.cnt_cuts_inner2').addClass('hide4');
            }
        })
    });
});

$(function () {
    $(window).scroll(function () {
        $('.cnt_cuts_inner3').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300) {
                $('.cnt_cuts_inner3').addClass('hide5');
            }
        })
    });
});

$(function () {
    $(window).scroll(function () {
        $('.cnt_cuts_inner4').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 320) {
                $('.cnt_cuts_inner4').addClass('hide6');
            }
        })
    });
});

$(function () {
    $(window).scroll(function () {
        $('.cnt_cuts_inner5').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 350) {
                $('.cnt_cuts_inner5').addClass('hide7');
            }
        })
    });
});

// contents_products

$(function () {
    var offsetTop = $('.contents_products').offset().top;
    console.log(offsetTop);
});

// サンジ
$(function () {
    $(window).scroll(function () {
        $('.sanji').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300) {
                $('.sanji').addClass('hide8');
            }
        })
    });
});


$(function () {
    $(window).scroll(function () {
        $('.back-ground_2').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 250) {
                $(this).css({
                    'opacity': '1'
                });
            } else {
                $(this).css({
                    'opacity': '0'
                });
            }
        });
    });
});

// 1
$(function () {
    $(window).scroll(function () {
        $('.detail_1_img').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300) {
                $('.detail_1_img').animate(
                    { 'width': 'show', 'opacity': '1' }, 'slow');
            };
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.detail_1_inner').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 320) {
                $('.detail_1_inner').css({
                    'transform': 'translateY(0)',
                    'opacity': '1'
                });
            }
        });
    });
});


// 2
$(function () {
    $(window).scroll(function () {
        $('.detail_2_img').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300) {
                $('.detail_2_img').animate(
                    { 'width': 'show', 'opacity': '1' }, 'slow');
            };
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.detail_2_inner').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 320) {
                $('.detail_2_inner').css({
                    'transform': 'translateY(0)',
                    'opacity': '1'
                });
            }
        });
    });
});

// 3

$(function () {
    $(window).scroll(function () {
        $('.detail_3_img').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 320) {
                $('.detail_3_img').animate(
                    { 'width': 'show', 'opacity': '1' }, 'slow');
            };
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.detail_3_inner').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 340) {
                $('.detail_3_inner').css({
                    'transform': 'translateY(0)',
                    'opacity': '1'
                });
            }
        });
    });
});

// 4

$(function () {
    $(window).scroll(function () {
        $('.detail_4_img').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 320) {
                $('.detail_4_img').animate(
                    { 'width': 'show', 'opacity': '1' }, 'slow');
            };
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.detail_4_inner').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 340) {
                $('.detail_4_inner').css({
                    'transform': 'translateY(0)',
                    'opacity': '1'
                });
            }
        });
    });
});


