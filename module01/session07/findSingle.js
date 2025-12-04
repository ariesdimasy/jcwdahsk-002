function findSingle(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        }
        else {
            obj[arr[i]] = 1;
        }
    }
    for (var item in obj) {
        if (obj[item] === 1) {
            return item;
        }
    }
    return -1;
}
console.log(findSingle([2, 2, 1]));
console.log(findSingle([4, 1, 2, 1, 2]));
