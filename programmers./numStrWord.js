// 숫자 문자열과 영단어
function solution(s) {
    let result = s;
    const word = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    for (let i = 0; i < word.length; i++) {
        let temp = result.split(word[i]);
        result = temp.join(i);
    }

    return Number(result);
}
