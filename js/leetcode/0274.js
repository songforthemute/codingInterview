// 274. H-Index - Medium

/**
 *
 * @param {number[]} citations
 * @returns {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => b - a);

    let left = 0;
    let right = citations.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // citations[mid]: 피인용 횟수
        // mid + 1: 논문 편수
        // 논문 편수(인덱스 + 1)가 피인용 횟수와 같아야 한다
        if (citations[mid] === mid + 1) {
            return mid + 1;
        }

        citations[mid] > mid ? (left = mid + 1) : (right = mid - 1);
    }

    return left;
};
