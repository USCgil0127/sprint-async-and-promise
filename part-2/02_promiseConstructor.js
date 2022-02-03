const fs = require("fs");

// return new Promise()
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  // 1. promise 형태로 리턴되어야 합니다.
  // 2. .then 블록을 통하여, 파일 내용이 전달되어야 합니다. => line 19
  // 3. 에러가 발생할 경우, catch 블록을 통하여 에러 객체가 전달되어야 합니다.
  // 4. callback 이라는 파라미터 대신, Promise의 reject, resolve 할수를 이용하세요

const getDataFromFilePromise = filePath => {
  
      return new Promise( ( resolve, reject ) => { 

        fs.readFile( filePath, 'utf8', ( err, data ) => {

          if( err ) {
            reject( err );
          }
          else{
            resolve(data);
          }

        })     
   })

}; // end of getDataFromFilePromise


 //getDataFromFilePromise('README.md').then(data => console.log(data));
 // then을 통해 파일 내용이 전달 되어야 합니다. testcase 중!!
// callback 타입에서는 .then이 존재하지 않았고, 여기서는 then을 통해 파일 내용이 전달되야 한다.
// resolve( null, data ) => resolve( data )

module.exports = {
  getDataFromFilePromise
};
