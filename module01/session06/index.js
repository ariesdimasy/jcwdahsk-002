var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var myObj = {};
var myName = "Aries Dimas"; // adalah object dari class bawaan js yaitu String()
var nameAgain = myName; // Aries Dimas
var myKey = "age";
var user = {
    name: "Dimas",
    age: 30,
    "alamat-saya": "puri kembangan",
    // address: {
    //     "street": "Kebasiran",
    //     "district": "pagedangan",
    //     city: "tangerang regency",
    //     province: "banten"
    // },
    typeCode: function () {
        console.log(user.name + " coding ...");
    },
    run: function () {
        console.log(this.name + " running ...");
    },
    read: function () {
        console.log(this.name + " reading ...");
    }
};
var person = user;
console.log(user.name);
user.run();
console.log(myName.toLowerCase());
console.log(myName.split(""));
console.log(typeof myName);
var myNameArr = myName.split("");
console.log(typeof myNameArr);
console.log(typeof []);
console.log(user["age"]); // user.age
console.log(user["myKey"]); // undefined 
console.log(user[myKey]); // user["name"]
console.log(user["alamat-saya"]);
console.log(user);
delete user['alamat-saya'];
// delete user['run']
console.log(user);
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.street); // user.address ?  user.address.street : user.address
// user 
// address 
// street
// console.log(user, user.address)
console.log(Object.keys(user));
var num = 90; // primitive 
var nums = [1, 2, 3]; // data structure / non - primitive 
var numbers = nums;
console.log(nums);
console.log(numbers);
num = 91; // reassign  / IMMUTABLE artinya perbagian dari value nya gak bisa ganti 
// myName[1] = "N
console.log(myName);
nums[1] = 90; // MUTABLE artinya perbagian dari value nya BISA diganti 
console.log("nums => ", nums); // [1,90,3]
console.log("numbers => ", numbers); // [1,90,3] passing by reference
console.log(nameAgain);
myName += " Yudhistira";
console.log(myName); // Aries Dimas Yudhistira --> passing by value
console.log(nameAgain); // Aries Dimas --> passing by value 
user["salary"] = 12000000;
console.log(user);
user.age = 20;
console.log(user);
console.log(person);
for (var key in person) {
    console.log(key, " => ", person[key]);
}
// let num1 = 10
// let num2 = 20
var _b = [10, 20], num1 = _b[0], num2 = _b[1]; // destructuring
// let name = user.name 
// let age = user.age
var name = user.name, age = user.age;
// console.log(num1, num2)
console.log(name, age);
var otherObj = {
    color: 'red',
    move: function (direction) {
        console.log(" move ", direction);
    }
};
var merge = __assign(__assign({}, user), otherObj);
console.log(merge);
user.typeCode();
user.read();
user.run();
var user2 = {};
Object.assign(user2, user);
console.log(user2);
var user3 = Object.create({ a: 1, b: 2 });
console.log(user3.a);
