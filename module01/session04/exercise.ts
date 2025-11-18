function splitString(str: string) {
    let result = []
    let res = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            res = res + str[i]
            if (i === str.length - 1) {
                result.push(res)
                res = ""
            }
        } else {
            result.push(res)
            res = ""
        }
    }

    return result
}

console.log(splitString("Hello World"))
console.log(splitString("Hello World Dimas"))

function removeAllOdds(nums: number[]) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(nums[i])
        }
    }

    return result
}

console.log(removeAllOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function stairNumber(height: number) {
    let res = "" // string
    for (let i = 1; i <= height; i++) {
        res = res + " " + i // 1 + 2 
        console.log(res)
    }
}

stairNumber(5)
stairNumber(6)

/*
1
12
123

*/