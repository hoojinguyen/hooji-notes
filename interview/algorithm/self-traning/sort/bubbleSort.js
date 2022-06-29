function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    console.log(`${i}: ${arr}`);
  }

  return arr;
}

console.log('BubbleSort: ', bubbleSort([1, 5, 3, 2, 8, 7, 6, 4, 0]));
