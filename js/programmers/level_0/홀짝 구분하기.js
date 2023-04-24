// Lv. 0 주사위 게임 1

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    n = Number(input[0]);
    // solution
    console.log(n + " is " + (n % 2 ? "odd" : "even"));
});
