// Lv. 2 수식 최대화

/**
 * @param {string} expression 참가자에게 주어진 연산 수식이 담긴 문자열
 * @return {number} 우승 시 받을 수 있는 가장 큰 상금 금액
 */

const solution = (expression) => {
    let set = new Set();
    let splited = [];
    let permutation = [];
    let temp = "";
    let max = -1;

    // split the expression
    for (const char of expression) {
        if (char === "+" || char === "-" || char === "*") {
            splited.push(parseInt(temp), char);
            set.add(char);
            temp = "";
        } else {
            temp += char;
        }
    }

    // clear rest temp string
    if (temp.length) splited.push(parseInt(temp));

    const permute = (current = [], rest = []) => {
        if (current.length === set.size) {
            permutation.push(current);
            return;
        }

        for (let i = 0; i < rest.length; i++) {
            permute(
                [...current, rest[i]],
                [...rest.slice(0, i), ...rest.slice(i + 1)]
            );
        }
    };

    permute([], [...set]);

    for (const operators of permutation) {
        let temp = [...splited];

        for (const operator of operators) {
            for (let i = 0; i < temp.length; i++) {
                if (temp[i] === operator) {
                    let val;

                    if (temp[i] === "+") val = temp[i - 1] + temp[i + 1];
                    else if (temp[i] === "*") val = temp[i - 1] * temp[i + 1];
                    else if (temp[i] === "-") val = temp[i - 1] - temp[i + 1];

                    temp.splice(i - 1, 3, val);
                    i--;
                }
            }
        }

        max = Math.max(max, Math.abs(temp[0]));
    }

    return max;
};

// 테스트 케이스들
console.log(solution("100-200*300-500+20")); // 60420
console.log(solution("50*6-3*2")); // 300
