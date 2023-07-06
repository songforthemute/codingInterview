// Lv. 2 양궁대회

/**
 * @param {number} n 화살의 개수를 담은 자연수
 * @param {number[]} info 어피치가 맞힌 과녁 점수의 개수를 10점부터 0점까지 순서대로 담은 배열
 * @return {number[]} 라이언이 가장 큰 점수 차이로 우승하기 위해 n발의 화살을 어떤 과녁 점수에 맞혀야 하는지를 10점부터 0점까지 순서대로 담은 배열
 */

const solution = (n, info) => {
    if (n === info[0]) return [-1];

    const { length: len } = info;
    let [result, max] = [[-1], 0];

    const getScore = (idx) => 10 - idx;
    const calcScore = (info, lionInfo) => {
        return info.reduce((pre, cur, idx) => {
            if (cur < lionInfo[idx]) {
                return pre + getScore(idx);
            } else if (!cur && !lionInfo[idx]) {
                return pre;
            } else {
                return pre - getScore(idx);
            }
        }, 0);
    };

    const DFS = (rest, lionInfo, index) => {
        // be used all arrows
        if (!rest) {
            const current = calcScore(info, lionInfo);

            if (max < current) {
                console.log(lionInfo);
                max = current;
                result = lionInfo;
            }

            return;
        }

        // shot from backward
        for (let i = index; i < len; i++) {
            const reverseIdx = 10 - i;
            const copy = [...lionInfo];

            // rest arrows is more than apeach's shot
            if (rest > info[reverseIdx]) {
                copy[reverseIdx] = info[reverseIdx] + 1;
                DFS(rest - copy[reverseIdx], copy, i + 1);
            }
            // not exist rest arrows
            else {
                copy[len - 1] += rest;
                DFS(0, copy, i + 1);
            }
        }

        // clearing the rest arrows
        const copy = [...lionInfo];
        copy[len - 1] += rest;
        DFS(0, copy, 0);
    };

    DFS(
        n,
        Array.from(Array(len), () => 0),
        0
    );

    return result;
};

// Test Cases
console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])); // [0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])); // [1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])); // [1,1,1,1,1,1,1,1,0,0,2]
