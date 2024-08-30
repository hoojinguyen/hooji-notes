function isSquareNumber(number) {
  if (number === 1) return 1;

  let left = 2;
  let right = parseInt(number / 2);

  while (left <= right) {
    const middle = parseInt((left + right) / 2);
    const doubleMid = middle * middle;

    if (doubleMid === number) return true;

    if (doubleMid > number) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return false;
}

console.log(isSquareNumber(4));
console.log(isSquareNumber(16));
console.log(isSquareNumber(9));
console.log(isSquareNumber(2));
console.log(isSquareNumber(39601));
