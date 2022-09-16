/*
Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode &&
    trueDateFormat(currentDate) <= trueDateFormat(expirationDate)
    ? true
    : false;
}
const trueDateFormat = function (date) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return new Date(
    date.slice(date.indexOf(",") + 2, date.indexOf(",") + 6),
    month.indexOf(date.slice(0, date.indexOf(" "))),
    date.slice(date.indexOf(" ") + 1, date.indexOf(","))
  );
};
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"));
console.log(checkCoupon("123", "123a", "September 5, 2014", "October 1, 2014"));
console.log(checkCoupon("123", "123", "September 5, 2015", "October 1, 2014"));

console.log(
  checkCoupon("123ablqc0", "123ablqc0", "July 5, 2000", "July 5, 2000")
);
console.log(Date.parse("September 5, 2014"));
