// 28. Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    /**
        한 번만 찾아서 자르면 되는데
        슬라이딩 윈도우가 적절해보임
        그런데 그럼 넣고 빼고 비용이 너무 비싼데?
     */

    
    let left = 0, right = needle.length;

    while (right <= haystack.length) {
        const cand = haystack.slice(left, right);

        if (cand === needle) {
            return left;
        } else {
            left++, right++;
        }
    }

    return -1;
};
