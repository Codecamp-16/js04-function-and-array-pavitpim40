// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

/* 
S1 : UnderStand Problem 
            A -----------> B
year <number> -----------> isLeapYear <boolean>

S2 : Explore Example
// หาร 4 ลงตัวเป็น leapYear (easiest)
4 ====> true
8 ====> true
80 ====> true

// หาร 400 ลงตัวเป็น leapYear 
400 ===> true
800 ===> true

// หาร 100 ลงตัว และ หาร 400 ไม่ลงตัว (complex)
100 ==> false
200 ==> false 
400 ==> true

// S3 : Break Problem 
// S4 : Solve / Simplify (Back to S3)
*/

// function isLeapYear(year) {
//   if (year % 100 == 0 && year % 400 !== 0) return false;
//   if (year % 400 == 0) return true;
//   if (year % 4 == 0) return true;
//   return false;
// }

// function isLeapYear(year) {
//   if (year % 100 == 0 && year % 400 !== 0) return false;
//   else if (year % 400 == 0) return true;
//   else if (year % 4 == 0) return true;
//   return false;
// }

// function isLeapYear(year) {
//   if (year % 400 == 0) return true;
//   else if (year % 100 == 0) return false;
//   else if (year % 4 == 0) return true;
//   return false;
// }

function isLeapYear(year) {
  // if (year % 400 == 0) return true;
  // else if (year % 100 == 0) return false;
  // else if (year % 4 == 0) return true;
  // return false;
  // return year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0);
  // return year % 400 != 0 ? year % 4 == 0 : year % 100 == 0;
  // return year % 400 == 0  ? year % 100 != 0 : year % 4 == 0
  return year % 100 === 0 ? year % 400 == 0 : year % 4 == 0;
}
