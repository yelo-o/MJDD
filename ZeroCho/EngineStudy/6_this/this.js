// callback 함수
const obj = {
    name : 'zerocho',
    sayName() {
        console.log("this.name : " + this.name);
        function inner() {
            console.log("this.name : " + this.name);
        }
        inner(); // 함수 호출할 때 아무것도 앞에 안 붙어있기 때문에 this = window
    }
}
obj.sayName(); // 함수 호출할 때 앞에 obj 가 붙어있기 때문에 this = obj

// 화살표 함수
const obj2 = {
    name : 'zerocho',
    sayName() {
        console.log("this.name : " + this.name);
        const inner = () => {
            console.log("this.name : " + this.name);
        }
        inner(); // 화살표 함수는 부모 함수의 this를 가져온다.
    }
}
obj2.sayName(); // 이 때 호출된다. (같은 시점에 호출된다는 뜻)

// call()
const obj3 = {
    name : 'zerocho',
    sayName() {
        console.log("this.name : " + this.name);
        const inner = () => {
            console.log("this.name : " + this.name);
        }
        inner.call(obj); // this 조작
    }
}
obj3.sayName(); 

// apply(), bind(), call() 비교
function a() {};
// a.apply(window) === a.bind(window)() === a.call(window)
console.log(a.apply(window) === a.bind(window)());
console.log(a.bind(window)() === a.call(window));
console.log(a.apply(window) === a.call(window));
