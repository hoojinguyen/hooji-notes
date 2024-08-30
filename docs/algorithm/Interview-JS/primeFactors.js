// Question: How could you find all prime factors of a number?

// Answer: Run a while loop. start dividing by two and if not divisible increase divider until u r done.

function primeFactors(n) {
  const factors = [];
  let div = 2;

  while (n > div) {
    if (n % div === 0) {
      factors.push(div);
      n = n / div;
    } else {
      div++;
    }
  }

  return factors;
}

console.log(primeFactors(18));
console.log(primeFactors(69));
