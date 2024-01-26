setTimeout(() => {
    console.log('a');
}, 0);

setTimeout(() => {
    console.log('b');
}, 1000);

setTimeout(() => {
    console.log('c');
}, 2000);

// 한 번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아니다. 순서의 문제다.