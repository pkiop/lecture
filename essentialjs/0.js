// 0. 객체 사용법

const a = 'habit';

const obj1 = {
  id: 1,
  "name": "라매",
  [a]: 'coding',
  "my name": "라매개발자",
  getLameNameWithFunction: function() {
    return this.name;
  },
  getLameNameUsingArrowFunc: () => {
    return this.name;
  },
  getLameName() {
    return this.name;
  }
};

console.log(obj1.id);
console.log(obj1['name']);
console.log(obj1[a]);
console.log(obj1['my name']);
console.log(obj1.getLameNameWithFunction());
console.log(obj1.getLameNameUsingArrowFunc.bind(obj1)());
console.log(obj1.getLameName());
