const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ')[0];
const inputN = +input;

function factorial(N) {
  if (N === 0) {
    return 1;
  }
  return N * factorial(N - 1);
}

function solution(N) {
  console.log(factorial(N));
}

solution(inputN);
