// 347 leetcode - medium

function topKFrequent(nums, k) {
  const count = {};
  let result = [];
  const len = nums.length;
  const freq = [];

  for (let i = 0; i <= len; i++) {
    freq.push([]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] === undefined) {
      count[nums[i]] = 1;
    } else {
      count[nums[i]]++;
    }
  }

  for (const [key, value] of Object.entries(count)) {
    freq[value].push(Number(key));
  }

  for (let j = freq.length - 1; j >= 0 && k > 0; j--) {
    if (freq[j].length) {
      result = result.concat(freq[j]);
      k -= freq[j].length;
    }
  }

  return result;
}

// tao ra mot cai hashmap count luu so lan xuat hien cua cac phan tu
// tao ra freq la ds so lan xuat hien, so lan xuat hien luon luon <= do dai cua mang dau vao
// sau do ta mapping count qua freq
// lap cai freq theo thu tu tu thap den cao va - di k de check

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// [1,2]
