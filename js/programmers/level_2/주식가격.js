// Lv.2 주식가격

/**
 * @param {number[]} prices 초 단위로 기록된 주식가격이 담긴 배열
 * @returns {number[]} 각각 가격이 떨어지지 않은 기간이 담긴 배열
 */

function solution(prices) {
    const stack = [],
        res = Array.from(
            { length: prices.length },
            (_, i) => prices.length - i - 1
        ); // 각 자리별 최댓값 설정

    for (let i = 0; i < prices.length; i++) {
        let lastIdx = stack.length ? stack[stack.length - 1] : -1;

        // 현재 가격이 가장 최근의 스택 가격보다 낮다면 == 가격이 떨어짐
        while (prices[lastIdx] > prices[i]) {
            // 떨어지지 않은 기간 ===
            // 기록이 끝난 현재 인덱스 - 기록을 시작한 당시의 인덱스
            res[lastIdx] = i - lastIdx;

            // 스택의 마지막 인덱스 갱신
            stack.pop();
            lastIdx = stack[stack.length - 1];
        }

        // 현재 인덱스를 스택에 삽입해서 기록
        stack.push(i);
    }

    return res;
}
