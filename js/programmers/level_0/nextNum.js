// Lv. 0 다음에 올 숫자

/**
 * @param {number[]} common
 * @return {number}
 */

const solution = (common) => {
    const [first, second, third, ...rest] = common;
    const isAdd = second - first === third - second;

    return isAdd
        ? first + (second - first) * common.length
        : first * (second / first) ** common.length;
};
