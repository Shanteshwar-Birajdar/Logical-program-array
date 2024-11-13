console.log("======== 3rd Largest Number ========");
function findThirdLargest(arr) {
    if (arr.length < 3) {
        return "Array doesn't have enough elements"
    }
    arr.sort(function(a, b){
        return b - a;
    });
    return arr[2];
}
let array = [5, 4, 6, 8, 3, 9, 1, 10];
console.log("Third largest number in the array : ", findThirdLargest(array));

console.log("======== 2nd Largest Number ========");
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array doesn't have enough elements"
    }
    arr.sort(function(a, b){
        return b - a;
    });
    return arr[1];
}
let arr = [5, 7, 1, 8, 4, 9, 3, 2, 10];
console.log("Second largest number in the array : ", findSecondLargest(arr));

console.log("======== 1st Largest Number ========");
function findLargestNumber(arr) {
    if (arr.length == 0) {
        return "Array is empty";
    }
    let largest = arr[0];
    for (let index = 1; index < arr.length; index++) {
if (arr[index] > largest) {
    largest = arr[index]
      }  
    }
    return largest;
}
let arrays = [5, 8, 3, 6, 9, 2, 7, 4, 10];
console.log("Largest number in the array : ", findLargestNumber(arrays));
