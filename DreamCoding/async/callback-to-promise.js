'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting
// hoisting : var, function declaration : 선언들이 제일 위로 올라가는 것
console.log('1');
// setTimeOut : 브라우저 api
setTimeout(function() {
  console.log('2');
}, 1000);
console.log('3');

// Synchronous callback <- hoisiting으로 맨 위로 올라 감
function printImmediately(print) {
  print();
}

printImmediately(function() {
  console.log('hello')
});

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(function() {
  console.log('async callback')
}, 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(function() {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(function() {
      if (user === 'ellie') {
        onSuccess({name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  function(user) {
    userStorage.getRoles(
      user,
      function(userWithRole) {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      function(error) {
        console.log(error);
      })
  },
  function(error) {
    console.log(error);
  }
)
