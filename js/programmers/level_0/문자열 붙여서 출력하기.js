// Lv. 0 문자열 붙여서 출력하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    str1 = input[0];
    str2 = input[1];

    // solution
    console.log(`${str1}${str2}`);
});
