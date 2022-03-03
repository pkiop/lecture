// 0. 객체 사용법

const a = 'habit';

const obj1 = {
  id: 1,
  "name": "라매",
  [a]: 'coding',
  "my name": "라매개발자"
};

console.log("obj1 : ", obj1);
console.log(obj1.id);
console.log(obj1['name']);
console.log(obj1[a]);
console.log(obj1['my name']);
