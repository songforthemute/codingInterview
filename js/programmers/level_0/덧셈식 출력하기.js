// Lv. 0 부분 문자열

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
    console.log(`${input[0]} + ${input[1]} = ${+input[0] + +input[1]}`);
});
