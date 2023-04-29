// Lv. 0 A 강조하기

/**
 * @param {string} myString 문자열
 * @returns {string} myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환
 */

const solution = (myString) => {
    return [...myString]
        .map((v) =>
            v === "a" || v === "A" ? v.toUpperCase() : v.toLowerCase()
        )
        .join("");
};

// test cases
console.log(solution("abstract algebra")); // "AbstrAct AlgebrA"
console.log(solution("PrOgRaMmErS")); // "progrAmmers"
