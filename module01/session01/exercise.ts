let width: number = 3
let len: number = 5
let result: number

result = width * len

console.log(result)

// ==========

let r: number = 5
const PI: number = 3.14
// const MY_NAME = "dimas"
let circ: number
let area: number

circ = 2 * PI * r
area = PI * r * r

console.log(circ)
console.log(area)

// ==== 
let days = 366 // days 
let yearDays = 365
let monthDays = 30

let year = Math.floor(days / yearDays) // pembulatan tahun 
let leftDays = days % yearDays // sisa hari 
let month = Math.floor(leftDays / monthDays) // pembulatan bulan 
let leftMonthDays = leftDays % monthDays // sisa hari 

console.log(year, " year ,", month, " month ,", leftMonthDays, " days")

let date1: Date = new Date("2022-01-20")
let date2: Date = new Date("2020-01-22")
let result: number = date1 - date2

console.log(result / (24 * 60 * 60 * 1000))


