let a = 2;

const p = new Promise((resolve, reject) => {
    console.log('제일 먼저');
    setTimeout(() => {
        a = 5;
        console.log(a);
        resolve(a);
    }, 0);
});

// 딴짓딴짓
console.log('딴짓');
// 딴짓딴짓
p.then((result) => {
    console.log('result', result);
});

// 한 번 비동기는 영원한 비동기
// 비동기는 동시의 문제가 아니다. 순서의 문제다.
// Promise 란, 실행은 바로 하되, 결괏값은 원하는 시점에 쓸 수 있는 것
// promise, process.nextTick -> micro, 나머지는 매크로