// Lv. 0 옷가게 할인 받기

/**
 * @param {number} price
 * @returns {number}
 */

const solution = (price) => {
    return price >= 500000
        ? Math.floor(price * 0.8)
        : price >= 300000
        ? Math.floor(price * 0.9)
        : price >= 100000
        ? Math.floor(price * 0.95)
        : price;
};
