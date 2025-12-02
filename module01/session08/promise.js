var users = [];
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
var products = [
    { name: "abc", price: 1000 },
    { name: "def", price: 2000 }
];
var money = 5000;
// function shopping(product: { name: string, price: number } | undefined, money: number, cb: (changes: number) => void) {
//     console.log(product?.name, " dibeli dengan harga : ", product?.price)
//     console.log("uang anda : ", money)
//     cb(money - product?.price)
// }
var shopping = function (product, money) {
    console.log(product === null || product === void 0 ? void 0 : product.name, " dibeli dengan harga : ", product === null || product === void 0 ? void 0 : product.price);
    console.log("uang anda : ", money);
    return new Promise(function (resolve, reject) {
        if (money - (product === null || product === void 0 ? void 0 : product.price) >= 0) {
            resolve(money - (product === null || product === void 0 ? void 0 : product.price));
        }
        else {
            reject("money tidak cukup");
        }
    });
};
shopping(products[0], money)
    .then(function (res) {
    console.log("kembalian anda : ", res);
    console.log("===========================");
    return shopping(products[1], res);
})
    .then(function (res) {
    console.log("kembalian anda : ", res);
    console.log("===========================");
    return shopping(products[1], res);
})
    .then(function (res) {
    console.log(" money tidak ada 1 ");
    console.log("kembalian anda : ", res);
    console.log("===========================");
    return shopping(products[1], res);
})
    .then(function (res) {
    console.log(" money tidak ada 2 ");
    console.log("kembalian anda : ", res);
    console.log("===========================");
    return shopping(products[1], res);
})
    .catch(function (err) {
    console.log("err : ", err);
});
