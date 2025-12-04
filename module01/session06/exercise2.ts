class Product {
    private name: string = ""
    private price: number = 0

    set setName(name: string) {
        if (name == "") {
            console.log(" name is required")
        } else {
            this.name = name
        }
    }

    get getName() {
        return this.name
    }

    set setPrice(price: number) {
        if (price < 0) {
            console.log(" price must be higher than 0")
        } else {
            this.price = price
        }
    }

    get getPrice() {
        return this.price
    }
}

class Transaction {
    total: number = 0
    products: { product: Product, qty: number, subtotal: number }[] = []

    addToCart(product: Product, qty: number) {

        this.products.push({
            product: product,
            qty: qty,
            subtotal: product.getPrice * qty
        })

        this.total += product.getPrice * qty
    }
    showTotal() {
        return this.total
    }
    checkout() {
        return {
            detail: this.products,
            total: this.total
        }
    }
}


// product1 adalah object dari class Product
let product1 = new Product()
product1.setName = "NZXT Tower Matle Black"
product1.setPrice = 1500000
console.log(product1)

let product2 = new Product()
product2.setName = "Harddisk 1TB Seagate"
product2.setPrice = 800000
console.log(product2)

let trx1 = new Transaction()

trx1.addToCart(product1, 1)
trx1.addToCart(product2, 2)

console.log(trx1.showTotal())

// console.log(trx1.products)

console.log(trx1.checkout())





