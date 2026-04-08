// 배열 내 원소들의 총합 구해서 출력하기
// 함수 정의 및 호출
// function 함수명(인자1, 인자2) {
//     console.log(num1);
//     return 
// }

function times(num1) {
    return num1 * 2;
}

// 변수에 함수 변환값을 할당 가능하다.
let result = times(3);
console.log(result);


const arr = [1, 4, 2, 8, 11, 5];
let sum = 0;

// push는 배열의 마지막 부분에 요소를 추가한다
arr.push(15);



for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}