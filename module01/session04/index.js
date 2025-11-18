var fruits = ["mera - mera", "moku - moku", "suna - suna"];
var fruitsParamecia = ["gomu - gomu", "bari - bari", "doku - doku"];
console.log(fruits);
// let fruits2 = new Array("mera - mera", "moku - moku", "suna - suna")
// console.log(fruits2)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
var fruitsData = [
    { name: "mera - mera", type: "logia", power: "fire" },
    { name: "moku - moku", type: "logia", power: "smoke" },
    { name: "suna - suna", type: "logia", power: "sand" },
];
console.log(fruitsData);
console.log(fruitsData.length);
fruits.push("hie - hie");
console.log(fruits);
fruits[2] = "gura - gura";
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("yami - yami");
console.log(fruits);
// panjang datanya adalah 4 
// i dari 0 sampai 4 --> 
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var item = fruits_1[_i];
    console.log(item);
}
fruits.forEach(function (item, index) {
    console.log(index, item);
});
console.log(fruits.concat(fruitsParamecia));
console.log(fruitsParamecia.toString());
var myItem = function (item) {
    console.log("name : ", item.name);
    console.log("type : ", item.type);
    console.log("power : ", item.power);
};
fruitsData.map(myItem); // ===>
var mySort = fruits.sort(function (a, b) {
    return a > b ? 1 : -1;
});
console.log(mySort);
// panjang datanya 4 tadinya , yg mana last index 3
fruits[4] = "goro - goro"; // data tidak immutable ( mutate the original array)
fruits[10] = "nagi - nagi";
console.log(fruits);
// fruits = [
//     ...fruits,
//     "tori - tori"
// ]
// console.log(fruits)
