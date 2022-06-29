// const max2 = (arr) => {};

// const result = max2([1, 3, 5, 2]);
// console.log('Result: ', result);
var log = console.log;

function test() {
  log('Start');

  var i = setInterval(function () {
    log('.');
  }, 100);

  setTimeout(function timeout0() {
    console.log('timeout0');
  });

  setImmediate(function immediate() {
    log('Immediate');
  });

  process.nextTick(function A() {
    log('A');
    process.nextTick(function B() {
      log('B');
      process.nextTick(function C() {
        log('C');
      });
      process.nextTick(function D() {
        log('D');
      });
    });

    process.nextTick(function E() {
      log('E');
      process.nextTick(function F() {
        log('F');
      });
      process.nextTick(function G() {
        log('G');
      });
    });
  });

  setTimeout(function timeout1000() {
    console.log('timeout1000');
    clearInterval(i);
  }, 1000);
  log('Helllo ');
  log('World ');
}

test();
