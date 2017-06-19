# zbapi
## 사용한 서버
AWS ec2
## 사용한 언어
Node.js
## 버전
v6.9.4
## 외부 라이브러리 & 설치 명령어
- express: npm install express --save
- body-parser: npm install body-parser --save
- mysql2: npm install mysql2 --save
- sequelize: npm install sequelize --sae
## 데이터 베이스 테이블 생성 스크립트
####데이터베이스 생성
CREATE DATABASE zigbang;
####테이블 생성
CREATE TABLE items
(
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 lat DOUBLE NOT NULL,
 lng DOUBLE NOT NULL,
 type VARCHAR(50) NOT NULL,
 rent INT NOT NULL,
 deposit INT NOT NULL,
 description VARCHAR(1000) NOT NULL,
 updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
 createdAt TIMESTAMP NOT NULL DEFAULT NOW()
);

## 예제 데이터 입력 요청문 API
curl --header "Content-Type: application/json" -X POST 'http://13.124.133.50:3000/item' -d '{"name":"테스트 방", "lat":37.5684661865234, "lng":126.916000366211, "type":"원룸오픈", "rent":65, "deposit":3000, "description": "아주 좋은 방입니다." }'; 

## 예제 요청 url
http://13.124.133.50:3000/items?lat_south=37.59488769327475&lat_north=37.62870260296439&lng_west=126.92725908554034&lng_east=126.94544226205922&type=[원룸오픈,원룸분리,투룸,쓰리룸,오피스텔]
