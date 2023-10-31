// Lv. 3 인사고과

/**
 *
 * @param {number[][]} scores
 * @returns {number}
 */

function solution(scores) {
    const wanho = scores[0];
    let currRank = 1;

    scores.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]));

    let prev = 0;

    for (const [s1, s2] of scores) {
        if (s1 > wanho[0] && s2 > wanho[1]) return -1;

        // s1은 정렬된 상태 == s2는 이전 항과 같거나 더 크다
        // 근데 이전 항의 s2가 더 크거나 같다면? == 이전 항보다 합이 더 클 가능성이 존재
        // 즉, s2는 점점 커져가야하므로 a[1] - b[1]의 오름차순으로 정렬이 필요.
        if (prev <= s2) {
            if (wanho[0] + wanho[1] < s1 + s2) currRank++;
            prev = s2;
        }
    }

    return currRank;
}

// TEST CASES
console.log(
    solution([
        [2, 2],
        [1, 4],
        [3, 2],
        [3, 2],
        [2, 1],
    ])
); // 4

console.log(
    solution([
        [3, 0],
        [3, 1],
        [1, 3],
        [3, 0],
        [3, 4],
    ])
); // 3
