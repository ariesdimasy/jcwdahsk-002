// console.log(" task 1")
// console.log(" task 2")
// console.log(" task 3")

// console.log(" task 1") // synchronous
// setTimeout(() => console.log(" task 2"), 2000) // asynchronous
// console.log(" task 3") // synchronous

// setTimeout(() => console.log(" task 1"), 4000) // asynchronous
// setTimeout(() => console.log(" task 2"), 5000) // asynchronous
// setTimeout(() => console.log(" task 3"), 3000) // asynchronous

setTimeout(() => console.log(" task 1"), 3000) // gambar dalam web 
console.log(" task 2") // skeleton dalam web 
setTimeout(() => console.log(" task 3"), 1000) // text description

setTimeout(action, 2000)

function action() {
    console.log(" do something ...")
}