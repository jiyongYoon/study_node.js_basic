const A = 1;
module.exports = {
    A
}

module.exports.B = 2;

module.exports.sum = function sum(a, b) {
    return a + b;
}

exports.sum2 = function sum2(a, b) {
    return a + b;   
}

// 그러나 명시적으로 exports를 해주는 것이 가장 좋음
module.exports = {
    A,
    B: 2,
    sum,
    sum2
}