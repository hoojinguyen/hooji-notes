// const map = new Map();

// map.set(1, 'Hoi');
// map.set(2, 'Nguyen');
// map.set(2, { name: 'Hoi' });

// console.log('🚀 ~ map', map);
var person = {
  name: 'Nishant',
  age: 24,
};
console.log('toString' in person);
console.log(person['toString'] !== undefined);
console.log(person['asdasds'] !== undefined);
console.log(person.hasOwnProperty('toString'));
