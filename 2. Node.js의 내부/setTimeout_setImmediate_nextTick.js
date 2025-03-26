// setTimeout(() => {console.log('setTimeout')}, 0);
// setImmediate(() => {console.log('setImmediate')});
// process.nextTick(() => {console.log('nextTick')});
// console.log('main script');

/** 실행결과 
 * main script
 * nextTick
 * setTimeout
 * setImmediate
 */

// process.nextTick() 재귀 호출 시 해당 phase에 머물며 무한 루프에 빠짐
// let count = 0;
// const cb = () => {
//     console.log(`Processing nextTick ${++count}`);
//     process.nextTick(cb);
// };
// setTimeout(() => {console.log('setTimeout')}, 0);
// setImmediate(() => {console.log('setImmediate')});
// process.nextTick(cb);
// console.log('main script');

// setImmediate()는 재귀 호출을 하더라도 해당 phase에 머물지 않고 다음 phase로 넘어감
// let count = 0;
// const cb = () => {
//     for (let i = 0; i < 1000; i++) {
//         // spend some time
//     }
    
//         if (count < 2000) {
//             console.log(`Processing setImmediate ${++count}`);
//         setImmediate(cb);
//     }
// };
// setImmediate(cb);  
// setTimeout(() => { console.log('setTimeout') }, 50);
// console.log('main script');

/** 실행결과
 * ...
 * Processing setImmediate 1279
 * Processing setImmediate 1280
 * Processing setImmediate 1281
 * Processing setImmediate 1282
 * Processing setImmediate 1283
 * setTimeout
 * Processing setImmediate 1284
 * Processing setImmediate 1285
 * Processing setImmediate 1286
 * Processing setImmediate 1287
 * Processing setImmediate 1288
 * ...
 */

// I/O 사이클 밖에서는 순서가 보장되지 않음 -> 두 타이머는 동일한 phase에 속함
setTimeout(() => {console.log('setTimeout')}, 0);
setImmediate(() => {console.log('setImmediate')});

// I/O 사이클 안에서는 immediate가 먼저 실행됨
fs.readFile('test.txt', 'utf8', () => {
    console.log('I/O');
    setTimeout(() => {console.log('setTimeout')}, 0);
    setImmediate(() => {console.log('setImmediate')});
});

/** 이벤트 루프의 동작 순서
 * 1. `fs.readFile('test.txt', 'utf8', callback)` 호출 → `libuv`에 I/O 작업 위임.
 * 1-1. 파일 읽기 완료 후, `libuv`가 콜백을 `poll` phase의 I/O 큐에 등록.
 * 2. 이벤트 루프 시작 → `timers` phase: 처리할 타이머 없음 → 스킵.
 * 3. `poll` phase: I/O 큐에서 `fs.readFile` 콜백을 호출 스택으로 이동.
 * 3-1. 콜백 실행 → `I/O` 출력.
 * 3-2. `setTimeout(..., 0)` 호출 → 타이머 등록, 0ms 후(실제로는 최소 시간 타이머 만료 후) 타이머 큐에 콜백 추가.
 * 3-3. `setImmediate()` 호출 → `check` phase 큐에 콜백 등록.
 * 4. `poll` phase 끝 → `check` phase로 이동.
 * 4-1. `check` phase: `setImmediate` 콜백 실행 → `setImmediate` 출력.
 * 5. 다음 이벤트 루프 → `timers` phase: 타이머 큐에서 `setTimeout` 콜백 실행 → `setTimeout` 출력.
 */

