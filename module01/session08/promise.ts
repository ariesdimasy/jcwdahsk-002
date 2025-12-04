const users: string[] = []

// const getUsers = new Promise((resolve, reject) => {
//     if (users.length > 0) {
//         resolve(users)
//     } else {
//         reject("user not found")
//     }
// })

// getUsers
//     .then((res) => {
//         console.log(" users : ", res)
//     })
//     .catch((err) => {
//         console.log("err : ", err)
//     })
//     .finally(() => {
//         console.log(" finally done ")
//     })

let products = [
    { name: "abc", price: 1000 },
    { name: "def", price: 2000 }
]

let money = 5000

// function shopping(product: { name: string, price: number } | undefined, money: number, cb: (changes: number) => void) {
//     console.log(product?.name, " dibeli dengan harga : ", product?.price)
//     console.log("uang anda : ", money)
//     cb(money - product?.price)
// }

const shopping = (product: { name: string, price: number } | undefined, money: number) => {
    console.log(product?.name, " dibeli dengan harga : ", product?.price)
    console.log("uang anda : ", money)
    return new Promise((resolve, reject) => {
        if (money - product?.price >= 0) {
            resolve(money - product?.price)
        } else {
            reject("money tidak cukup")
        }
    })
}

shopping(products[0], money)
    .then(function (res) {
        console.log("kembalian anda : ", res)
        console.log("===========================")
        return shopping(products[1], res)
    })
    .then((res) => {
        console.log("kembalian anda : ", res)
        console.log("===========================")
        return shopping(products[1], res)
    })
    .then((res) => {
        console.log(" money tidak ada 1 ")
        console.log("kembalian anda : ", res)
        console.log("===========================")
        return shopping(products[1], res)
    })
    .then((res) => {
        console.log(" money tidak ada 2 ")
        console.log("kembalian anda : ", res)
        console.log("===========================")
        return shopping(products[1], res)
    })
    .then((res) => {
        console.log(" money tidak ada 2 ")
        console.log("kembalian anda : ", res)
        console.log("===========================")
        return shopping(products[1], res)
    })
    .catch((err) => {
        console.log("err : ", err)
    })