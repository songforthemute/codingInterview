// 4. Median of Two Sorted Arrays
const findMedianSortedArrays1 = (nums1, nums2) => {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);

    return arr.length % 2 !== 0
        ? arr[Math.floor(arr.length / 2)]
        : (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
};
