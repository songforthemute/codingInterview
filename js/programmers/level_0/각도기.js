// Lv. 0 각도기

/**
 * @param {number} angle
 * @return {number}
 */

const solution = (angle) => {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
};
