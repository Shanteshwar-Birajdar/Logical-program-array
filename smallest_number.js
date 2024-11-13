console.log("======== 2nd smallest number ========");
function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array doesn't have enough elements ";
    }
    let smallest = arr[0];
    let secondSmallest = arr[1];
    if (secondSmallest < smallest) {
        [smallest, secondSmallest] = [secondSmallest, smallest]
    }
    for (let index = 2; index < arr.length; index++) {
       if (arr[index] < smallest) {
        secondSmallest = smallest;
        smallest = arr[index];
       } else if (arr[index] < secondSmallest && arr[index] !== smallest) {
        secondSmallest = arr[index]
       }
    }
    return secondSmallest
}
let array = [5, 9, 7, 3, 8, 4, 1, 5, 2];
console.log("Second smallest number in an array : ", findSecondSmallest(array));

console.log("======== smallest number ========");
function findSmallestNumber(arr) {
    if (arr.length == 0) {
        return "Array is empty"
    }
    let smallest = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index];
        }
    }
    return smallest;
}
let arrays = [4, 7, 3, 6, 9, 2, 8, 5, 1];
console.log("Smallest number in the array : ", findSmallestNumber(arrays));

