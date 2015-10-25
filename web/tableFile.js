var tableSize;
if (tableSize == null) {
    tableSize = 0;
}
function addTableItem() {
    //get the table element
    var table = document.getElementById("btnGrid");
    //Check the number of columns
    columnNum = tableSize % 2;
    var row = table.insertRow(0);
    var cell = row.insertCell(columnNum);
    cell.innerHTML = "new" + tableSize++;
}
