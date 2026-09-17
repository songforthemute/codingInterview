// 836. Rectangle Overlap

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    /**
     * [x1, y1, x2, y2]
     *  [x1, y1] == 왼쪽 아래 모서리
     *  [x2, y2] == 오른쪽 위 모서리
     * 
     * 두 직사각형이 교차하는 면적이 양수 === 겹친다
     * 
     * 겹치는 조건을 검사하는 법?
     * rec1.x1 < rec2.x2 && rec1.x2 > rec2.x1
     * && rec1.y1 < rec2.y2 && rec1.y2 > rec2.y1
     * 
     */

    return (
        // X축(가로) 1D 선분 겹침
        rec1[0] < rec2[2] && rec1[2] > rec2[0] &&
        // Y축(세로) 1D 선분 겹침
        rec1[1] < rec2[3] && rec1[3] > rec2[1]
    )
};

// Test Cases
console.log(
    isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]) // true
)


console.log(
    isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]) // false
)

console.log(
    isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]) // false
)