// 2-3. 펼침 연산자 (배열)

const arr1 = [
  1,
  '라매',
  3,
  'coding',
];

const arr2 = [ ...arr1, 'pkiopb@gmail.com' ];

console.log('arr1 : ', arr1);
console.log('arr2 : ', arr2);

arr2[4] = 'empty';

console.log('arr1 : ', arr1);
console.log('arr2 : ', arr2);

console.log(arr1 === arr2);