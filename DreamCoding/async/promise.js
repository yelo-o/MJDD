'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer(정보 제공자) vs Consumer(정보 사용자)

// 1. Producer
// 중요! 새로운 Promise가 생성되자마자 자동적으로 executor 가 실행 됨.

const promise = new Promise (
  function(resolve, reject) { // resolve와 reject라는 콜백함수를 받는 executor라는 콜백함수를 전달해줘야 한다.
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(function () {
      resolve('ellie');
      // reject(new Error('no network')); 
    }, 2000);
  }
);

// 2. Consumers : then, catch, finally
promise //
  .then(function (value) {
    console.log(value); // resolve로 전달된 파라미터 : ellie
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log('finally');
  });
  
// 3. Promise chaining
const fetchNumber = new Promise (function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then(function(num) {return num * 2})
  .then(function(num) {return num * 3})
  .then(function(num) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(num - 1)
      }, 1000);
    })
  })
  .then(function(num) {console.log(num)});

// 4. Error Handling
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = hen =>
  new Promise( (resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });

const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error => {
    return '🍞';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);