// Question: How would you find the greatest common divisor of two numbers?

function greatestCommonDivisor(a, b) {
  while (a != b) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}

// use Recursive
// function greatestCommonDivisor(a, b){
//     if(b == 0)
//       return a;
//     else
//       return greatestCommonDivisor(b, a%b);
//  }

console.log(greatestCommonDivisor(14, 21));
