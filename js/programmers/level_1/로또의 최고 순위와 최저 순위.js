// Lv. 1 로또의 최고 순위와 최저 순위

/**
 *
 * @param {number[]} lottos
 * @param {number[]} win_nums
 * @returns {[number, number]}
 */

function solution(lottos, win_nums) {
    let min = 0;
    let chance = 0;
    const result = [];

    for (const lotto of lottos) {
        if (win_nums.includes(lotto)) min++;
        if (lotto === 0) chance++;
    }

    switch (chance + min) {
        case 6:
            result.push(1);
            break;
        case 5:
            result.push(2);
            break;
        case 4:
            result.push(3);
            break;
        case 3:
            result.push(4);
            break;
        case 2:
            result.push(5);
            break;
        default:
            result.push(6);
    }

    switch (min) {
        case 6:
            result.push(1);
            break;
        case 5:
            result.push(2);
            break;
        case 4:
            result.push(3);
            break;
        case 3:
            result.push(4);
            break;
        case 2:
            result.push(5);
            break;
        default:
            result.push(6);
    }

    return result;
}
