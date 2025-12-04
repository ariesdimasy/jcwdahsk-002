function excelSheetColumn(column) {
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var power = column.length - 1;
    var res = 0;
    for (var i = 0; i < column.length; i++) {
        var findNum = 0;
        for (var j = 0; j < abc.length; j++) {
            if (abc[j] == column[i]) {
                findNum = j + 1;
                break;
            }
        }
        var subtotal = findNum * (Math.pow(26, power));
        res += subtotal;
        power--;
    }
    return res;
}
console.log(excelSheetColumn("A")); // 1
console.log(excelSheetColumn("B")); // 2
console.log(excelSheetColumn("AA")); // 27
console.log(excelSheetColumn("ZZ")); // 
console.log(excelSheetColumn("AB")); // 
console.log(excelSheetColumn("ABC")); //
