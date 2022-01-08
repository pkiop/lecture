// const axios = require('axios');
import fetch from 'node-fetch';
console.log('fetch : ', fetch);
const URL = 'https://jsonplaceholder.typicode.com/todos/1';

// const getData = (URL, params, callback) {

// }

/*
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/
// Promise
// getData(URL, function (response) {
//   data = response.data;
//   response.json();
// });

let data2;
fetch(URL)
  .then((response) => {
    return response.json(); // 비동기 작업이 더 필요한 데이터
    // data 를 가지 할 일들
  })
  .then((response) => {
    data2 = response;
  }).catch(err) => {

  }

const getData = async () => {
  try {
    const response = await fetch(URL);
    const res = await response.json();
    console.log('res : ', res);
  } catch(err) {
    throw new Error('ERR');
  }

};

getData();
