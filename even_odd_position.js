console.log("===== Element At Even Positions =====");
function printElementAtEvenPositions(arr) {
    for (let index = 1; index < array.length; index=index + 2) {
        console.log(arr[index]); 
    }
}
let array = [1, 6, 3, 9, 4, 2, 6, 3, 9];
printElementAtEvenPositions(array);

console.log("===== Element At Odd Positions =====");
function printElementAtOddPositions(arr) {
    for (let index = 0; index < array.length; index=index + 2) {
        console.log(arr[index]);
        
    }
}
let arr = [1, 6, 3, 9, 4, 2, 6, 3, 9];
printElementAtOddPositions(arr); 