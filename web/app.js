// JavaScript source code
var main = function () {
    $('#newItemScreen').fadeIn();
    $('#cover').fadeIn();
    $('#overlay').css({ 'opacity': 0, 'display': "block" });
    $('#overlay').animate({ 'opacity': 1 }, 1000).on("click", function () {
        $('#overlay').animate({ 'opacity': 0 }, 1000);
    });

    $('document').addClass('dim');
    $('').hide();
    $('.main').fadeIn(1000);

    var ControlOut = false;

    // Pull out panel
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

    // 
}

function addItem() {
    var row = $(document).getElementById("im");
    row.text = "hey";
    
}

$(document).ready(main);