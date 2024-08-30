function merge(a1, a2) {
  let len1 = a1.length;
  let len2 = a2.length;
  let len = len1 + len2;
  let result = new Array(len);

  let i = 0;
  let i1 = 0;
  let i2 = 0;

  while (i < len) {
    if (i1 < len1 && i2 < len2) {
      // a1 & a2 != rong
      if (a1[i1] <= a2[i2]) {
        result[i] = a1[i1];
        i1++;
      } else {
        result[i] = a2[i2];
        i2++;
      }
    } else {
      // a1 or a2 = rong
      if (i1 < len1) {
        // a1 != rong
        result[i] = a1[i1];
        i1++;
      } else {
        // a2 != rong
        result[i] = a2[i2];
        i2++;
      }
    }

    i++;
  }

  return result;
}

function mergerSort(arr, left = 0, right = arr.length - 1) {
  if (left == right) return [arr[left]];

  // Chia ra
  console.log(`Chia: ${left} - ${right}`);
  const middle = parseInt((left + right) / 2);
  const a1 = mergerSort(arr, left, middle);
  const a2 = mergerSort(arr, middle + 1, right);

  // Tron vao: a1, a2 la cac mang da duoc sap xep
  const result = merge(a1, a2);
  console.log('Ket qua Merge: ', result);
  return result;
}

// console.log(merge([1, 2, 3], [6, 5, 9]));

console.log('MergeSort: ', mergerSort([1, 5, 3, 2, 8, 7, 6, 4]));
