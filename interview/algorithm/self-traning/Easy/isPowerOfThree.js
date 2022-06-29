function isPowerOfThree(n) {
  // if (n == 1) return true;
  //   let numDiv = n;
  //   while (numDiv > 0) {
  //     if (numDiv / 3 == 1) {
  //       return true;
  //     } else {
  //       numDiv = numDiv / 3;
  //     }
  //   }
  //   return false;

  //   if (n == 1) return true;

  //   if (n == 0) return false;

  //   return isPowerOfThree(n / 3);

  if (n == 1) return true;
  if (n % 3 == 0 && n != 0) return isPowerOfThree(n / 3);
  else return false;
}

console.log('isPowerOfThree: ', isPowerOfThree(32));
