# 3. Node.js 모듈 시스템

## 1) 모듈 불러오는 법

```javascript
const module = require('module_name')
```

## 2) 모듈 종류

### (1) Core Module

- Node.js에 기본적으로 제공하는 모듈 예시

1. `http` - http 서버를 생성하기 위한 클래스, 메서드, 이벤트 포함
2. `url` - URL 확인 및 구분 분석
3. `querystring` - 쿼리 문자열 처리
4. `path` - 파일 경로 처리
5. `fs` - 파일 I/O 작업을 위한 클래스, 메서드 및 이벤트 포함
6. `util` - 기타 유틸

### (2) Local Module

- 로컬에서 직접 생성된 모듈
- 예시 코드
    - [모듈](log.js)
    - [사용](local_module_test.js)

### (3) Third Party Module

- NPM(Node Package Manager)을 사용하여 온라인에서 사용할 수 있는 모듈

## 3) 모듈 Exports 방법

- [모듈 exports 방법](exports.js)

## 4) CommonJS와 ECMAScript 모듈의 차이

### CommonJS

- Node.js의 기본값
    - Node.js 13.2 버전부터는 ECMAScript 모듈 지원함
- `module.exports`로 내보내고 `require`로 가져옴
- 예시 코드
    - [모듈1 - request.js](request.js)
    - [모듈2 - response.js](response.js)
    - [사용 - https_common.js](https_common.js)


### ECMAScript 모듈

- Javascript 표준
- `export`로 내보내고 `import`로 가져옴
- 파일 확장자는 `.mjs`로 사용해야함
- 예시 코드
    - [모듈1 - request.mjs](request.mjs)
    - [모듈2 - response.mjs](response.mjs)
    - [사용 - https_ecma.mjs](https_ecma.mjs)

## 5) 모듈 캐싱

- 한번 require 한 모듈은 또 불러오지 않음
- [예시 코드](module_caching.js)

## 6) index.js

- 패키지 모듈들의 진입점을 만들어주는 용도로 사용하는 파일
- [Node.js 개발자 라이언 달의 후회 - index.js 웬만하면 쓰지마세요](https://usage.tistory.com/146)
- [예시 코드](set.js)