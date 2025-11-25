var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class
// bisa memproduce object 
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = "";
        this.age = 0;
        this.token = "mytoken";
        this.password = "MyPassword1234";
        this.name = name;
        this.age = age;
        //console.log(" saat kapan di eksekusi constructor ?")
    }
    User.filterUser = function () {
        console.log("filtering users");
    };
    User.addUser = function (user) {
        this.users.push(user);
    };
    // object method
    User.prototype.greeting = function () {
        console.log("hello iam a user.");
        console.log("my name is ", this.name);
    };
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            if (name.length <= 4) {
                console.log("name at least 4 chars");
            }
            else {
                this.name = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setToken", {
        set: function (token) {
            this.token = token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getToken", {
        get: function () {
            console.log(this.name, " token is ", this.token);
            return this.token;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getPassword = function () {
        console.log(this.name, " password is ", this.password);
    };
    User.users = [];
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.isSubscription = false;
        _this.price = 0;
        return _this;
    }
    return Member;
}(User));
// function User2() {
//     this.name = ""
//     this.age = 0
//     this.greeting(){
//         console.log("hello iam a user")
//     }
// }
console.log(User);
// console.log(User2)
var user1 = new User("Dimas", 30); // object dari class User dibuat, constructor di eksekusi
var user2 = new User("Rian", 20); // obejct dari class User dibuat, constructor di eksekusi 
// console.log(user1)
// console.log(user2)
// user1.name = "Dimas" // mengganti data user1 
// user1.age = 20
// user2.name = "Rian" // mengganti data user2 
// user2.age = 19
console.log(user1);
console.log(user2);
user1.greeting();
user2.greeting();
// console.log(user1.name) // tidak boleh langsung mengakses property seperti 
// console.log(user1.token) // harus melalu setter dan geter
// user1.getToken() gak bisa di akses karena protected dan private 
// user1.getPassword()
console.log(user1.getName);
user1.setName = "Aries Dimas Yudhistira";
console.log(user1.getName);
// console.log(user1.users) <-- object tidak mengakses static property or method
console.log(User.users);
User.addUser(user1);
User.addUser(user2);
console.log(User.users);
var member1 = new Member("Fransen", 60);
member1.isSubscription = true;
console.log(member1);
console.log(member1 instanceof User);
console.log(user1 instanceof User);
console.log(member1 instanceof Member);
console.log(user2 instanceof Member);
