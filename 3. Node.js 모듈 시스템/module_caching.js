const { hello1 } = require('./my_module');
const { hello2 } = require('./my_module');

console.log('we are in https.js');
/**
 * we are in my_module.js <-- 결과가 2번 호출되지 않는다.
 * we are in https.js
 */

console.log(require.cache);
/*
[Object: null prototype] {
  'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\module_caching.js': Module {
    '9': [Function: internalRequire],
    id: '.',
    path: 'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템',
    exports: {},
    filename: 'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\module_caching.js',
    loaded: false, <----------------- 처음 불러오기 때문에 false
    children: [ [Module] ],
    paths: [
      'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\node_modules',
      'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\node_modules',
      'd:\\dev_yoon\\study_nodejs\\node_modules',
      'd:\\dev_yoon\\node_modules',
      'd:\\node_modules'
    ]
  },
  'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\my_module.js': Module {
    '9': [Function: internalRequire],
    id: 'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\my_module.js',
    path: 'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템',
    exports: { hello1: [Function: hello1], hello2: [Function: hello2] },
    filename: 'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\my_module.js',
    loaded: true, <----------------- 이미 불러와져 있다는 뜻
    children: [],
    paths: [
      'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\3. Node.js 모듈 시스템\\node_modules',
      'd:\\dev_yoon\\study_nodejs\\study_nodejs_basic\\node_modules',
      'd:\\dev_yoon\\study_nodejs\\node_modules',
      'd:\\dev_yoon\\node_modules',
      'd:\\node_modules'
    ]
  }
}
*/