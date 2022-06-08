// 위장
function solution(wears) {
    let answer = 0;
    const itemSet = {};
    const clothesCount = [];

    for (const wear of wears) {
        if (!itemSet[wear[1]]) itemSet[wear[1]] = [];
        itemSet[wear[1]].push(wear[0]);
    }

    for (const item in itemSet) clothesCount.push(itemSet[item].length + 1);

    answer = clothesCount.reduce((prev, current) => prev * current, 1);

    return answer - 1;
}
