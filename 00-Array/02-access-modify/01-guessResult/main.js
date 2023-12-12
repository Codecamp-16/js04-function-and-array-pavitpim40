// const = CONSTANT (mutable ?)
// constant = can't reassign
// constant = same ADDRESS
const uncleHome = ['Bicycle', 'Jar', 'Dog'];
// uncleHome = ["Dish"]

const arr = [1, 2, 4];
const newArr = arr; // Copied By Reference

arr[0] = 3;
console.log(arr[0]);
console.log(newArr[0]); // *
