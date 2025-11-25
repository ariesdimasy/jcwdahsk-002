var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function arrToString(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += " and " + arr[i];
        }
        else {
            str += arr[i] + ',';
        }
    }
    return str;
}
console.log(arrToString(["mera-mera", "bara-bara", "gura-gura"]));
function secondSmallest(nums) {
    var mySort = nums.sort(function (a, b) {
        // console.log("a -> ", a)
        // console.log("b -> ", b)
        // console.log("result = ", b - a)
        return b - a;
    });
    console.log(mySort);
    return mySort[1];
}
// [3, 7, 2, 8, 10] 
// [3, 7, 2, 8, 10]
// 3 - 7
// 3 - 2 
// 3 - 8 
// 3 - 10
// 7 - 2 
// 7 - 8
// 7 - 10
// 2 - 8
// 2 - 10
console.log(secondSmallest([3, 7, 2, 8, 10]));
function addItemArray(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var res = arr1[i] + arr2[i];
        result.push(res);
    }
    return result;
}
console.log(addItemArray([1, 2, 3], [3, 2, 1]));
// [1,2,3,4,5] 0 --> 
function addDataArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        // 1 == 9 
        if (arr[i] == num) {
            return arr;
        }
    }
    arr.push(num);
    return arr;
}
// system flagging 
console.log(addDataArray([1, 2, 3, 4, 5], 3));
console.log(addDataArray([1, 2, 3, 4, 5], 7));
function totalNumberDataType(arr) {
    var total = 0; // 3
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            total += arr[i];
        }
    }
    return total; // 
}
console.log(totalNumberDataType(["b", 3, undefined, null, [], 1, true, "a", 4, false]));
function removeOverflowData(arr, maxSize) {
    var newArr = [];
    for (var i = 0; i < maxSize; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(removeOverflowData([5, 10, 24, 11, 5, 4, 3, 2, 1], 5));
// built in method
function combineArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(combineArray([1, 2, 3, 4], [5, 6, 7, 8]));
function findDuplicateNumber(arr) {
    var duplicates = [];
    // arr must be ordered
    arr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && duplicates[duplicates.length - 1] != arr[i]) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}
console.log(findDuplicateNumber([1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5]));
console.log(findDuplicateNumber([1, 2, 4, 2, 5, 3, 7, 4, 4, 8, 5]));
function findDifference(num1, num2) {
    var newArr = [];
    var mergeArr = __spreadArray(__spreadArray([], num1, true), num2, true);
    for (var i = 0; i < mergeArr.length; i++) {
        var isDiff = true;
        for (var j = 0; j < mergeArr.length; j++) {
            if (mergeArr[i] === mergeArr[j] && i !== j) {
                isDiff = false;
                break;
            }
        }
        if (isDiff) {
            newArr.push(mergeArr[i]);
        }
    }
    return newArr;
}
console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
