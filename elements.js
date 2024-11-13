console.log("========== Using For Loop ==========");
function printArrayElements(array){
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
}
let array = [1, 2, 3, 4, 5];
printArrayElements(array);

console.log("========== Using While Loop ==========");
function printArrayElementsWhile(arr){
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++
    }
}    
let arr = [1, 2, 3, 4, 5];
printArrayElementsWhile(array);

console.log("========== Using Do While Loop ==========");
function printArrayElementsDoWhile(arr){
    let i = 0;
    do{
        console.log(arr[i]);
        i++;
    }while (i < arr.length);        
}
let arrays = [1, 2, 3, 4, 5];
printArrayElementsDoWhile(arrays);

console.log("========== Using For Each Loop ==========");
function printArrayElementsForEach(arr){
    arr.forEach(function (element){
        console.log(element);
    })
}
let arra = [1, 2, 3, 4, 5];
printArrayElementsForEach(arra);