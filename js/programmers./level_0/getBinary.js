// Lv. 0 이진수 더하기

/**
 * @param {string} bin1
 * @param {string} bin2
 * @return {string}
 */

const solution = (bin1, bin2) => {
    let n1 = parseInt(bin1, 2);
    let n2 = parseInt(bin2, 2);

    return (n1 + n2).toString(2);
};
