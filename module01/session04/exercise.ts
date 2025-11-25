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

function fizzBuzz(fizz: number, buzz: number, n: number) {

    for (let i = 1; i <= n; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            console.log(i, "fizzBuzz")
        }
        else if (i % buzz === 0) {
            console.log(i, ": buzz")
        } else if (i % fizz === 0) { // 12 habis dibagi 3 ?? habis 
            console.log(i, " : fizz")
        }
        else {
            console.log(i)
        }
    }

}

fizzBuzz(3, 4, 100)

function bmi(weight: number, height: number) {

    let calculate = weight / Math.pow(height, 2)

    if (calculate < 18.5) {
        console.log("less weight")
    } else if (calculate >= 18.5 && calculate <= 24.9) {
        console.log("ideal")
    } else if (calculate >= 30 && calculate <= 39.9) {
        console.log("very overweight")
    }

}

bmi(90, 1.7)

function stairAdvance(height: number) {

    let counter = 1
    for (let i = 1; i <= height; i++) {
        let str = "" // str = ""

        // i = 2
        for (let j = 1; j <= i; j++) {

            str += (counter < 10) ? '0' + counter + " " : counter + " " // 

            counter++
        }
        console.log(str) //
    }
}

stairAdvance(8)