var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

// TODO: Promise.all을 이용해 작성합니다
// Promise 형태로 리턴되어야 합니다
// /data/latest 의 응답 내용과 /data/weather 응답 내용을 합쳐 
// 새로운 객체로 리턴되어야 합니다

function getNewsAndWeatherAll() {

  let obj = {}

  let newsdata = fetch(newsURL)
    .then(response => response.json())
    .then((data1) => {
      return data1.data
    })

  let weatherdata = fetch(weatherURL)
    .then(response => response.json())
    .then((data2) => {
      return data2
    })
  return Promise.all([newsdata, weatherdata]).then((value) => {
    obj.news = value[0]
    obj.weather = value[1]
    return obj
  })

}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}