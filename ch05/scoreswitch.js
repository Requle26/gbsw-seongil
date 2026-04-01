const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. : ", function (score) {
    // 100 ~ 91 점 - A학점
    // 81 ~ 90 점 - B학점
    // 71 ~ 80 점 - C학점
    // 61 ~ 70 점 - D학점
    // 0 ~ 60 점 - F학점
    // 그 외 - 범위를 벗어났습니다
    switch (parseInt(score)) {
        case score>=90:
            console.log("A학점");
            break;
        case score>=80:
            console.log("B학점");
            break;
        case score>=70:
            console.log("C학점");
            break;
        case score>=60:
            console.log("D학점");
            break;
        case score>=0:
            console.log("F학점");
            break;
        default :
            console.log("범위를 벗어났습니다.");
            break;
    }
    rl.close()
});