'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer(정보 제공자) vs Consumer(정보 사용자)

// 1. Producer
// 중요! 새로운 Promise가 생성되자마자 자동적으로 executor 가 실행 됨.

const promise = new Promise(
  function(resolve, reject) { // resolve와 reject라는 콜백함수를 받는 executor라는 콜백함수를 전달해줘야 한다.
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(function(){
      resolve('ellie');
      // reject(new Error('no network')); 
    }, 2000);
  });

  // 2. Consumers : then, catch, finally
  promise //
    .then(function(value) {
      console.log(value); // resolve로 전달된 파라미터 : ellie
    })
    .catch(function(error) {
      console.log(error);
    })
    .finally(function() {
      console.log('finally');
    });
  
  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));