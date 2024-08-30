// Question: How would you swap two numbers without using a temporary variable?

// Answer: Waste time about thinking it. though u know the answer, act like you are thinking and take your time to answer this one.

function swapNumb(a, b) {
  console.log('before swap: ', [a, b]);

  a = b - a;
  b = b - a;
  a = a + b;

  console.log('after swap: ', [a, b]);
}

swapNumb(9, -100);
