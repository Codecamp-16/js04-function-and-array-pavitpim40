// ให้ทำตามขั้นตอนดังนี้
// - สร้างตัวแปร Array ชื่อ styles และให้มี element คือ Jazz และ Blues ตามลำดับ
// - เพิ่ม Rock-n-Roll ต่อท้ายเข้าไปใน styles
// - แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
// - ลบ element ตัวแรก โดยใช้คำสั่ง delete
// - จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด
// i

const musicStyles = ['Jazz', 'Blues'];
console.log(musicStyles);

// musicStyles[2] = "Rock-n-Roll"
// musicStyles[musicStyles.length] ="Rock-n-Roll"
musicStyles.push('Rock-n-Roll');
console.log(musicStyles);

// - แก้ไขค่าตรงกลางของ styles ให้เป็น Classic
musicStyles[1] = 'Classic';
console.log(musicStyles);

// - ลบ element ตัวแรก โดยใช้คำสั่ง delete
delete musicStyles[0];
console.log(musicStyles);

// - จงหาความยาวของ styles หลังจากทำครบตามขั้นตอนที่กำหนด
console.log(musicStyles.length);
