// 4. Median of Two Sorted Arrays
const findMedianSortedArrays = (nums1, nums2) => {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);

    return arr.length % 2 !== 0
        ? arr[Math.floor(arr.length / 2)]
        : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
};

// another solution
const findMedianSortedArrays2 = (nums1, nums2) => {
    const result = [];
    const length = nums1.length + nums2.length;

    let p1 = 0,
        p2 = 0;

    while (result.length <= length / 2) {
        if (
            nums1[p1] !== undefined &&
            (nums1[p1] <= nums2[p2] || nums2[p2] === undefined)
        ) {
            result.push(nums1[p1]);
            p1++;
        } else if (
            nums2[p2] !== undefined &&
            (nums1[p1] > nums2[p2] || nums1[p1] === undefined)
        ) {
            result.push(nums2[p2]);
            p2++;
        }
    }

    if (length % 2 !== 0) return result[result.length - 1];
    else return (result[result.length - 1] + result[result.length - 2]) / 2;
};
