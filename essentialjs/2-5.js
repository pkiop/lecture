// 2-2. 펼침 연산자

const obj1 = {
  id: 1,
  name: '라매',
  age: 3,
  habit: 'coding',
  deepObj: {
    deep: 'abc',
  }
};

const obj2 = { ...obj1, email: 'pkiopb@gmail.com' };

console.log('obj1 : ', obj1.deepObj.deep);
console.log('obj2 : ', obj2.deepObj.deep);

obj2.deepObj.deep = 'deep';

console.log('obj1 : ', obj1.deepObj.deep);
console.log('obj2 : ', obj2.deepObj.deep);

console.log(obj1.deepObj === obj2.deepObj);