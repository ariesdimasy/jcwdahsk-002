function calculator(a: number, b: number, cb: (num: number) => number) {
    let result = a + b
    return cb(result)
}
const res = calculator(5, 6, (num: number) => {
    return num
})

console.log(res)

let products = [
    { name: "abc", price: 1000 },
    { name: "def", price: 2000 }
]

let money = 5000

function shopping(product: { name: string, price: number } | undefined, money: number, cb: (changes: number) => void) {
    console.log(product?.name, " dibeli dengan harga : ", product?.price)
    console.log("uang anda : ", money)
    cb(money - product?.price)
}

shopping(products[0], money, (changes: number) => {
    console.log("kembalian anda : ", changes)
    console.log("===========================")
    shopping(products[1], changes, (changes: number) => {
        console.log("kembalian anda : ", changes)
        console.log("===========================")
        shopping(products[1], changes, (changes: number) => {
            console.log("kembalian anda : ", changes)
            console.log("===========================")
            shopping(products[1], changes, (changes: number) => {
                console.log("kembalian anda : ", changes)
                console.log("===========================")
                shopping(products[1], changes, (changes: number) => {
                    console.log("kembalian anda : ", changes)
                    console.log("===========================")
                    shopping(products[1], changes, (changes: number) => {
                        console.log("kembalian anda : ", changes)
                        console.log("===========================")
                        shopping(products[1], changes, (changes: number) => {
                            console.log("kembalian anda : ", changes)
                            console.log("===========================")
                            shopping(products[1], changes, (changes: number) => {
                                console.log("kembalian anda : ", changes)
                                console.log("===========================")
                                shopping(products[1], changes, (changes: number) => {
                                    console.log("kembalian anda : ", changes)
                                    console.log("===========================")
                                    shopping(products[1], changes, (changes: number) => {
                                        console.log("kembalian anda : ", changes)
                                        console.log("===========================")
                                        shopping(products[1], changes, (changes: number) => {
                                            console.log("kembalian anda : ", changes)
                                            console.log("===========================")
                                            shopping(products[1], changes, (changes: number) => {
                                                console.log("kembalian anda : ", changes)
                                                console.log("===========================")
                                                shopping(products[1], changes, (changes: number) => {
                                                    console.log("kembalian anda : ", changes)
                                                    console.log("===========================")
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

