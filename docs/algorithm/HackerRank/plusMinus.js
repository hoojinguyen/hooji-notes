function plusMinus(arr) {
  // Write your code here
  let pos = 0;
  let neg = 0;
  let zero = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const num = arr[i];
    if (num == 0) zero++;
    else if (num > 0) pos++;
    else neg++;
  }

  const mul = (num, len) => (num / len).toFixed(6);

  return console.log(`${mul(pos, len)}\n${mul(neg, len)}\n${mul(zero, len)}`);
}

plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
