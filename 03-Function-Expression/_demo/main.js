// Express : ข้อความที่ Evaluate แล้วได้ผลลัพธ์ 1 ค่า

// #### Expression => Can be Evaluated to single value
// Primitive : 1
// Combination :  (1+2)*5
// Function Result : returnFive() == 5

function returnFive() {
  return 5;
}

// let <v_name> = <expression>
let firstName = 'Codecamp ' + '16';

// Function Expression (let,const) => No Hoisting!!

// add(4,5) Error

let add = function (x, y) {
  return x + y;
}; // Anonymous Function
let divide = function (x, y) {
  return x / y;
};

// เรียกใช้งานฟังก์ชันผ่านชื่อ Varaible ได้
add(4, 5);
divide(4, 2);

// common mistake
let print = console.log;
let printf = console.log(); // undefined

print('Hi');
// printf() // undefined()

//

// Named Function,Function Declaration
function sqaure(x) {
  return x ** 2;
}

// Function Expression
let s = sqaure;

s(9);
