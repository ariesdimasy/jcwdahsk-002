function arrToString(arr: string[]) {
    let str: string = ""
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            str += " and " + arr[i]
        } else {
            str += arr[i] + ','
        }
    }
    return str
}

console.log(arrToString(["mera-mera", "bara-bara", "gura-gura"]))

function secondSmallest(nums: number[]) {
    let mySort = nums.sort((a: number, b: number) => {
        // console.log("a -> ", a)
        // console.log("b -> ", b)
        // console.log("result = ", b - a)
        return b - a

    });
    console.log(mySort)
    return mySort[1]
}

// [3, 7, 2, 8, 10] 
// [3, 7, 2, 8, 10]
// 3 - 7
// 3 - 2 
// 3 - 8 
// 3 - 10

// 7 - 2 
// 7 - 8
// 7 - 10

// 2 - 8
// 2 - 10
console.log(secondSmallest([3, 7, 2, 8, 10]))

function addItemArray(arr1: number[], arr2: number[]) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        let res = arr1[i] + arr2[i]
        result.push(res)
    }

    return result
}

console.log(addItemArray([1, 2, 3], [3, 2, 1]))

// [1,2,3,4,5] 0 --> 
function addDataArray(arr: number[], num: number) {

    for (let i = 0; i < arr.length; i++) {
        // 1 == 9 
        if (arr[i] == num) {

            return arr
        }
    }

    arr.push(num)
    return arr
}

// system flagging 
console.log(addDataArray([1, 2, 3, 4, 5], 3))
console.log(addDataArray([1, 2, 3, 4, 5], 7))

function totalNumberDataType(arr: any[]) {
    let total: number = 0 // 3

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            total += arr[i]
        }

    }

    return total // 
}


console.log(totalNumberDataType(["b", 3, undefined, null, [], 1, true, "a", 4, false]))

function removeOverflowData(arr: number[], maxSize: number) {
    let newArr = []
    for (let i = 0; i < maxSize; i++) {
        newArr.push(arr[i])
    }

    return newArr
}

console.log(removeOverflowData([5, 10, 24, 11, 5, 4, 3, 2, 1], 5))

// built in method
function combineArray(arr1: number[], arr2: number[]) {
    return arr1.concat(arr2)
    // [...arr1, ...arr2]
}

console.log(combineArray([1, 2, 3, 4], [5, 6, 7, 8]))

function findDuplicateNumber(arr: number[]) {
    let duplicates = []

    // arr must be ordered
    arr.sort((a: number, b: number) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && duplicates[duplicates.length - 1] != arr[i]) {
            duplicates.push(arr[i])
        }
    }

    return duplicates
}

console.log(findDuplicateNumber([1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5]))
console.log(findDuplicateNumber([1, 2, 4, 2, 5, 3, 7, 4, 4, 8, 5]))

function findDifference(num1: number[], num2: number[]) {
    let newArr: number[] = []
    let mergeArr = [...num1, ...num2] // spread operator 
    for (let i = 0; i < mergeArr.length; i++) {
        let isDiff = true
        for (let j = 0; j < mergeArr.length; j++) {
            if (mergeArr[i] === mergeArr[j] && i !== j) {
                isDiff = false
                break;
            }

        }

        if (isDiff) {
            newArr.push(mergeArr[i])
        }
    }

    return newArr
}

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))

