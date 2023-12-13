// S1 Understand the problem

// function fizzBuzz(num) {
//   // SP3 : FizzBuzz (Both 3 and 5)
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz';
//   }
//   // SP1 : Fizz
//   if (num % 3 === 0) {
//     // 15 % 3 === 0
//     return 'fizz';
//   }
//   // SP2 : Buzz
//   if (num % 5 === 0) {
//     return 'buzz';
//   }
//   // SP4;
//   return num;
// }

// function fizzBuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz';
//   } else if (num % 3 === 0) {
//     return 'fizz';
//   } else if (num % 5 === 0) {
//     return 'buzz';
//   }
//   return num;
// }

// function fizzBuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   else if (num % 3 === 0) return 'fizz';
//   else if (num % 5 === 0) return 'buzz';
//   else return num;
// }

// helper function
function divideByFifteen(num) {
  // if (num % 3 === 0 && num % 5 === 0) return true;
  // else false;
  return num % 3 === 0 && num % 5 === 0;
}
function divideByFive(num) {
  return num % 5 === 0;
}
function divideByThree(num) {
  return num % 3 === 0;
}
// SOLID =  S == Single Responsible
function fizzBuzz(num) {
  if (divideByFifteen(num)) return 'fizzbuzz';
  else if (divideByThree(num)) return 'fizz';
  else if (divideByFive(num)) return 'buzz';
  else return num;
}
module.exports = { fizzBuzz };
