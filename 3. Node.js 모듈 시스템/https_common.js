console.log(module);
/*
Module {
  '9': [Function: internalRequire],
  id: '.',
  path: 'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템',
  exports: {},  <--- 이걸로 모듈을 내보낼 수 있다.
  filename: 'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\https.js',
  loaded: false,
  children: [],
  paths: [
    'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\node_modules',
    'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\node_modules',
    'd:\\dev_yoon\\study_nodejs\\node_modules',
    'd:\\dev_yoon\\node_modules',
    'd:\\node_modules'
  ]
}
*/

console.log(require);
/*
...
아래 확장자들은 자동으로 검색해서 잡음
extensions: [Object: null prototype] {
    '.js': [Function (anonymous)],
    '.json': [Function (anonymous)],
    '.node': [Function (anonymous)]
},
...
*/

const request = require('./request');
const response = require('./response'); 

function makeRequest(url, data) {
    // 요청을 보내기
    request.send(url, data);
    // 데이터 받아서 return하기
    return response.read(data);
}
