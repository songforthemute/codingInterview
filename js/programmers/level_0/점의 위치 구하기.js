// Lv. 0 점의 위치 구하기

/**
 * @param {number[]} dot
 * @returns {number}
 */

const solution = (dot) => {
    if (dot[0] > 0) {
        if (dot[1] > 0) return 1;
        else return 4;
    } else {
        if (dot[1] > 0) return 2;
        else return 3;
    }
};
