// Lv. 4 쿠키 구입

/**
 *
 * @param {number[]} cookie
 * @returns {number}
 */

function solution(cookie) {
    let max = 0;

    const sum = (...args) => {
        return args.reduceRight((pre, cur) => pre + cur, 0);
    };

    // 인덱스를 중심 축으로 이용하는 이진탐색
    // left: ?? ~ i
    // right: i + 1 ~ ??
    cookie.forEach((_, i) => {
        let lSum = sum(...cookie.slice(0, i + 1)),
            rSum = sum(...cookie.slice(i + 1));

        let lp = 0,
            rp = cookie.length - 1;

        while (lp !== rp && lSum !== 0 && rSum !== 0) {
            // binary search
            if (lSum === rSum) {
                max = Math.max(max, lSum);
                return;
            } else if (lSum < rSum) {
                rSum -= cookie[rp--];
            } else {
                lSum -= cookie[lp++];
            }
        }
    });

    return max;
}
