// JavaScript source code
var main = function () {
    $('').hide();
    $('.main').fadeIn(1000);

    var ControlOut = false;
    $('.hControl').click(function () {
        $('.control').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            left: '300px'
        });
    });
    $('.icon-close').click(function () {
        $('.control').animate({
            left: '-300px'
        }, 200);
        $('body').animate({
            left: '0px'
        });
    });
}

$(document).ready(main);