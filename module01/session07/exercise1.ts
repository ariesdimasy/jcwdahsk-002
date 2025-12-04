function excelSheetColumn(column: string) {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let power = column.length - 1
    let res = 0
    for (let i = 0; i < column.length; i++) {
        let findNum = 0
        for (let j = 0; j < abc.length; j++) {
            if (abc[j] == column[i]) {
                findNum = j + 1
                break
            }
        }

        let subtotal = findNum * (26 ** power)
        res += subtotal
        power--
    }

    return res
}

console.log(excelSheetColumn("A")) // 1
console.log(excelSheetColumn("B")) // 2
console.log(excelSheetColumn("AA")) // 27
console.log(excelSheetColumn("ZZ")) // 
console.log(excelSheetColumn("AB")) // 
console.log(excelSheetColumn("ABC")) //