function printEvenOddNumbers(arr) {
    let oddNumbers = [];
    let evenNumbers = [];
    for (index = 0; index < arr.length; index++) {
        if (arr[index] % 2 == 0) {
            evenNumbers.push(arr[index])
        }else{
            oddNumbers.push(arr[index]);
        }
    }
    console.log("Even Numbers : ", evenNumbers);
    console.log("Odd Numbers : ", oddNumbers);
}
let array = [4, 6, 2, 5, 8, 1, 9, 3, 7]
console.log("Original array : ", array);
console.log("Even & odd numbers of an array : ");
printEvenOddNumbers(array);