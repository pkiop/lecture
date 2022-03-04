// 2-6. 깊이가 깊은 객체 복사 

const obj1 = {
  id: 1,
  name: '라매',
  age: 3,
  habit: 'coding',
  deepObj: {
    deep: 'abc',
  }
};

const stringObj1 = JSON.stringify(obj1);
console.log("stringObj1 : ", stringObj1);
const obj2 = JSON.parse(stringObj1);

console.log("변경 전");
console.log('obj1 : ', obj1.deepObj);
console.log('obj2 : ', obj2.deepObj);

obj2.deepObj.deep = 'deep';

console.log("변경 후");
console.log('obj1 : ', obj1.deepObj);
console.log('obj2 : ', obj2.deepObj);

console.log(obj1.deepObj === obj2.deepObj);