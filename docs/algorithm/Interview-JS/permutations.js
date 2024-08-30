// Question: How would you create all permutation of a string?

// Answer: This could be a tough one based on you level of knowledge about algorithm.

// function permutations(str, arr = []) {
//   //   const arr = [];
//   const strArr = str.split('');

//   let sum = 1;

//   for (let i = strArr.length; i > 0; i--) {
//     sum *= i;
//   }

//   return sum;
// }

function permutations(str) {
  var arr = str.split(''),
    len = arr.length,
    perms = [],
    rest,
    picked,
    restPerms,
    next;

  if (len == 0) return [str];

  for (var i = 0; i < len; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);

    restPerms = permutations(rest.join(''));

    for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(''));
    }
  }
  return perms;
}

console.log(permutations('abc'));
