// 454. 4Sum II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

const fourSumCount = (nums1, nums2, nums3, nums4) => {
    let result = 0;
    const map = {};

    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const current = n1 + n2;

            if (!map[current]) map[current] = 1;
            else map[current]++;
        }
    }

    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const current = n3 + n4;

            if (map[-current]) result += map[-current];
        }
    }

    return result;
};
