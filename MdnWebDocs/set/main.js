const language = {
    set current(name) { // 객체의 속성에 할당을 시도할 때 호출할 함수 바인딩
        this.log.push(name);
    },
    log: [],
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);