/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      j === 0 ? (result += s[i].toUpperCase()) : (result += s[i].toLowerCase());
    }
    i != s.length - 1 ? (result += "-") : "";
  }
  return result;
}

accum("ZpglnRxqenU");
accum("NyffsGeyylB");
accum("MjtkuBovqrU");
