// 안티패턴임.
// 그냥 사용처에서 직접 full path를 사용하는 것이 좋다.
const lib = require('./lib');
console.log(lib.sayHello1.hello1());
console.log(lib.sayHello2.hello2());

// 방법 1
const sayHello1 = require('./lib/module1');
const sayHello2 = require('./lib/module2');

console.log(sayHello1.hello1());
console.log(sayHello2.hello2());

// 방법 2
const {hello1} = require('./lib/module1');
const {hello2} = require('./lib/module2');

console.log(hello1());
console.log(hello2());