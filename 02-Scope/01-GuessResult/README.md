ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร

```js
// Global
let name = 'John';

// สร้างฟังก์ชัน
function sayHi() {
  alert('Hi, ' + name); // name == Global
}

// Reassign Global
name = 'Pete';

// Call Function
sayHi(); // alert('Hi, ' + name);
```
