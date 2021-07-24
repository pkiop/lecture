const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

const arrSize = +input[0];
let count = 0;
for (let i = 1; i <= arrSize; ++i) {
  let testStr = input[i];
  let obj = {};

  let nowContChar;
  let isGroupWord = true;
  for (let j = 0; j < testStr.length; ++j) {
    let nowChar = testStr[j];
    if (obj[nowChar] === undefined) {
      obj[nowChar] = 'asdf'; // 문자가 처음 등장한 것 체크
      nowContChar = nowChar; // 지금 나온 문자는 연속으로 나와도 된다고 체크
      // 이 else if 가 실행되려면 obj[nowChar] !== undefined이고
      // 이 뜻은 이미 등장한 적이 있는 문자가 등장했다는 뜻.
      // 등장한 적이 있는데 지금 연속으로 등장해도 되는 문자가 아니면 그룹단어가 아니므로
      // isGroupWord 를 false로 바꿔주고 더이상 for문을 돌아봤자 그룹단어가 아닌 건 변하지 않으므로
      // for문을 종료
    } else if (nowContChar !== nowChar) {
      isGroupWord = false;
      break;
    }
  }

  //위에서 for문을 끝까지 돌았는데도 isGroupWord가 true라면
  // 그룹단어이므로 count를 증가시킴
  if (isGroupWord) {
    count++;
  }
}

console.log(count);
