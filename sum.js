function calculateSum(arr) {
    let sum = 0;
for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum;
}
let Array = [1, 2, 3, 4, 5, 6];
console.log("Sum of all the items in the array : ", calculateSum(Array));
