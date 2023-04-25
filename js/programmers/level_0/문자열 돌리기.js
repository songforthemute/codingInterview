// Lv. 0 문자열 돌리기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = [line];
}).on("close", function () {
    str = input[0];

    // solution
    [...str].forEach((v) => console.log(v));
});
