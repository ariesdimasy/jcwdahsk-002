var arr1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
];
var arr2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
];
for (var i = 0; i < arr2.length; i++) {
    var flag = true;
    for (var j = 0; j < arr1.length; j++) {
        if (arr2[i].name == arr1[j].name) {
            flag = false;
            break;
        }
    }
    if (flag) {
        arr1.push(arr2[i]);
    }
}
console.log(arr1);
function swipeObject(arr) {
    var res = [];
    arr.forEach(function (item) {
        var newObj = {};
        for (var key in item) {
            var value = item[key];
            newObj[value] = key;
        }
        res.push(newObj);
    });
    return res;
}
function factorial(num) {
    if (num >= 2) {
        return num * factorial(num - 1);
    }
    else {
        return 1;
    }
}
// 5 * 4 * 3 * 2 * 1  * 1
console.log(swipeObject([{
        name: "david", age: 20
    }, {
        name: "dimas", age: 34, title: "software engineer"
    }]));
console.log(factorial(5));
