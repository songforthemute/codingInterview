// 예산
function solution(d, budget) {
    let result = 0;
    let money = budget;
    const items = d.sort((a, b) => a - b);

    for (const item of items) {
        if (money < item) break;
        money -= item;
        result++;
    }

    return result;
}
