function fn(n) {
  if (!/^([1-9]\d*)/.test(n)) {
    return ' Illegal data ';
  }
  var unit =
    ' Thousand hundred 10 Billion thousand hundred 10 Thousands and hundreds 10 A ';
  if (n.length > unit.length) {
    return ' Data is too long ';
  }
  var newStr = '';
  var nlength = n.length;
  unit = unit.substr(unit.length - nlength);
  for (var i = 0; i < nlength; i++) {
    newStr += ' Zero 123456789'.charAt(n[i]) + unit.charAt(i);
  }
  newStr = newStr.substr(0, newStr.length - 1);
  newStr = newStr
    .replace(/ Zero ( Thousands | Hundred |10)/g, ' Zero ')
    .replace(/( Zero )+/g, ' Zero ')
    .replace(/ Zero ( Billion | Ten thousand )/g, '$1');
  return newStr;
}
console.log(fn('205402002103'));
