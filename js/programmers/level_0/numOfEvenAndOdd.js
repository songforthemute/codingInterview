// Lv. 0 짝수 홀수 개수

/**
 * @param {number[]} num_list
 * @return {number[]}
 */

const solution = (num_list) => {
    let odd = 0;
    let even = 0;

    for (const n of num_list) {
        if (n % 2 === 1) odd++;
        else even++;
    }

    return [even, odd];
};
