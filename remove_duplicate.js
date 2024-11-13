function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let index = 0; index < arr.length; index++) {
     if (uniqueArray.indexOf(arr[index]) == -1) {
        uniqueArray.push(arr[index])
     }   
    }
    return uniqueArray;
}
let array = [4, 6, 7, 3, 4, 9, 5, 3, 8, 2, 6];
console.log("Original array : ", array);
let uniqueArray = removeDuplicates(array);
console.log("Array after removing duplicates : ", uniqueArray);

