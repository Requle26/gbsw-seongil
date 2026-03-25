// 2중 for 문을 사용해 2단 ~ 9단 구구단을 출력하세요
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j<=9; j++) {
        console.log(i, 'X', j, '=', i*j);
    }
}

//-----------------------------------------

let i = 2
let j = 1
while (i <= 9) {
    while (j <= 9) {
        console.log(i, 'X', j, '=', i*j)
        j++;
    }
    i++;
    j = 1
}
