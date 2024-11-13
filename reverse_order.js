console.log("========== Using While Loop ==========");
function printArrayElementReverseWhile(arr){
    let i = arr.length - 1;
    while (i >=0) {
        console.log(arr[i]);
        i--;
        }
}
let array = [1, 2, 3, 4, 5];
printArrayElementReverseWhile(array);