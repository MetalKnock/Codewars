/*
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between the two hands of a 12-hour analog clock in radians.
Notes:

    The minute hand always points to the exact minute (there is no seconds hand).
    The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
    Return the smaller of the angles ( <= π ).
    Return π if the hands are opposite.

Examples

    at noon the angle is: 0
    at 3:00 the angle is: π/2 (90 degrees)
    at 6:00 the angle is: π (180 degrees)
    at 9:00 the angle is: π/2 (90 degrees)

*/
function handAngle(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const fromStartToMinuteHand = (minutes * 2 * Math.PI) / 60;
  const fromStartToHourHand =
    (hours * 2 * Math.PI) / 12 + (minutes * 2 * Math.PI) / (60 * 12);

  if (fromStartToMinuteHand > fromStartToHourHand) {
    if (fromStartToMinuteHand - fromStartToHourHand > Math.PI) {
      return 2 * Math.PI - (fromStartToMinuteHand - fromStartToHourHand);
    }
    return fromStartToMinuteHand - fromStartToHourHand;
  } else {
    if (fromStartToHourHand - fromStartToMinuteHand > Math.PI) {
      return 2 * Math.PI - (fromStartToHourHand - fromStartToMinuteHand);
    }
    return fromStartToHourHand - fromStartToMinuteHand;
  }
}

function makeDate(hours, minutes) {
  const date = new Date();
  date.setMinutes(minutes);
  date.setHours(hours);
  return date;
}

handAngle(makeDate(0, 0));
// handAngle(makeDate(1, 0));
