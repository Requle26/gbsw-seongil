const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("단 수를 입력하세요. : ", function (dan) {
    for (let num = 1; num < 10; num++) {
        let resolt = dan * num
        console.log(parseInt(dan), 'X', num, '=', resolt)
    }
    rl.close()
});