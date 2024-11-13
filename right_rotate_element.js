function rightRotateArray(arr) {
    if (arr.length == 0) {
        return arr
    }
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}
let array = [1, 2, 3, 4, 5, 6];
console.log("Original Array : ", array);
let rotatedArray = rightRotateArray(array);
console.log("Array After right rotation ", rotatedArray);