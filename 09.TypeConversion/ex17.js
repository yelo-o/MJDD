// 논리 연산자를 사용한 단축 평가
console.log('Cat' && 'Dog'); // Dog
console.log('Cat' || 'Dog'); // Cat

// 단축 평가 표현식 예제
// 논리합(||) 연산자
console.log('Cat' || 'Dog'); // Cat
console.log(false || 'Dog'); // Dog
console.log('Cat' || false); // Cat

// 논리곱(&&) 연산자
console.log('Cat' && 'Dog'); // Dog
console.log(false && 'Dog'); // false
console.log('Cat' && false); // false
