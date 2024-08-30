function insertionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let ai = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > ai) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = ai;

    console.log(`${i}: ${arr}`);
  }

  return arr;
}

console.log('InsertionSort: ', insertionSort([1, 5, 3, 2, 8, 7, 6, 4, 0]));
