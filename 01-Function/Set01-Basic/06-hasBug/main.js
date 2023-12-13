// Input : 1 ตัว <any>
// Output : <boolean>
function hasBug(sentence) {
  let normalizeString = sentence.toLowerCase().trim();
  // if (normalizeString === 'bug') return true;
  if (normalizeString.includes('bug')) return true;
  else return false;
}
// Example
/*
"bug" ==> true
"BUG" ===> true
"Bug" ==> true
"    Bug          " =>true
"asdafadBuadaBugsdadads" => true
*/

console.log(1, hasBug('bbbb'));
console.log(2, hasBug('bug'));
console.log(3, hasBug('Bug'));
console.log(4, hasBug('BUG'));
console.log(5, hasBug('    Bug          '));
console.log(6, hasBug('asdafadBuadaBugsdadads'));
