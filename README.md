# Part 1
## Getting started

Part I은 모든 코드가 이미 작성되어 있습니다.

1. `part-1/index.html` 을 브라우저에서 열어보고, callback, promise, async & await 버튼을 각각 클릭해보세요. 이 버튼들은 정확히 동일한 액션을 하지만, 그 구현 방법은 조금씩 다릅니다.
2. 어떤 함수가 실행되는지 `part-1/script.js` 파일을 열어 확인해보세요. 
   - callback 버튼은 runCallback 함수를 실행합니다.
   - promise 버튼은 runPromise 함수를 실행합니다.
   - async & await 버튼은 runAsync 함수를 실행합니다.
3. delay 함수와 sleep 함수의 차이점을 확인해보세요.
   - 해당 함수는 `part-1/01_callback.js` 파일, 그리고 `part-1/02_promiseConstructor.js` 파일에 각각 구현되어 있습니다. 

4. `runAsync` 함수는 `async` 및 `await` 키워드의 사용법을 보여주고 있습니다. 비동기 함수의 흐름이 마치 동기 함수를 사용하는 구조처럼 보입니다. 하지만, **실제로는 Promise를 이용하여 결과를 반환하는 것**입니다. 이 경우, 코드 위에서부터 아래로, 시간의 흐름대로 진행됩니다. 

## Bare Minimum Requirements

- 세가지 패턴의 비동기 코드를 사용하는 방법이 어떻게 다른지 이해하세요.

# Part 2

# Part II - fs module

다시 브라우저 환경을 떠나 node.js 환경, 그중에서도 fs module을 살펴봅시다. 브라우저 환경과는 다르게 node.js 앱은 내 컴퓨터에서 직접적으로 실행되므로, 파일을 불러오거나 저장하는 등의 액션이 가능합니다. fs(File System) module 사용법을 잘 익힌다면 "파일 열기", "파일 저장하기" 등을 직접 구현할 수 있습니다. node.js 에서는 파일을 읽는 비동기 함수를 제공합니다. 이를 통해 callback, Promise 구현을 실습해봅시다.
  
## Bare minimum requirements

주어진 테스트를 전부 통과하십시오.

`npm run test:part-2` 명령으로 테스트를 실행할 수 있습니다.
  
### Getting started

  파일 이름에 표시된 번호 순서대로 진행해주세요.
  
>   callBack  ➡️  promiseConstructor  ➡️  basicChaining  ➡️  promiseAll  ➡️  asyncAwait
  
  1. `part-2/01_callBack.js` 파일을 구현하고, 테스트를 통과합니다. 그리고 파일을 불러오는 메소드인 [fs.readFile의 공식 API 문서](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback) , 그리고 유어클래스에 제공되는 node.js 공식 문서 가이드를 참고하세요.
  
    - 테스트를 통과하는 것도 중요하지만, 실제로 getDataFromFile 을 직접 사용해서, 어떻게 작동되는지도 파악해보세요.
  
 
```js
  // part-2/01_callBack.js
const fs = require("fs");

const getDataFromFile = function (filePath, callback) {
  // 구현하세요
};

// 다음 코드를 추가해 넣은 후, js 파일을 실행해보세요.
getDataFromFile('README.md', (err, data) => {
  console.log(data)
});

module.exports = {
  getDataFromFile
};
```
```js
  > node part-2/01_callback.js
```
2. `part-2/02_promiseConstructor.js` 파일을 구현하고, 테스트를 통과합니다. 앞서 callback 이라는 파라미터 대신, Promise의 `reject`, `resolve` 함수를 이용하세요.
  
