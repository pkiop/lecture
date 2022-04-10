const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ')[0];
const inputN = +input;

function fibo(N) {
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  return fibo(N - 1) + fibo(N - 2);
}

function solution(N) {
  console.log(fibo(N));
}

solution(inputN);
