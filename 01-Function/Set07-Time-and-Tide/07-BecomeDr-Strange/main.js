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

// Pure Function (Make no SideEffect)
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

// 0 => 7
// 13 => 20
// 16 => 23
// 17 => 0
// let thai_hr = 7;
function convertHour(hour) {
  const THAI_GAP_HOUR = 7;
  const MAXIMUM_HOUR = 24;
  let localHour = hour + THAI_GAP_HOUR;
  if (localHour < MAXIMUM_HOUR) return localHour;
  else return localHour - MAXIMUM_HOUR;
}

function formatLocaleTime(monthName, date, localeTime) {
  // HH:MM:SS
  return `${monthName} ${date}, ${localeTime}`;
}

// Input : ISOString
// Output : [YYYY,MM,DD,HH,MM,SS] โดย HH เป็น number
function utilizeInputToArray(now) {
  const arr = now.split('T');
  // arr// [ '2023-12-11', '11:49:43.203Z' ]

  let date = arr[0];
  let time = arr[1];

  const arrayOutPut = [];

  // Date
  const dateArr = date.split('-'); //[ '2023', '12', '11' ]
  arrayOutPut[0] = dateArr[0];
  arrayOutPut[1] = dateArr[1];
  arrayOutPut[2] = dateArr[2];
  // Time
  const timeArr = time.split(':');
  let hour = timeArr[0];
  let min = timeArr[1];
  let sec = timeArr[2].split('.')[0];

  arrayOutPut[3] = +hour;
  arrayOutPut[4] = min;
  arrayOutPut[5] = sec;
  return arrayOutPut;
}

function coverTime(isoString) {
  let utilArr = utilizeInputToArray(isoString);

  // MothName
  let monthName = convertMonth(Number(utilArr[1]));

  // date
  let date = utilArr[2];

  // localeTime
  let localeHr = convertHour(utilArr[3]);
  let min = utilArr[4];
  let sec = utilArr[5];
  let localeTime = `${localeHr}:${min}:${sec}`;

  let result = formatLocaleTime(monthName, date, localeTime);
  return result;
}

let r = coverTime(ISO_DATE_STRING);
console.log(r);
// ส่งออก function
// module.exports = {
//   convertMonth,
//   convertHour,
// };
