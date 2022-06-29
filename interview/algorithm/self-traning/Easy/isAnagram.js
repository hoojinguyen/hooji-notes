/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  Example 1:
//  Input: s = "anagram", t = "nagaram"
//  Output: true

//  Example 2:
//  Input: s = "rat", t = "car"
//  Output: false
const isAnagram1 = function (s, t) {
  const dic = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (dic[letter] == undefined) {
      dic[letter] = 1;
    } else {
      dic[letter]++;
    }
  }

  let temp = false;
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (dic[letter] == undefined) {
      return false;
    } else {
      dic[letter]--;
      if (dic[letter] == 0) {
        temp = true;
      } else {
        temp = false;
      }
    }
  }

  for (const item of Object.values(dic)) {
    if (item != 0) return false;
  }

  return temp;
};

const isAnagram2 = function (s, t) {
  if (s.length != t.length) return false;

  s = [...s].sort().join();
  t = [...t].sort().join();

  for (let i = 0; i < s.length; i++) {
    if (s[i] != t[i]) return false;
  }

  return true;
};

const s = 'anagrsm';
const t = 'nagaram';

const result = isAnagram2(s, t);
console.log('🚀 ~ Result: ', result);
