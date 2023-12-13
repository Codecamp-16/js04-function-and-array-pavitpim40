// - ให้สร้างฟังก์ชันที่รับ input เป็น string ใน format-ISO เช่น "2023-12-11T11:49:43.203Z"
// - ส่งคืนค่าผลลัพธ์ในรูปแบบ "Dec 11 18:49:43" (จำนวนชั่วโมงให้เพิ่มไป 7 ชั่วโมง)

/* 
S1 : Understand Problem 
- Convert Time 
- ISO-Format คือ ?  "YYYY-MM-DDTHH:MM:SS:mmmZ  *1
- แสดงผลเป็น เดือน(แบบย่อ) และเวลา HH:MM:SS แบบ +7 *2

                           A--------->B
time <string> , ISO-String*1 --------> localeTime <string> *2

S2 : Explore Concrete Example

convertTime("2023-12-11T11:49:43.203Z") ==> "Dec 11 18:49:43"


S3 : Breaking Down Problem

S4 : Solve (each SubProblem)
*/

const ISO_DATE_STRING = '2023-12-11T10:49:43.203Z';

function convertMonth(monthNumber) {
  switch (monthNumber) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      throw new Error('Invalid Month Number');
  }
}

// ส่งออก function
module.exports = {
  convertMonth,
};
