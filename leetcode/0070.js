// 70. Climbing Stairs
const climbStairs = (n) => {
    if (n <= 2) return n;

    // 상향식
    const stairs = new Array(n + 1).fill(1, 0, 2).fill(2, 2, 3);
    let p = 3;

    while (p <= n) {
        stairs[p] = stairs[p - 1] + stairs[p - 2];
        p++;
    }

    return stairs[n];

    // 하향식
    // const helper = (num) => {
    //     if (num === 1) return 1;
    //     if (num === 2) return 2;

    //     return helper(num - 1) + helper(num - 2);
    // };

    // return helper(n);
};
