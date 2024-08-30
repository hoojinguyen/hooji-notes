// Question: How do get nth Fibonacci number?

// Answer: I create an array and start from iterate through.

// Fibonacci series is one of the most popular interview question for beginners. so, you have to learn this one.

function fibonacci(n) {
  const fibo = [0, 1];

  if (n <= 2) return 1;

  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo[n];
}
// O(n)

function fibonacci2(n) {
  if (n <= 2) return 1;

  if (fibonacci.cache === undefined) fibonacci.cache = {};

  if (fibonacci.cache[n] === undefined) {
    fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci.cache[n];
}

// use Recursive
function fibonacci3(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// O(2^n)

console.log(fibonacci(3));
