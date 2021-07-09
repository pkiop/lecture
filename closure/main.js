function closure() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }
  function setCnt(value) {
    cnt = value;
  }
  function printCnt() {
    console.log(cnt);
  }
  return {
    cntPlus,
    setCnt,
    printCnt,
  }
}

const cntClosure = closure();
console.log(cntClosure);
cntClosure.printCnt();
cntClosure.cntPlus();
cntClosure.printCnt();
cntClosure.setCnt(100);
cntClosure.printCnt();

// 1억개의 코드
cnt = 100;
// 1억개의 코드
