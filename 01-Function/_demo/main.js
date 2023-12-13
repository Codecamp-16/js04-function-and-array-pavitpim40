// function : JS Keyword => สร้างกล่องสำหรับทำ Task สักอย่างนึง
// Name of Function : Dev คิดชื่อกล่อง / สำหรับเรียกใช้งาน
// Parenthesis : ()
// Curly Bracket,Bracket: Block/Scope : {} => แยกส่วนของ Code

// สร้างกล่อง
function createFive() {
  // function Scope
  return 5;
}

// Execute
// <functionName>() == ผลลัพธ์ของการทำงาน == Output

createFive() === 5; // 5

// Observe Output #1
console.log(createFive());
console.log(createFive() === 5);

// Observe Output
let result = createFive(); // เอาผลลัพธ์เก็บไว้ในรถ
console.log(result); // เอารถมา log

// ################
function createString() {
  return "Let's me tell you a secret";
}

console.log(createString());

let result2 = createString();
console.log(result2);

// Argument

function auntCustomFood(order) {
  console.log(order);
  // order let order = .... (local variable, function Scope)

  return order + ' completed';
}

// console.log(order);
let myOrder = '';
let b1 = auntCustomFood(5 + 3);
let b2 = auntCustomFood('คั่วไก่');
let b3 = auntCustomFood('หมูทอดน้ำปลา');

console.log(b1);
console.log(b2);
console.log(b3);

// Multiple Input
function auntIceCreamShop(iceCream, topping) {
  return iceCream + ' with delicious ' + topping + ' topping';
}

let i1 = auntIceCreamShop('Vanilla', 'Chocolate');
// let i2 = auntCustomFood('RumResin', 'Strawberry');
let i2 = auntIceCreamShop('RumResin', 'Strawberry');

console.log(i1);
console.log(i2);

// {}
// () ==> Evaluate หาผลลัพธ์
// ("กระเพรา") ==> Input of Function
// (3+5) === (8) ==> Evaluate before send Input to Function

3 + 5 * (5 * 2 + (7 - 9));

function auntSelectOrder(o1, o2) {
  if (o1.length < o2.length) {
    return o1 + ' completed';
  } else {
    return o2 + ' completed';
  }
}
console.log(auntSelectOrder('กระเพรา', 'สุกี้'));
console.log(auntSelectOrder('กระเพรา', 'สุกี้ทะเลน้ำไม่ใส่กุ้งไม่ใส่หมึก'));
