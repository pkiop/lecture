const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ')[0];
const inputN = +input;

const tarr = new Array(2200).fill('.');
const arr = tarr.map(() => Array(2200).fill(' '));
function star(i, j, N) {
  if (N === 1) {
    arr[i][j] = '*';
    return;
  }
  for (let ii = 0; ii < 3; ++ii) {
    for (let jj = 0; jj < 3; ++jj) {
      if (!(ii === 1 && jj === 1)) {
        star((N / 3) * ii + i, (N / 3) * jj + j, N / 3);
      }
    }
  }
}

function solution(N) {
  star(0, 0, N);
  for (let i = 0; i < N; ++i) {
    let str = '';
    for (let j = 0; j < N; ++j) {
      str += arr[i][j];
    }
    console.log(str);
  }
}

solution(inputN);
