// 1. 1~10000 까지 반복문을 돈다.
// 2. 각 자리수를 나누어서 자기자신 더하기 각 자리수 를 한 걸 Set에 넣는다.
// 2-1. 계산한게 10000보다 크면 넣지 않는다.
// 3. 1~10000 까지 반복문을 돌면서 이 숫자가 Set에 없는 숫자면 출력한다.

let notSelfNumber = new Set();
for (let num = 1; num <= 10000; ++num) {
  let calValue = num;
  let strNum = String(num);
  for (let i = 0; i < strNum.length; ++i) {
    calValue += +strNum[i]; // 각 자리수
  }
  if (calValue <= 10000) {
    notSelfNumber.add(calValue);
  }
}

for (let num = 1; num <= 10000; ++num) {
  if (!notSelfNumber.has(num)) {
    console.log(num);
  }
}
