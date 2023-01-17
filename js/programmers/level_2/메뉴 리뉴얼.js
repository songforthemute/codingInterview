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
    let maxFreq = 2;

    // Filter char being found more than twice
    orders.forEach((order) => {
        for (let i = 0; i < order.length; i++) {
            // If unregistered char
            if (!charMap.get(order[i])) {
                charMap.set(order[i], 1);
            }
            // Add to charList if this char being found more than twice
            else if (charMap.get(order[i]) === 1) {
                charMap.set(order[i], 2);
                charList.push(order[i]);
            }
        }
    });

    // Ordering charList
    charList.sort();

    // Define DFS
    const DFS = (str = "", idx = 0, len = 0) => {
        if (str.length === len) {
            let count = 0;

            // Check this combination
            orders.forEach((order) => {
                for (let i = 0; i < str.length; i++) {
                    // Jump this order if can't find this combination
                    if (!order.includes(str[i])) return;
                }
                // If found this combination
                count++;
            });

            // If this combination is equal to maximum frequency
            if (count === maxFreq) buffer.push(str);
            // If renewed maximum frequency on same length
            else if (count > maxFreq) {
                buffer = [str];
                maxFreq = count;
            }

            return;
        }

        for (let i = idx; i < charList.length; i++) {
            // If searchable length shortter than required length
            if (len - str.length > charList.length - i) break;

            // Recursion till required length
            DFS(str + charList[i], i + 1, len);
        }
    };

    course.forEach((len) => {
        if (len <= charList.length) {
            DFS("", 0, len);

            if (buffer.length) {
                result.push(...buffer);
                buffer = [];
                maxFreq = 2;
            }
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
