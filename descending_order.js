function sortArrayDescending(arr) {
    return arr.slice().sort(function (a, b){
        return b - a;
    })
}
let array = [4, 8, 5, 3, 2, 7, 1, 9, 6];
console.log("Original Array : ", array);

let sortedArray= sortArrayDescending(array);
console.log("Array after sorting in descending order : ", sortedArray);
