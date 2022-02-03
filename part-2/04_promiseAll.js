const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// 03, 04 은 하는 일이 똑같음 => 근데 promise.all 을 쓰는가 배열을 써서 짚어넣는가의 차이

const readAllUsers = () => {
  // TODO: Promise.all을 이용해 작성합니다
  // user1.json의 내용과 user2.json 내용을 합쳐서 객체로 리턴해야 합니다.
  let user1 = getDataFromFilePromise(user1Path)
    .then((data) => JSON.parse(data));
  let user2 = getDataFromFilePromise(user2Path)
    .then((data) => JSON.parse(data));
  return Promise.all([user1, user2])
    .then(values => {
      return values;
    })
  
}

// readAllUsers()

module.exports = {
  readAllUsers
}

// 얘는 왜 안 되나??
// let user1 = getDataFromFilePromise( user1Path ); // 파일을 읽어옴
//   .then(( data1 ) => { // 읽은 데이터를 가지고 오기
//     return JSON.parse(data1) // 가져온 데이터를 객체로 만들어서, 다음 then으로 넘겨주기
//   } )
  
//   let user2 = getDataFromFilePromise( user2Path ); // 파일을 읽어옴
//   .then(( data2 ) => {
//     return JSON.parse(data2);

//   })

//   return Promise.all( [user1, user2] ).then((value) => {
//     return value;
//   })