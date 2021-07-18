// deep copy : 깊은 복사
// shallow copy : 얕은 복사

const lame = {
  name: '라매개발자',
  subscriber: 3000,
};

let lameCopy = { ...lame };

lameCopy.subscriber = 100000;

console.log(lame, lameCopy);