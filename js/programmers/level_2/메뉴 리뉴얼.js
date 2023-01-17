// Lv. 2 메뉴 리뉴얼

/**
 * @param {string[]} orders 각 손님들이 주문한 단품메뉴들이 담긴 문자열 배열
 * @param {number[]} course 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열
 * @return {string[]} 새로 추가하게 될 코스요리의 메뉴 구성
 */

const solution = (orders, course) => {
    const result = [];
    const charMap = new Map();
    const charList = [];

    let buffer = [];
    let max = 2;

    orders.forEach((str) => {
        for (let i = 0; i < str.length; i++) {
            if (charMap.has(str[i]))
                charMap.set(str[i], charMap.get(str[i]) + 1);
            else charMap.set(str[i], 1);
        }
    });

    charMap.forEach((count, char) => {
        if (count >= 2) charList.push(char);
    });

    charList.sort();

    const DFS = (arr = [], idx = 0, len = 0) => {
        if (arr.length === len) {
            let count = 0;

            orders.forEach((order) => {
                for (const char of arr) {
                    if (!order.includes(char)) return;
                }
                count++;
            });

            if (count >= max) {
                buffer.push([arr.join(""), count]);
                if (max < count) max = count;
            }
            return;
        }

        for (let i = idx; i < charList.length; i++) {
            DFS([...arr, charList[i]], i + 1, len);
        }
    };

    course.forEach((len) => {
        if (len <= charList.length) {
            DFS([], 0, len);
        }

        if (buffer.length) {
            buffer.forEach(([str, count]) => {
                if (count === max) result.push(str);
            });

            buffer = [];
            max = 2;
        }
    });

    return result.sort();
};

// 테스트 케이스
console.log(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(
    solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]
