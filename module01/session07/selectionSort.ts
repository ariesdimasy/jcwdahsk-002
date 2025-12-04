function selectionSort(arr: number[]) {
    let min
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] > arr[min]) {
                min = j
            }
        }

        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]))