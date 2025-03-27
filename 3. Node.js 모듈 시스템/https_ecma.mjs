import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
    // 요청을 보내기
    send(url, data);
    // 데이터 받아서 return하기
    return read(data);
}

const responseData = makeRequest('https://www.naver.com', 'my data'); 
console.log(responseData);