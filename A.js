'use strict';

var digits = [];
require('fs').readFile('A.txt', 'utf8', (err, str) => {
  var rows = str.split('\n'),
    results = [];

  for(let i = 1; i <= rows[0]; i++) {
    console.log('Case #' + i + ': ' + addDigits([], rows[i]));
  }
});


function getDigitsForN(n, number) {
  return (''+(number*n)).split('').map(x => +x);
}

function addDigits(digits, number) {
  for (let j = 1;j < 1000000; j++) {
    digits = [ ...new Set(digits.concat(getDigitsForN(j, number)))];
    if (checkDigits(digits)) {
      return j*number;
    }
  }
  return 'INSOMNIA';
}

function checkDigits(digits) {
  let res = true;
  for(let i = 0; i < 10; i++) {
    if (digits.indexOf(i) === -1) {
      res = false;
    }
  }
  return res;
}