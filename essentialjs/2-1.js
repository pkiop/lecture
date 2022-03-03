// 2-1. 펼침 연산자

const obj1 = {
  id: 1,
  name: '라매',
  age: 3,
  habit: 'coding',
};

obj1.email = 'pkiopb@gmail.com';

const obj2 = obj1;

console.log('obj1 : ', obj1);
console.log('obj2 : ', obj2);

obj2.email = 'empty';

console.log('obj1 : ', obj1);
console.log('obj2 : ', obj2);

console.log(obj1 === obj2);