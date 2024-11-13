console.log("========== Method 1 ==========");
function findDuplicates(array) {
    const duplicates = [];
for (i = 0; i < array.length; i++) {
for (j = i; j < array.length; j++) {
   if (array[i] === array[j] && !duplicates.includes(array[i])) {
    duplicates.push(array)[i];
   } 
  }  
 }
 return duplicates;
}
const numbers = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
const duplicateNumbers = findDuplicates(numbers);
console.log("Duplicate number : ", duplicateNumbers);

console.log("========== Method 2 ==========");
function findDuplicatesOptimized(array){
const duplicates = [];
const frequencyMap = {};
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (frequencyMap[element]) {
        if (!duplicates.includes(element)) {
            duplicates.push(element);
        } else {
            frequencyMap[element] = true;
        }
        
    }
  }
  return duplicates
}
const number = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
const duplicateNumber = findDuplicatesOptimized(number);
console.log("Duplicate Numbers :", duplicateNumbers);

console.log("========== Method 3 ==========");
function printDuplicates(arr){
    let elementCount = {};
    let duplicates = [];
    for (let index = 0; index < array.length; index++) {
       let element = arr[index];
       if (elementCount[element]) {
        elementCount[element]++;
       }else{
        elementCount[element] = 1;
       }
    }
    for (let element in elementCount) {
       if (elementCount[element] > 1) {
        duplicates.push(element);
       }
    }
    if (duplicates.length > 0) {
        console.log("Duplicate elements : ", duplicates); 
    }else{
        console.log("No duplicates elements found");
    }
}
let array = [2, 4, 8, 5, 6, 3, 2, 4, 6, 6];
printDuplicates(array);