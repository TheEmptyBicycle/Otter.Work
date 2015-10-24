// JavaScript source code
var main = function () {
    $('.main').fadeIn(500);
    $('.optionBar').fadeIn(500);
    $('.titleBar').fadeIn(500);
    $('.mainScreen').fadeIn(500);

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