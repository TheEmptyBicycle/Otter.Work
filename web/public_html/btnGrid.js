
var nSessions = 8;
var row;
var i;
var createGrid = function () {
    $(".btnGrid").hide();
    for (i = 0; i < 4; i++) {
        if (i % 4 === 0) {
            row = $('<tr></tr>');
            $(".btnGrid").append(row);
        }
        var item = $('<td></td>');
        var course = $('<h3></h3>').text("COURSE101");
        var nMembers = $('<p></p>').text("#");
        var status = $('<p></p>').text("Testing: " + i);
        item.append(course, nMembers, status);
        row.append(item);
        item.fadeIn(500);

    }
    $(".btnGrid").fadeIn();
}
var j = 0;
var createItem = function (courseName, locName) {
    var num = Math.round(Math.random() *20);
    if (j % 4 === 0) {
        row = $('<tr></tr>');
        $(".btnGrid").append(row);
    }
    var item = $('<td></td>');
    var course = $('<h3></h3>').text(courseName);
    var nMembers = $('<p></p>').text(num + " member(s)");
    var status = $('<p></p>').text(locName);
    item.append(course, nMembers, status);
    row.append(item);
    item.hide();
    item.fadeIn(500);
    j++;
}
