// 안티패턴임.
// 그냥 사용처에서 직접 full path를 사용하는 것이 좋다.
module.exports = {
    sayHello1: require('./module1'),
    sayHello2: require('./module2')
}