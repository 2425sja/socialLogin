### 필요한 extension (정말 최소한만 받음)

- express
- babel
- node-fetch : ! 꼭 버전2로 받아야 합니다 명령어: npm i node-fetch@2 !
- nodemon
  <br>
  <br>
  <br>

### 1. 네이버 소셜로그인 구현: https://developers.naver.com/docs/login/api/api.md

- 위의 주소에 나와있는 Node.js 코드를 "최소한"으로 수정해서 소셜 로그인을 구현했습니다.
- 최소한의 수정을 했기 때문에 코드를 refactoring 해서 본인 프로젝트에 맞게 적용하시면 됩니다.
  <br>
  <br>

# 파일 설명

### [access_token 발급] 2_Nlogin_accessToken.js

- 원본 : 1_Ncode_Original.js
- 원본 코드가 실행되게 수정한 것: 2_Nlogin_accessToken.js
  <br>(실행: npm run dev2)
- 사용자 정보 받아오는 완성된 코드: 3_Nlogin_final.js
  <br>(실행: npm run dev3)

<br><br>

### [소셜로그인 완성] 3_Nlogin_final.js

- 사용자 정보까지 받아오는 완성된 코드를 작성하고 싶다면 아래 과정을 하나 더 거쳐야 합니다. --> 이것까지 작성한게 3_Nlogin_final.js 입니다.
- 자세한 내용은 아래에 주소에서 "3.4.5 접근 토큰을 이용하여 프로필 API 호출하기"를 확인
  https://developers.naver.com/docs/login/devguide/devguide.md

<br><br>

### 단계별로 npm run dev를 두개로 구별했습니다.

- npm run dev2 : 2단계까지 구현된 소셜로그인(access_token 발급)
- npm run dev3 : 3단계까지 구현된 소셜로그인(사용자 정보 콘솔로 받음)
  <br><br> <br><br>

### 자세한 포스팅은 아래 글을 참고해주세요.

- 네이버 로그인: https://koreankoder.tistory.com/14
- 소셜로그인 기본 원리: https://koreankoder.tistory.com/9
