// Lv. 0 특수문자 출력하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("close", function () {
    console.log("!@#$%^&*(\\'\"<>?:;");
});
