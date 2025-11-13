let num: number = 1 // awalan 
let num2: number = 3

// ditambahkan angka 2 
// sebanyak 3 kali 

// diulang sebanyak berapa kali ? 3 kali
// num += 2
// num += 2
// num += 2

// naik / turun = naik 
// step / langkah = 2 langkah 


// console.log(num)
// num = 5 
// i = 1 , true 
// i = 2 , true 
// i = 3 , true
// i = 4
// for (let i = 1; i <= 3; i += 1) {
//     let j = 1
//     num += 2 // 7
//      console.log(num) // 7
// }

// console.log(num)
// console.log(i, j)

let j = 1

// 1 <= 3 true
// 2 <= 3 true
// 3 <= 3 true
// 4 <= 3 false

// while : check condition first, then execute the code block
while (j <= 3) {

    num += 2 // 3 
    console.log(num)
    j += 1 // 3 + 1 = 4
}

console.log(j) // 4

// do while : execute the code block first, then check the condition
console.log("=============================")
let k = 1
do {
    num2 += 2 // 5 , 7 , 9
    console.log(num2) // 9
    k += 1 // 4
} while (k <= 3) // 4 <= 3 --> false 

console.log(k)
console.log(num2)

let numbers = [1, 2, 3, 4, 5]

// for ... of 
for (let number of numbers) {
    console.log(number)
}

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for (let key in obj) {
    console.log(key, obj[key])
}

for (let i = 0; i < 5; i++) {

    if (i === 3) {
        continue
    }
    console.log(" number : ", i)
}



