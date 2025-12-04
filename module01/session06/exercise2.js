var Product = /** @class */ (function () {
    function Product() {
        this.name = "";
        this.price = 0;
    }
    Object.defineProperty(Product.prototype, "setName", {
        set: function (name) {
            if (name == "") {
                console.log(" name is required");
            }
            else {
                this.name = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "setPrice", {
        set: function (price) {
            if (price < 0) {
                console.log(" price must be higher than 0");
            }
            else {
                this.price = price;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.total = 0;
        this.products = [];
    }
    Transaction.prototype.addToCart = function (product, qty) {
        this.products.push({
            product: product,
            qty: qty,
            subtotal: product.getPrice * qty
        });
        this.total += product.getPrice * qty;
    };
    Transaction.prototype.showTotal = function () {
        return this.total;
    };
    Transaction.prototype.checkout = function () {
        return {
            detail: this.products,
            total: this.total
        };
    };
    return Transaction;
}());
// product1 adalah object dari class Product
var product1 = new Product();
product1.setName = "NZXT Tower Matle Black";
product1.setPrice = 1500000;
console.log(product1);
var product2 = new Product();
product2.setName = "Harddisk 1TB Seagate";
product2.setPrice = 800000;
console.log(product2);
var trx1 = new Transaction();
trx1.addToCart(product1, 1);
trx1.addToCart(product2, 2);
console.log(trx1.showTotal());
// console.log(trx1.products)
console.table(trx1.checkout());
