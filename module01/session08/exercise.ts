let arr1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" }
]

let arr2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" }
]

for (let i = 0; i < arr2.length; i++) {
    let flag = true
    for (let j = 0; j < arr1.length; j++) {
        if (arr2[i].name == arr1[j].name) {
            flag = false
            break
        }
    }
    if (flag) {
        arr1.push(arr2[i])
    }
}

console.log(arr1)




function swipeObject(arr: any[]) {
    let res: any[] = []
    arr.forEach((item: any) => {
        let newObj = {}

        for (let key in item) {
            let value = item[key]
            newObj[value] = key
        }

        res.push(newObj)
    })

    return res
}

function factorial(num: number) {
    if (num >= 2) {
        return num * factorial(num - 1)
    } else {
        return 1
    }
}

// 5 * 4 * 3 * 2 * 1  * 1

console.log(swipeObject([{
    name: "david", age: 20
}, {
    name: "dimas", age: 34, title: "software engineer"
}]))

console.log(factorial(5))
