// http 모듈 로드
const http = require('http');

// 포트 번호 설정
const port = 3000;

// 서버 생성
// req: 요청 객체, res: 응답 객체
const server = http.createServer((req, res) => {
    console.log('요청이 들어왔습니다!');
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // 응답 데이터
    res.end('<h1>Hello, World!</h1>');
});

// 서버 실행
// listen(port, callback): 서버 실행
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});