function bubbleSort(arr) {
    for (var i = 0; i <= arr.length; i++) {
        for (var j = 0; j <= arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([3, 7, 4, 1, 5, 0, 9]));
