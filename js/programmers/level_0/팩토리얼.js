// Lv. 0 팩토리얼

/**
 * @param {number} n
 * @returns {number}
 */

const solution = (n) => {
    let now = 1;
    let target = n;

    while (now) {
        target /= now;

        if (target > now) now++;
        else break;
    }

    return now;
};
