// 242 leetcode - easy

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (hash[t[j]] === undefined || hash[t[j]] < 1) {
      return false;
    } else {
      hash[t[j]]--;
    }
  }

  return true;
}

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('cat', 'rac')); // false
console.log(isAnagram('cat', 'tca')); // false
