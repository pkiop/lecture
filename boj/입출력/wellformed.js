/*
  boj.kr/4344

  5
  5 50 50 70 80 100
  7 100 95 90 80 70 60 50
  3 70 90 80
  3 70 90 81
  9 100 99 98 97 96 95 94 93 91
*/

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
console.log(input);
input = input.split('\n');
console.log(input);
const inputC = +input[0];
const inputTestCase = [];

for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(' ').map((item) => +item);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}
console.log('inputTestCase : ', inputTestCase);

// testCate는 N 과 N명의 점수 배열로 이루어짐
/* 

C = 5
testCase = [
  {
    N: 5,
    arr: [50, 50, 70, 80, 100]
  }
  {
    N: 7,
    arr: [100 95 90 80 70 60 50]
  }
  ...
]

*/
function solution(C, testCase) {
  console.log('C : ', C);
  console.log('testCase : ', testCase);
}

solution(inputC, inputTestCase);