3. `part-2/03_basicChaining.js`은, 앞서 작성한 `getDataFromFilePromise`를 이용해서 풀어야 합니다.

   -  fs 모듈을 직접 사용하는 것이 아닙니다.
   - getDataFromFilePromise을 이용해, files/user1.json 파일과 files/user2.json 파일을 불러오고, 두 파일을 합쳐서 최종적으로 두 객체가 담긴 배열을 만드는 것이 목표입니다.
   - 파일 경로를 찾을 때, user1Path 및 user2Path를 이용하세요. 좀 더 자세한 설명은 Reference를 참고하세요.
   - then이 어떠한 파라미터를 전달받는지에 대한 이해가 있어야 합니다.
   - then의 리턴이 무엇을 의미하는지 이해하고 있어야 합니다.
   - 파일 읽기의 결과가 문자열이므로, JSON.parse를 사용해야 문제를 해결할 수 있을 것입니다.

  4. `part-2/04_promiseAll.js`은, 마찬가지로 `readAllUsersChaining`과 정확히 같은 결과를 리턴합니다. 다만, `Promise.all`을 반드시 사용해서 풀어야 합니다.
    - `Promise.all` 은 동시에 두 개 이상의 `Promise` 요청을 한꺼번에 실행하는 함수입니다.
  
  # Part III - fetch API


Part III는 node.js 환경을 떠나 다시 브라우저에서 진행합니다. (참고로 node.js 환경에서는 fetch API가 존재하지 않습니다)

이번 시간에는 fetch를 이용해 요청을 보내고, 받는 연습을 합니다. Part II와 비슷한 구성입니다. 다만 callback 형태의 요청이 존재하지 않으므로 chaining과 `Promise.all` 그리고 `async`/`await`을 이용해봅시다.

## Bare minimum requirements
1. 서버를 먼저 실행해야 합니다.
`npm run server:part-3` 명령으로 서버를 실행할 수 있습니다. 서버를 실행시킨 상태에서는 다음 URL을 통해 정보를 얻어올 수 있습니다.
- 최신 뉴스: http://localhost:5000/data/latestNews
- 날씨 정보: http://localhost:5000/data/weather

2. `part-3/SpecRunner.html` 를 통해 테스트를 실행시킬 수 있습니다.

### Getting started

파일 이름에 표시된 번호 순서대로 진행해주세요.
```js
basicChaining  ➡️  promiseAll  ➡️  asyncAwait
```
1. `part-3/01_basicChaining.js`은, fetch를 이용해서 풀어야 합니다.
   - http://localhost:5000/data/latestNews 요청과 http://localhost:5000/data/weather 요청의 결과를 하나의 객체로 합치는 것이 목표입니다.
2. `part-3/02_promiseAll.js`은, 마찬가지로 `getNewsAndWeather`과 정확히 같은 결과를 리턴합니다. 다만, `Promise.all`을 반드시 사용해서 풀어야 합니다.
3. `part-3/03_asyncAwait.js`은, 앞서 진행한 `getNewsAndWeather`, `getNewsAndWeatherAll`과 같은 결과를 리턴합니다. 이번에는 `async` 및 `await` 키워드를 사용해서 풀어야 합니다.

--------

## 필자가 정리한 Sprint 관련 개념들

- #### [JS 비동기와 논블로킹](https://velog.io/@gil0127/JS-%EB%B9%84%EB%8F%99%EA%B8%B0-asynchronous) 

- #### [콜백 함수와 비동기 처리](https://velog.io/@gil0127/%EC%BD%9C-%EC%8A%A4%ED%83%9D%EA%B3%BC-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%A8%EC%88%98)

- #### [Promise & async , await](https://velog.io/@gil0127/Promise-async-await)

- #### [fs module 이란](https://velog.io/@gil0127/fs-module-%EC%9D%B4%EB%9E%80)

- #### [AJAX 와 fetch](https://velog.io/@gil0127/%EB%82%A0%EC%94%A8-API-Sprint-%EC%A7%84%ED%96%89%ED%95%98%EB%A9%B4%EC%84%9C-%EB%B0%B0%EC%9A%B4-%EC%A0%90)

- #### [JS 비동기의 핵심 Event Loop](https://velog.io/@gil0127/JS-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%B5%EC%8B%AC-Event-Loop)

---------------

# Sprint를 마치고 느낀 점


