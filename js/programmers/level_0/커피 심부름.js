// Lv. 0 커피 심부름

/**
 * @param {string[]} order 각 직원이 적은 메뉴
 * @returns {number} 카페에서 결제하게 될 금액
 */

const solution = (order) => {
    return order.reduce(
        (pre, cur) => pre + (cur.includes("latte") ? 5000 : 4500),
        0
    );
};

// test cases
console.log(
    solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
); // 19000
console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500
