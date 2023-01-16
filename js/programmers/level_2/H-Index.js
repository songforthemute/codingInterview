// Lv. 2 H-Index

/**
 *
 * @param {number[]} citations
 * @returns {number}
 */

function solution(citations) {
    const sorted = citations.sort((a, b) => b - a);
    let h = 0;

    while (h + 1 <= sorted[h]) {
        h++;
    }

    return h;
}
