ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร

```js
let phrase = 'Hello';

if (true) {
  // Local user
  let user = 'John';

  // Local function SayHi
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // Error*
```
