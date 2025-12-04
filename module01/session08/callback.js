function calculator(a, b, cb) {
    var result = a + b;
    return cb(result);
}
var res = calculator(5, 6, function (num) {
    return num;
});
console.log(res);
var products = [
    { name: "abc", price: 1000 },
    { name: "def", price: 2000 }
];
var money = 5000;
function shopping(product, money, cb) {
    console.log(product === null || product === void 0 ? void 0 : product.name, " dibeli dengan harga : ", product === null || product === void 0 ? void 0 : product.price);
    console.log("uang anda : ", money);
    cb(money - (product === null || product === void 0 ? void 0 : product.price));
}
shopping(products[0], money, function (changes) {
    console.log("kembalian anda : ", changes);
    console.log("===========================");
    shopping(products[1], changes, function (changes) {
        console.log("kembalian anda : ", changes);
        console.log("===========================");
        shopping(products[1], changes, function (changes) {
            console.log("kembalian anda : ", changes);
            console.log("===========================");
            shopping(products[1], changes, function (changes) {
                console.log("kembalian anda : ", changes);
                console.log("===========================");
                shopping(products[1], changes, function (changes) {
                    console.log("kembalian anda : ", changes);
                    console.log("===========================");
                    shopping(products[1], changes, function (changes) {
                        console.log("kembalian anda : ", changes);
                        console.log("===========================");
                        shopping(products[1], changes, function (changes) {
                            console.log("kembalian anda : ", changes);
                            console.log("===========================");
                            shopping(products[1], changes, function (changes) {
                                console.log("kembalian anda : ", changes);
                                console.log("===========================");
                                shopping(products[1], changes, function (changes) {
                                    console.log("kembalian anda : ", changes);
                                    console.log("===========================");
                                    shopping(products[1], changes, function (changes) {
                                        console.log("kembalian anda : ", changes);
                                        console.log("===========================");
                                        shopping(products[1], changes, function (changes) {
                                            console.log("kembalian anda : ", changes);
                                            console.log("===========================");
                                            shopping(products[1], changes, function (changes) {
                                                console.log("kembalian anda : ", changes);
                                                console.log("===========================");
                                                shopping(products[1], changes, function (changes) {
                                                    console.log("kembalian anda : ", changes);
                                                    console.log("===========================");
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
