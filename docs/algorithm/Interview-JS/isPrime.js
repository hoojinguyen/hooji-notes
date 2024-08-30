// Question: How would you verify a prime number?

// Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1. (look at the code example.
// If you dont get it. this is not your cake. do learn javaScript basics and come back.)

function isPrime(n) {
  if (n === 2) return true;
  if (n < 2) return false;
  if (n % 2 === 0) return false;

  for (let i = 3; i < Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(137));
console.log(isPrime(237));
console.log(isPrime(111));
console.log(isPrime(121));

// số nguyên tố là số lớn hơn 1 và chia hết cho 1 và chính nó
// số 2 là số nguyên tố chẵn duy nhất
// n là số nguyên tố thì trong khoảng từ 2 đến căn bậc hai cua n sẽ không tồn tại số mà n chia hết
