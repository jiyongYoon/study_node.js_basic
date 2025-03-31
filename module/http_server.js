// nodemon 사용 -> cd ./module -> npm run dev

const http = require('http');

const PORT = 3000;

const targetObject = {
    message: 'Welcome to the home page!'
};

// server 객체는 EventEmitter를 상속받고 있다.
// server.on('request', 콜백함수); -> request 이벤트가 발생했을 때 실행할 콜백함수 등록
// req, res 객체는 node.js가 전달해줌
const server = http.createServer((req, res) => {
    // console.log('Request received!');
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // });
    // res.end(JSON.stringify(
    //     {
    //         message: 'Hello, World!'
    //     }
    // ));
    if (req.method === 'POST') {
        if (req.url === '/home') {
            req.on('data', (data) => {
                console.log('data', data);
                const stringfiedData = data.toString();
                console.log('stringfiedData', stringfiedData);
                Object.assign(targetObject, JSON.parse(stringfiedData)); // dataObject에 JSON 변환된 stringfiedData를 추가함
            });
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
        }
    } else if (req.method === 'GET') {
        if (req.url === '/home') {
            res.statusCodeCode = 200;
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(targetObject));
        } else if (req.url === '/about') {  
            res.setHeader('Content-Type', 'text/html');
            res.write('<html><body><h1>About Us</h1></body></html>');
            res.end();
        } else if (req.url === '/') {
            res.statusCode = 307;
            res.setHeader('Location', '/home');
            res.end();
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
        }
    }
});
/**
 * request 객체의 properties or methods
 * - req.method: HTTP 메소드 (GET, POST, PUT, DELETE 등)
 * - req.url: 요청 URL
 * - req.headers: 요청 헤더
 * - req.httpVersion: HTTP 버전
 * - req.setTimeout: 요청 타임아웃 설정
 * - req.statusCode: 요청 상태 코드 (200, 404, 500 등)
 * - req.socket: 소켓 정보
 * - req.trailer: 요청 트레일러
 * 등...
 */

/**
 * response 객체의 properties or methods
 * - res.writeHead: 응답 헤더 설정
 * - res.write: 응답 본문 작성
 * - res.end: 응답 종료
 * - res.statusCode: 응답 상태 코드 설정
 * - res.setHeader: 응답 헤더 설정
 * - res.getHeader: 응답 헤더 가져오기
 * - res.removeHeader: 응답 헤더 삭제
 * 등...
 */

// server.listen() -> 서버 실행
// server.close() -> 서버 종료
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});