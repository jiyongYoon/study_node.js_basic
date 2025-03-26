const EventEmitter = require('events');
const celebrity = new EventEmitter();

let eventName = 'update post';

celebrity.on(eventName, (args) => {
    console.log(`This ${args} post is so awesome!`);
});

celebrity.on(eventName, (args) => {
    console.log(`I like this post's ${args}!`);
});

console.log('update post!');
celebrity.emit(eventName, 'image');
console.log('emit finished!');

/**
 * update post!
 * This image post is so awesome!
 * I like this post's image!
 * emit finished!
 */

// Process event 사용
process.on('beforeExit', (code) => {
    console.log(`Process beforeExit event with code: ${code}`);
});

process.on('exit', (code) => {
    console.log(`Process exit event with code: ${code}`);
});

/** 해당 event들은 script를 실행하면 자동으로 발생하는 이벤트들이다.
 * Process beforeExit event with code: 0
 * Process exit event with code: 0
 */
