function sortArrayAscending(arr) {
    return arr.slice().sort(function (a, b) {
        return a - b ;
    })
}
let array = [4, 8, 5, 3, 2, 7, 1, 9, 6];
console.log("Original Array : ", array);

let sortedArray = sortArrayAscending(array);
console.log("Array after sorting in ascending order : ", sortedArray);

