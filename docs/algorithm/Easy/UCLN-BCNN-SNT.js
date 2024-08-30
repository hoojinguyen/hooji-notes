function ucln1(a, b) {
  let hight = a > b ? a : b;
  let small = a < b ? a : b;
  for (let i = hight; i > 0; i--) {
    if (hight % i == 0 && small % i == 0) {
      return i;
    }
  }
  return 0;
}

function ucln2(a, b) {
  while (a != b) {
    if (a > b) a = a - b;
    else b = b - a;
  }

  return a;
}

function ucln3(a, b) {
  if (a == b) return a;
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
  return ucln3(a, b);
}

console.log('UCLN1:  ', ucln1(6, 4));
console.log('UCLN2:  ', ucln2(6, 4));
console.log('UCLN3:  ', ucln3(6, 4));
//================================================================\\

function bcnn1(a, b) {
  return (a * b) / ucln3(a, b);
}

console.log('BCNN1: ', bcnn1(6, 4));

//================================================================\\
function isSNT1(a) {
  for (let i = 2; i < Math.sqrt(a); i++) {
    if (a % i == 0) return false;
  }
  return a > 1;
}

console.log('SNT1: ', isSNT1(7));
console.log('SNT1: ', isSNT1(8));
console.log('SNT1: ', isSNT1(997));

//================================================================\\
function giaithua(a) {
  if (a == 0) return 1;
  return a * giaithua(a - 1);
}

console.log('GIAITHUA: ', giaithua(4));

//================================================================\\
function luythua(a, n) {
  if (n == 0) return 1;
  if (n == 1) return a;
  if (n > 1) n--;

  return a * luythua(a, n);
}

console.log('LUYTHUA: ', luythua(3, 4));
//================================================================\\
