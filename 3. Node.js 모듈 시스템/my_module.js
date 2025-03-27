function hello1 () {
    return 'Hello1';
}

function hello2 () {
    return 'Hello2';
}

console.log('we are in my_module.js');

module.exports = {
    hello1,
    hello2
}