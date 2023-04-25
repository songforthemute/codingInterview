// Lv. 0 대소문자 바꿔서 출력하기

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
    console.log(
        [...str]
            .map((v) =>
                v.charCodeAt(0) > 90 ? v.toUpperCase() : v.toLowerCase()
            )
            .join("")
    );
});
