// Lv. 1 카드 뭉치

/**
 * @param {string[]} cards1 문자열로 이루어진 배열
 * @param {string[]} cards2 문자열로 이루어진 배열
 * @param {string[]} goal 원하는 단어 배열
 * @returns {string} `goal`을 만들 수 있다면 `'Yes'`, 없다면 `'No'`
 */

const solution = (cards1, cards2, goal) => {
    let i = 0;
    let j = 0;

    for (const word of goal) {
        if (cards1[i] === word) i++;
        else if (cards2[j] === word) j++;
        else return "No";
    }

    return "Yes";
};

console.log(
    solution(
        ["i", "drink", "water"],
        ["want", "to"],
        ["i", "want", "to", "drink", "water"]
    )
); // Yes
console.log(
    solution(
        ["i", "water", "drink"],
        ["want", "to"],
        ["i", "want", "to", "drink", "water"]
    )
); // No
