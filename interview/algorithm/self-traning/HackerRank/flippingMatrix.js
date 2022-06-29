function flippingMatrix(matrix) {
  let n = matrix.length / 2;
  let max = 0;
  let total = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][col], max);
      max = Math.max(matrix[row][n * 2 - 1 - col], max);
      max = Math.max(matrix[n * 2 - 1 - row][col], max);
      max = Math.max(matrix[n * 2 - 1 - row][n * 2 - 1 - col], max);

      total += max;
    }
  }

  return total;
}

console.log(
  flippingMatrix([
    [112, 42, 85, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);

// output = 119 + 114 + 56 + 125 = 414
