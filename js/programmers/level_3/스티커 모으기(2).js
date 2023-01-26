// Lv. 3 스티커 모으기(2)

/**
 * @param {number[]} sticker 원형으로 연결된 스티커의 각 칸에 적힌 숫자가 순서대로 들어있는 배열
 * @return {number} 스티커를 뜯어내어 얻을 수 있는 숫자의 합의 최댓값
 */

const solution = (sticker) => {
    if (sticker.length < 3) return Math.max(...sticker);

    const dp0 = [...sticker];
    const dp1 = [...sticker.reverse()];

    for (let i = 1; i < sticker.length - 1; i++) {
        dp0[i] = Math.max(dp0[i - 1], (dp0[i - 2] || 0) + dp0[i]);
        dp1[i] = Math.max(dp1[i - 1], (dp1[i - 2] || 0) + dp1[i]);
    }

    return Math.max(dp0[dp0.length - 2], dp1[dp1.length - 2]);
};

// test cases
console.log(solution([14, 6, 5, 11, 3, 9, 2, 10])); // 36
console.log(solution([1, 3, 2, 5, 4])); // 8
console.log(solution([5, 1, 16, 17, 16])); // 32
