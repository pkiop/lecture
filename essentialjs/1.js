// 1. 구조분해 할당

const obj1 = {
  id: 1,
  name: '라매',
  age: 3,
  habit: 'coding',
};

const id = obj1.id;
const name = obj1.name;
const age = obj1.age;
const habit = obj1.coding;

const { id, name, age, habit } = obj1;

const arr1 = [id, '라매', age];

const [lameId, lameName, lameAge] = arr1;
