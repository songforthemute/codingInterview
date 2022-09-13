// 350. Intersection of Twe Arrays II

const intersect = (nums1, nums2) => {
    const obj = {};
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        if (obj[nums1[i]]) obj[nums1[i]].push(nums1[i]);
        else {
            obj[nums1[i]] = [nums1[i]];
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (obj[nums2[i]] && obj[nums2[i]].length) {
            result.push(nums2[i]);
            obj[nums2[i]].pop();
        }
    }

    return result;
};
