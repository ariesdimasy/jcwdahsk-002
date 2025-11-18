import { add } from '../session02/intro';
hello(2)
console.log('==============================')

function hello(num: number) {
    for (let i = 1; i <= num; i++) {
        console.log("hello ")
    }
}

hello(5) // pemanggilan function
// ==================================================
console.log('==============================')
hello(15)



const showMessage = (message: string): void => {
    console.log("showMessage : ", this)
    console.log("Message : ", message)
}

showMessage("hello my family")

function sum(a: number, b: number, c = 10): number {

    console.log(" sum => ")
    return a + b + c
}

let result = sum(10, 20, 5) // 35
let res = sum(20, 30)
console.log("Result : ", result)
console.log("Res : ", res)

function showPeople(a: string, b: string, ...c: string[]): void {
    console.log("a : ", a)
    console.log("b : ", b)
    console.log("c : ", c)
}

showPeople("Luffy", "Zoro", "Nami", "Usopp", "Sanji");


function addTotal(num: number): number {
    let total = 0
    total += num
    return total
}

console.log(addTotal(10))
console.log(addTotal(30))

// () => {} disebut dengan arrow function, expression function
function getMessage(name: string): string {
    const sayHello = () => {
        return "Hello " + " " + name
    }

    const welcomeMessage = () => {
        return "Welcome to Purwadhika"
    }

    return sayHello() + " " + welcomeMessage()
}

const message: string = getMessage("Adi")
console.log(message)

let merge = "aries" + " " + "syahputra"
console.log(merge)

console.log(" ============== ")

function countDown(num: number) {
    console.log(num)
    // 10 > 0  
    if (num > 0) { // BASE CASE
        num = num - 1
        countDown(num)
    }
}

function addMore(num: number): number {
    // 0 > 0
    if (num > 0) {
        return addMore(num - 1) + num // 5
    } else {
        return num
    }
}

countDown(11)
console.log("=====")
console.log(addMore(5)) //  0 +  1  + 2  +  3  +  4  +  5 = 15 

const addString = () => {
    let str = "a" + "b"
    return str
}

console.log(addString())

console.log(isNaN(45)) // is Not a Number ? 
console.log(isNaN("a"))