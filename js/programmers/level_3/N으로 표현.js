// Lv. 3 N으로 표현

/**
 * @param {number} N 1 이상 9 이하의 숫자
 * @param {number} number 1 이상 32,000 이하의 숫자
 * @return {number} N과 사칙연산만 사용해서 표현할 수 있는 방법 중 N 사용횟수의 최솟값
 */

const solution = (N, number) => {
    if (N === number) return 1;

    // Init - set array for dp
    const set = Array.from(Array(8), () => new Set());

    for (let i = 0; i < 8; i++) {
        set[i].add(+`${N}`.repeat(i + 1)); // duplicate N only

        // (a - b) !== (b - a), so (0, 7), (1, 6), ... (7, 0)
        for (let j = 0; j < i; j++) {
            for (const n1 of set[j]) {
                for (const n2 of set[i - j - 1]) {
                    // cuz dynamic array(set[j]), so under statement is not appropriate.
                    // set[i].add(n1 + n2, n1 - n2, n1 * n2, Math.floor(n1 / n2));
                    set[i].add(n1 + n2);
                    set[i].add(n1 - n2);
                    set[i].add(n1 * n2);
                    set[i].add(Math.floor(n1 / n2));
                }
            }
        }

        // found it
        if (set[i].has(number)) return i + 1;
    }

    return -1;
};

console.log(solution(5, 12));
