// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  // Write your code here

  const time = s.substr(s.length - 2, 2);
  const hour = s.substr(0, 2);

  let hourTemp = hour;

  if (time === 'AM') {
    if (+hour >= 12) {
      hourTemp = +hour + 12 == 24 ? '00' : +hour + 12;
    }
  } else {
    if (+hour < 12) {
      hourTemp = +hour + 12;
    }
  }

  const str = s.slice(0, s.length - 2).replace(hour, hourTemp);

  return console.log(str);
}

timeConversion('07:01:00PM');
