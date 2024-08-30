function minSumAvg(a, n, m) {
  let minAverage = 0;
  let minIndex = 0;

  for (let i = 0; i < m; i++) {
    minAverage += a[i];
  }

  for (let i = 0; i <= n - m; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      sum += a[i + j];
    }
    const average = sum / m;
    if (average < minAverage) {
      minAverage = average;
      minIndex = i;
    }
  }

  return minIndex;
}

const res = minSumAvg([6, 3, 4, 7, 1, 2, 5], 7, 4);
console.log('🚀 ~ res', res);
