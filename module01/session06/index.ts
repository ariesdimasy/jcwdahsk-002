interface IAddress {
    street: string
    district: string
    city: string
    province: string
}

interface IUser {
    name: string
    age: number
    "alamat-saya": string
    typeCode: () => void
    run: () => void
    read: () => void
    salary?: number
    address?: IAddress
}

let myObj = {}
let myName = "Aries Dimas" // adalah object dari class bawaan js yaitu String()
let nameAgain = myName // Aries Dimas
let myKey = "age"

// object literal 
let user: IUser = {
    name: "Dimas",
    age: 30,
    "alamat-saya": "puri kembangan",
    // address: {
    //     "street": "Kebasiran",
    //     "district": "pagedangan",
    //     city: "tangerang regency",
    //     province: "banten"
    // },
    typeCode: () => {

        console.log(user.name + " coding ...")
    },
    run: function () {

        console.log(this.name + " running ...")
    },
    read() {
        console.log(this.name + " reading ...")
    }
}
let person = user

console.log(user.name)
user.run()

console.log(myName.toLowerCase())
console.log(myName.split(""))

console.log(typeof myName)

let myNameArr = myName.split("")

console.log(typeof myNameArr)
console.log(typeof [])

console.log(user["age"]) // user.age
console.log(user["myKey"]) // undefined 
console.log(user[myKey]) // user["name"]
console.log(user["alamat-saya"])

console.log(user)
delete user['alamat-saya']
// delete user['run']
console.log(user)

console.log(user.address?.street) // user.address ?  user.address.street : user.address
// user 
// address 
// street

// console.log(user, user.address)

console.log(Object.keys(user))

let num = 90 // primitive 
let nums = [1, 2, 3] // data structure / non - primitive 
let numbers = nums
console.log(nums)
console.log(numbers)

num = 91 // reassign  / IMMUTABLE artinya perbagian dari value nya gak bisa ganti 
// myName[1] = "N
console.log(myName)

nums[1] = 90 // MUTABLE artinya perbagian dari value nya BISA diganti 

console.log("nums => ", nums) // [1,90,3]
console.log("numbers => ", numbers) // [1,90,3] passing by reference

console.log(nameAgain)

myName += " Yudhistira"
console.log(myName)// Aries Dimas Yudhistira --> passing by value

console.log(nameAgain) // Aries Dimas --> passing by value 

user["salary"] = 12000000

console.log(user)
user.age = 20
console.log(user)

console.log(person)

for (let key in person) {
    console.log(key, " => ", person[key])
}

// let num1 = 10
// let num2 = 20

let [num1, num2] = [10, 20] // destructuring

// let name = user.name 
// let age = user.age
let { name, age } = user

// console.log(num1, num2)

console.log(name, age)

type TOtherObj = {
    color: string
    move: (direction: string) => void
}

let otherObj: TOtherObj = {
    color: 'red',
    move: (direction: string) => {
        console.log(" move ", direction)
    }
}

let merge = { ...user, ...otherObj }

console.log(merge)

user.typeCode()
user.read()
user.run()

let user2 = {}

Object.assign(user2, user)

console.log(user2)

let user3 = Object.create({ a: 1, b: 2 })

console.log(user3.a)
