console.log("======== Method 1 ========");
let array = [1, 2, 3, 4, 5];
let newArray = [];
for (index = 0; index < array.length; index++) {
   newArray.push(array[index])
}
console.log(newArray);

console.log("======== Method 2 ========");
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice();
console.log(newArr);

console.log("======== Method 3 ========");
let arrays = [1, 2, 3, 4, 5];
let newArrays = [...arrays];
console.log(newArrays);