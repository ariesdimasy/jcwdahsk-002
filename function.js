function hello(num) {
    for (let i=1; i<=num; i++) {
        console.log("hello")
    }
}

hello(7);

const showMessage = (message) => {
    console.log("message: ", message)
}

showMessage('hello my family')

function sum(a, b, c = 10) {
    return a + b + c
}

let result = sum(10, 20, 5)
let res = sum(20, 30)
console.log('result : ', result)
console.log('res : ', res)

function showPeople(a, b, ...c) {
    console.log('a: ', a)
    console.log('b: ', b)
    console.log('c: ', c)
}

showPeople('luffy', 'zoro', 'nami', 'usopp', 'sanji');

function addTotal(num) {
    let total  = 0
    total += num
    return total
}

console.log(addTotal(10))
console.log(addTotal(30))

function getMessage(name) {
    const sayHello = () => {
        return 'hello ' + ' ' + name
    }

    const welcomeMessage = () => {
        return 'welcome to purwadhika'
    }

    return sayHello() + ' ' + welcomeMessage()
}

const message = getMessage('adi')
console.log(message)

let merge = 'aries' + ' ' + 'syahputra'
console.log(merge)


console.log('================')

function countDown(num) {
    console.log(num)
    if (num>0){
        num=num-1
        countDown(num)
    }
}

function addMore(num) {
    if (num>0){
        return addMore(num-1) + num
    } else {
        return num
    }
}


countDown(11)
console.log('======')
console.log(addMore(5)) // 0+1+2+3+4+5 = 15
