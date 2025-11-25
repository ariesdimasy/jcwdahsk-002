// class
// bisa memproduce object 
class User {
    private name: string = ""
    age: number = 0
    protected token = "mytoken"
    private password = "MyPassword1234"
    static users: User[] = []

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
        //console.log(" saat kapan di eksekusi constructor ?")
    }

    static filterUser() {
        console.log("filtering users")
    }

    static addUser(user: User) {
        this.users.push(user)
    }



    // object method
    greeting() {
        console.log("hello iam a user.")
        console.log("my name is ", this.name)
    }

    set setName(name: string) {
        if (name.length <= 4) {
            console.log("name at least 4 chars")
        } else {
            this.name = name
        }
    }

    get getName() {
        return this.name
    }

    set setToken(token: string) {
        this.token = token
    }

    get getToken() {
        console.log(this.name, " token is ", this.token)
        return this.token
    }

    private getPassword() {
        console.log(this.name, " password is ", this.password)
    }
}

class Member extends User {
    constructor (name: string, age: number) {
        super(name, age)
    }
    isSubscription: boolean = false
    price: number = 0
}

// function User2() {
//     this.name = ""
//     this.age = 0

//     this.greeting(){
//         console.log("hello iam a user")
//     }
// }

console.log(User)
// console.log(User2)

let user1: User = new User("Dimas", 30) // object dari class User dibuat, constructor di eksekusi
let user2: User = new User("Rian", 20) // obejct dari class User dibuat, constructor di eksekusi 

// console.log(user1)
// console.log(user2)

// user1.name = "Dimas" // mengganti data user1 
// user1.age = 20

// user2.name = "Rian" // mengganti data user2 
// user2.age = 19

console.log(user1)
console.log(user2)

user1.greeting()
user2.greeting()

// console.log(user1.name) // tidak boleh langsung mengakses property seperti 
// console.log(user1.token) // harus melalu setter dan geter

// user1.getToken() gak bisa di akses karena protected dan private 
// user1.getPassword()

console.log(user1.getName)
user1.setName = "Aries Dimas Yudhistira"
console.log(user1.getName)

// console.log(user1.users) <-- object tidak mengakses static property or method
console.log(User.users)

User.addUser(user1)
User.addUser(user2)

console.log(User.users)

let member1 = new Member("Fransen", 60)

member1.isSubscription = true
console.log(member1)

console.log(member1 instanceof User)
console.log(user1 instanceof User)
console.log(member1 instanceof Member)
console.log(user2 instanceof Member)