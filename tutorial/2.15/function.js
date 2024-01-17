// 예제 #1
// 방식 1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return '보호자의 동의를 받으셨나요?';
  }
}

// 방식 2
function checkAge2(age) {
  return (age > 18) ? true : '보호자의 동의를 받으셨나요?';
}


console.log(checkAge(18));
console.log(checkAge2(20));

// 예제 #2
// min(a, b) 함수 만들기 : 둘 중 작은 값 반환
// 여기에 작성 시작
function min (a , b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
// 여기에 작성 끝
console.log(min(2, 5)); // min(2, 5) == 2
console.log(min(3, -1)); // min(3, -1) == -1
console.log(min(1, 1)); // min(1, 1) == 1

// 예제 #3
function pow(x, n) {
  if (n < 1) {
    return 'n은 1 이상의 자연수입니다.';
  }
  let answer = 1;
  for(let i = 0; i < n; i++) {
    answer *= x;
  }
  return answer;
}
console.log(pow(3, 2)); // 3 * 3 = 9
console.log(pow(3, 3)); // 3 * 3 * 3 = 27
console.log(pow(1, 100  )); // 1 * 1 * 1 * ... * 1 = 1