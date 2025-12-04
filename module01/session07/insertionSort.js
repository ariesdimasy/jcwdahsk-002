function insertionSort(arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i - 1; // membandingkan key dengan sebelah kirinya terus sampai tidak memenuhi syarat
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
console.log(insertionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
