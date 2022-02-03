const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다 => 비동기적으로 파일 내용 전체를 읽습니다.
  
  // 1. 파일을 읽고 나서 callback이 실행되어야 합니다.
  // 2. 에러가 발생할 경우, callback 첫번째 인자에 에러 객체가 전달되어야 합니다.
  // 3. callback 두번째 인자에 파일 내용이 전달되어야 합니다.

  // fs.readFile를 실행할 때는 세 개의 인자를 넘길 수 있다.
  fs.readFile( filePath, 'utf8', (err, data) => { 
   // utf8 이라는 인코딩 방식으로 엽니다. => 이 부분은 옵션으로써 넣어도 그만 안 넣어도 그만입니다.
    if( err ){
        callback(err, null);
        // 에러가 뜬다면, 즉, 파일이 존재하지 않는다면, data에 nul 값을 넣어줘라!
    }
    else{
      callback(null, data);
      // 에러가 뜨지 않는다면, 즉, 파일이 존재한다면, data로 들어온다.
    }

  } )

};

 getDataFromFile('README.md', (err, data) => console.log(data));
//                 filePath,   ----callback------------------
module.exports = {
  getDataFromFile
};
