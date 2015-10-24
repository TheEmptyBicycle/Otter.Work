// JavaScript source code
var main = function () {
    $('.main').hide();
    $('.main').fadeIn(1000);

    var ControlOut = false;

    // Pull out panel
    $('.hControl').click(function () {
        $('.control').animate({
            left: '0px'
        }, 200);
        $('.main').animate({
            left: '300px'
        }, 200);
    });
    $('.icon-close').click(function () {
        $('.control').animate({
            left: '-300px'
        }, 200);
        $('.main').animate({
            left: '0px'
        }, 200);
    });

    // 
}

$(document).ready(main);