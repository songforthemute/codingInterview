// 287. Find the Duplicate Number

/**
 * @param {number[]} nums
 * @return {number}
 */

const findDuplicate = (nums) => {
    const box = {};

    for (const n of nums) {
        if (!box[n]) box[n] = true;
        else return n;
    }
};
