// 모음 사전
function solution(word) {
    let result = 0;
    let total = 0;

    for (let i = 1; i <= 5; i++) total += 5 ** i;

    for (let i = 1; i <= word.length; i++) {
        if (word[i - 1] == "A") result++;
        else if (word[i - 1] == "E")
            result += Math.floor(total / 5 ** i) * 1 + 1;
        else if (word[i - 1] == "I")
            result += Math.floor(total / 5 ** i) * 2 + 1;
        else if (word[i - 1] == "O")
            result += Math.floor(total / 5 ** i) * 3 + 1;
        else if (word[i - 1] == "U")
            result += Math.floor(total / 5 ** i) * 4 + 1;
    }

    return result;
}
