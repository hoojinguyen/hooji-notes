/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let arr = s.split('');

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let double = arr[i] + arr[i + 1];
    if (dic[double]) {
      sum += dic[double];
      i = i + 1;
    } else {
      if (arr[i]) {
        sum += dic[arr[i]];
      }
    }
  }
  return sum;
};

console.log(romanToInt('LVIII'));
