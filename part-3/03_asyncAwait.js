var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

// TODO: async/await 키워드를 이용해 작성합니다
// async함수는 항상 promise값을 반환하는데, 만약 async함수의 반환값이
// 명시적으로 promise가 아닌라면 암묵적으로 promise로 감싸집니다

async function getNewsAndWeatherAsync() {

  let obj = {}

  let newsdata = await fetch(newsURL)
    .then(response => response.json())


  let weatherdata = await fetch(weatherURL)
    .then(response => response.json())

  obj.news = newsdata.data
  obj.weather = weatherdata
  return obj;

}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}