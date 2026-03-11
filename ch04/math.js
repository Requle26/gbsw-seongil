// 산술 연산자 실습
const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 피연산자 하나가 String인 경우
const str = "hi";
const numStr = "10";

console.log(str + b);
console.log(numStr + b);

// 이외의 연산자는 Number로 형변환해 연산을 시도한다.
console.log(numStr - b);
console.log(numStr * b);
console.log(numStr / b);
console.log(numStr % b);
console.log(numStr ** b);

// Number로 형변환 실패 시 NaN(Not a Number) 변환
console.log(str / b)
