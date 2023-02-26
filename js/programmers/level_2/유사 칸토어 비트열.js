// Lv. 2 유사 칸토어 비트열

/**
 * @param {number} n `n`번째 유사 칸토어 비트열
 * @param {number} l 1의 개수가 몇 개인지 알고 싶은 구간을 나타내는 l
 * @param {number} r 1의 개수가 몇 개인지 알고 싶은 구간을 나타내는 r
 * @returns {number} 해당 구간 내의 1의 개수
 */

/**
 * 0 => 1
 *
 * 1 => 11011
 *
 * 2 => 11011 11011 00000 11011 11011
 *
 * 3 => 11011 11011 00000 11011 11011
 *      11011 11011 00000 11011 11011
 *      00000 00000 00000 00000 00000
 *      11011 11011 00000 11011 11011
 *      11011 11011 00000 11011 11011
 *
 * 1 1 0 1 1 | number
 * 1 2 3 4 5 | index
 * 1 2 2 3 4 | cumulative by index
 */

const solution = (n, l, r) => {
    const recursive = (index) => {
        if (index <= 5) return index < 3 ? index : index - 1;

        let power = 0;

        while (index > 5 ** (power + 1)) power++;

        const quotient = Math.floor(index / 5 ** power); // calculate how much add
        const rest = quotient !== 2 ? index % 5 ** power : 0; // 11 '0' 11 => Zero All

        return quotient > 2
            ? recursive(rest) + (quotient - 1) * 4 ** power
            : recursive(rest) + quotient * 4 ** power;
    };

    return recursive(r) - recursive(l - 1);
};

// test cases
console.log(solution(2, 4, 17)); // 8
