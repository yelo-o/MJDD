/**
 * 함수 호출과 함수 선언을 헷갈리지 말자.
 * add() 인지 add인지 헷갈리면 return 값을 직접 넣어봐라.
 */

const add = (a, b) => a + b;

function calculator(func, a, b) {
    return func(a, b);
}

var val = add(3, 5); // 8

var val2 = calculator(add, 5, 7); // 12

// # 2
const onClick = () => (event) => {
    console.log('hello');
}

// 아래에서 둘 중에 뭐가 맞을까?
document.querySelector('#header').addEventListener('click', onClick()); // 정답
// 리턴값을 대신 넣어주면 아래와 똑같으니까!
document.querySelector('#header').addEventListener('click', (event) => {
    console.log('hello');
});

// document.querySelector('#header').addEventListener('click', onClick); // 오답
