// Lv. 0 문자열 출력하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = [line];
}).on("close", function () {
    // solution
    console.log(input[0]);
});
