const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const arrSize = +input[0];
for (let i = 1; i <= arrSize; ++i) {
  let testStr = input[i];
  console.log('testStr : ', testStr);
}
