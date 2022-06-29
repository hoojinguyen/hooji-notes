// Question: How would you reverse a string in JavaScript?

// Answer: I can loop through the string and concatenate letters to a new string

function strReverse(str) {
  let head = 0;
  let end = str.length - 1;
  str = str.split('');

  while (head < end) {
    const temp = str[head];
    str[head] = str[end];
    str[end] = temp;
    head++;
    end--;
  }
  str = str.join('');

  console.log(str);
}

strReverse('a b c d e');
