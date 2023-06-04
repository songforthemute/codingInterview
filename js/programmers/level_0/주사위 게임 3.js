// Lv. 0 주사위 게임 3

/**
 * @param {number} a 네 주사위를 굴렸을 때 나온 숫자
 * @param {number} b 네 주사위를 굴렸을 때 나온 숫자
 * @param {number} c 네 주사위를 굴렸을 때 나온 숫자
 * @param {number} d 네 주사위를 굴렸을 때 나온 숫자
 * @returns {number} 얻는 점수를 return
 */

function solution(a, b, c, d) {
    const map = {};

    for (const arg of arguments) {
        map[arg] ? map[arg]++ : (map[arg] = 1);
    }

    const kinds = Object.entries(map).sort((a, b) => b[1] - a[1]);

    if (kinds.length === 1) return 1111 * a;
    else if (kinds.length === 2) {
        const [p, q] = kinds;
        return p[1] !== q[1]
            ? (10 * +p[0] + +q[0]) ** 2
            : (+p[0] + +q[0]) * Math.abs(+p[0] - +q[0]);
    } else if (kinds.length === 3) {
        const [_, q, r] = kinds.map(([k]) => +k);
        return q * r;
    } else return Math.min(a, b, c, d);
}

// test cases
console.log(solution(2, 2, 2, 2)); // 2222
console.log(solution(4, 1, 4, 4)); // 1681
