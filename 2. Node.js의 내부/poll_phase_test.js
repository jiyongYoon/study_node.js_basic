// setTimeout()은 timeout ms 후에 실행을 보장하는 것이 아니라 timeout ms 동안 실행이 되지 않도록 방지하는 역할을 한다.
// 해당 타이머의 콜백함수의 실행은 poll phase가 제어(control) 하게 된다.
const fs = require('fs');

function someAsyncOperation(callback) {
    // Assume this takes 95ms to complete
    fs.readFile('test.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
    const startCallback = Date.now();

    // do something that will take 10ms...
    while (Date.now() - startCallback < 10) {
        // do nothing
    }
    console.log('some works done');
});

/**
 * 실행결과
 * some works done
 * 109ms have passed since I was scheduled
 * 
 * 0. 각 페이즈는 작업을 처리하기 위한 FIFO 큐를 갖는다.
 * 1. `setTimeout()`과 `someAsyncOperation()의 fs.readFile()` 함수가 호출되며 작업을 백그라운드에 예약한다.
 * 1-1. `setTimeout()`은 타이머를 등록한다.
 * 1-2. `fs.readFile()`은 libuv에게 I/O 작업을 바로 위임한다.
 * 1-3. `fs.readFile()` I/O가 완료되었다면 libuv가 I/O 완료 이벤트(callback)를 `poll` queue에 추가한다.
 * 2. 메인 스크립트가 끝나며 call stack이 비워짐.
 * 3. 이벤트 루프 시작: `timers` 페이즈에서 100ms 타이머가 아직 안 끝남 → 스킵.
 * 3-1. 타이머가 모두 지나면 (이벤트 루프의 실행과 상관 없이) 콜백이 타이머 큐로 이동.
 * 4. `poll` phase에서 queue를 확인하고 콜백 함수를 call stack으로 이동시킨다.
 * 4-1. 콜백 내 while 루프 10ms 실행 후 `some works done` 출력.
 * 5. call stack 비워짐 → `check` → `close` → 다음 루프의 `timers`.
 * 6. `timers` 페이즈에서 타이머 큐의 콜백 실행(100ms 후, 실제 109ms 시점).
 * 6-1. `109ms have passed since I was scheduled` 출력.
 */
