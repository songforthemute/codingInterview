// Lv. 0 세 개의 구분자

/**
 * @param {number[]} myStr 문자열
 * @returns {number[]} "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return
 */

const solution = (myStr) => {
    const result = myStr.split(/[a|b|c]+/).filter((v) => v.length);

    return result.length ? result : ["EMPTY"];
};

// test cases
console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("abcd")); // ["d"]
console.log(solution("cabab")); // ["EMPTY"]
