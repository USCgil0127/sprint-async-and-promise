let player = document.querySelector('#player');
let title = document.querySelector('#title');

let btnCallback = document.querySelector('#btnCallback');
btnCallback.onclick = runCallback;

let btnPromise = document.querySelector('#btnPromise');
btnPromise.onclick = runPromise;

let btnAsync = document.querySelector('#btnAsync');
btnAsync.onclick = runAsync;

//// callback용 함수
function runCallback() {
  resetTitle(); // 제목을 초기화합니다
  playVideo(); // 비디오를 재생한다.
 // delay()는 콜백.js에 있는 함수임 => setTimeout을 포함하고 있음
  delay(1000, () => { // 1000 = 1초  뒤에 
    pauseVideo(); // 영상을 멈춘다.
    displayTitle(); // 제목을 표시하면서 밑에 글자가 나오게 하는 구만

    delay(500, () => {
      highlightTitle(); // 일정 시간 동안 제목을 강조하고

      delay(2000, resetTitle); // 
    });

  }); // end of delay 1000
}
////

// function runPromise() {
//   resetTitle();
//   playVideo();

//   sleep(1000).then(() => {
//     pauseVideo();
//     displayTitle();
//   })
//     .then(sleep.bind(null, 500))
//     .then(highlightTitle)
//     .then(sleep.bind(null, 2000))
//     .then(resetTitle)
//     // catch의 사용법 => reject 시 catch를 사용하고
//     .catch( err => {
//       console.log(err);
//     })
//     // resolve나 reject 이후에도 추가 작업을 하고 싶다면,
//     // .finally() 를 사용하자

//     .finally( () => { 
//         console.log('finally');
//      });

// }

////// resolve, reject함수에는 인자를 넘길 수 있습니다. 이때 넘기는 인자는 어떻게 사용할 수 있나요?
function runPromise() {
  resetTitle();
  playVideo();

  sleep(1000).then((param) => {
    // sleep이라는 함수에서 .then으로 데이터를 받아온다. resolve('hello')
    console.log(param);
    pauseVideo();
    displayTitle();
    return 'world'
  })
  .then((param) => {
    // 여기서는 위에 'world' 를 받아온다.
    console.log(param);
    sleep(500);
  })
  .then(highlightTitle)
  .then(sleep.bind(null, 2000))
  .then(resetTitle)
}
////////

// promise -> then 으로도 난잡해질 수 있는 것을 방지해주는 것 
// 하지만 promise 를 써야지. 좀 더 깔끔해지는 경우도 있으니 항상 이 async -> await을 쓸 필요는 없다.
async function runAsync() {
  // 
  resetTitle();
  playVideo();

  await sleep(1000);
  pauseVideo();
  displayTitle();

  await sleep(500);
  highlightTitle();

  await sleep(2000);
  resetTitle();
  // 실패할 때를 구분해주려면
  //  try {..성공 케이스 }
  //  catch ( error ) { console.error(error); }
}


function resetTitle() {
  log('제목을 초기화합니다');
  // log()함수가 무엇인고?? 
  // 써있는 클래스들을 제거한다.
  title.classList.remove('visible', 'highlight');
}

function playVideo() {
  log('영상을 재생합니다');
  // player ID 를 찍어서 비디오 테크의 고유 기능 중 하나인 play를 쓰는 것인듯
  player.play();
}

function pauseVideo() {
  log('영상을 멈춥니다');
  player.pause();
}

function displayTitle() {
  log('제목을 표시합니다');
  title.classList.add('visible');
}

function highlightTitle() {
  log('제목을 강조합니다');
  title.classList.add('highlight');
}

function log(message) {
  let logger = document.querySelector('#logger');
  let l = document.createElement('div');
  l.textContent = `[${new Date().toISOString().slice(11, -5)}] ${message}`;
  logger.prepend(l);
}