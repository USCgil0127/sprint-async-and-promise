var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // 체이닝의 결과가 Promise 형태로 리턴되어야 합니다
  // /data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 
  // 새로운 객체로 리턴되어야 합니다
  // fetch를 활용하세요. 총 두 번 사용해야 합니다
  // Promise.all 또는 async/await을 사용하지 않고 풀어보세요

// function getNewsAndWeather() {

//   let obj = {}

//   return fetch(newsURL)
//     .then(data1 => data1.json())
//     .then((news) => {
//       obj.news = news.data
//       return fetch(weatherURL)
//         .then(data2 => data2.json())
//         .then((weather) => {
//           obj.weather = weather
//           return obj
//         })
//     })
// }

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let obj = {};
  return fetch(newsURL)
    .then(response => response.json())
    .then(data => {
      obj.news = data.data;
      return fetch(weatherURL);
    })
    .then(response => response.json())
    .then(data => {
      obj.weather = data;
      return obj;
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}

