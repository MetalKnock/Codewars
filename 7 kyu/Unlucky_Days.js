/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year) {
  let result = 0;
  const date = new Date(year, 0, 13);
  for (let i = 0; i <= 11; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) result++;
  }
  return result;
}
console.log(unluckyDays(1586));
console.log(unluckyDays(1754));
console.log(unluckyDays(2842));
console.log(unluckyDays(2000));
console.log(unluckyDays(2586));
