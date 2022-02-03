const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 맟 getDataFromFilePromise(user2Path) 를 이용해 작성합니다
//let arr = [];   // => 왜 여기서 배열을 선언하고 할당 하면 에러가 나고...

const readAllUsersChaining = () => {
let arr = [];  // => 여기서 해야 에러가 안 나는 것인가??

  

  return getDataFromFilePromise(user1Path) // 파일을 읽음

    .then( ( data1 ) => { // 읽은 거 가져왔음
       arr.push( JSON.parse(data1) ) // 가져온 거 객체로 만들어서 배열에 넣어줌
       return getDataFromFilePromise( user2Path ) // 다음 then에 들어갈 값을 return 으로 넘겨줌
    } )
    .then(( data2 ) => { // 읽은 거 가져왔음 
       arr.push(JSON.parse(data2)) // 가져온 거 객체로 만들어서 배열에 넣자꾸나!! 와우~
       return arr
       // 객체 2개 들어 있는 배열이 return 됨!!!! 
    } )

}

// readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}

// TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // 1. user1Path랑 user2Path 내용을 합쳐서 객체로 리턴
  //  두 파일을 합쳐서 최종적으로, 두 객체가 담긴 배열을 만드는 것이 목표입니다.
  //  파일 읽기의 결과가 문자열이므로, JSON.parse 를 사용해야 문제를 해결할 수 있을 것입니다.
  // 2. fs모듈 사용하지 말고, getdata 2번 사용
  // 3. promise.all 사용 금지
  
  // 1. 파일을 넣어서 읽고, 인코딩해서 추출한다 => getdata(user1path);
  // 2. then.(data) => json.parse(data); // json 형식의 텍스트를 자바스크립트 객체로 변환한다.
  // 3. user2path => json.parse(data);
  // 4. arr.push(1,2)
  // 5. return arr