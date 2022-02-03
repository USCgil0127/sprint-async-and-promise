const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// TODO: async/await 키워드를 이용해 작성합니다
// async 키워드를 사용한 함수는 AsyncFunction의 인스턴스입니다
// await 키워드만 이용해 배열이 리턴되어야 합니다
// user1.json의 내용과 user2.json 내용을 합쳐 배열로 리턴되어야 합니다

const readAllUsersAsyncAwait = async() => {

  //문자열로된 data가 변수에 들어가있음
  let user1P = await getDataFromFilePromise(user1Path);
  let user2P = await getDataFromFilePromise(user2Path);

  return Promise.all( [ JSON.parse(user1P), JSON.parse(user2P) ] ).then((value) => {

    return value;
  })

}

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}