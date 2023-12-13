// Copy By Reference
const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 'S';

console.log(newArr[0]); // *
console.log(arr[0]);
