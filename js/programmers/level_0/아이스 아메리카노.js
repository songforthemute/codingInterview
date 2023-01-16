// Lv. 0 아이스 아메리카노

/**
 * @param {number} money
 * @return {number[]}
 */

const solution = (money) => {
    return [Math.floor(money / 5500), money % 5500];
};
