// 원본
// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, wait);
//   });
// }

// // 변화본
const sleep = (wait) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("에러"));
    }, wait);
  });
};

// resolve, reject함수에는 인자를 넘길 수 있습니다. 이때 넘기는 인자는 어떻게 사용할 수 있나요?

// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     // resolve -> 다음에는 then
//     // reject -> 다음에는 catch
//     setTimeout(() => {
//       resolve('hello')
//     }, wait);
//   });
// }
