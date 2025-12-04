function binarySearch(arr, left, right, x) {
    if (right > left) {
        // index array posisi nilai tersebut berada 
        var mid = left + Math.floor((right - left) / 2);
        if (arr[mid] == x)
            return mid;
        // hapus sebelah kanan 
        if (arr[mid] > x) {
            return binarySearch(arr, left, mid - 1, x);
        }
        return binarySearch(arr, mid + 1, right, x);
    }
    return -1;
}
var arr = [2, 3, 4, 10, 40];
var x = 10;
console.log(binarySearch(arr, 0, arr.length - 1, x));
