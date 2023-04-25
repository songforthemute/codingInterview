// Lv. 0 a와 b 출력하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    // solution
    console.log("a =", Number(input[0]));
    console.log("b =", Number(input[1]));
});
