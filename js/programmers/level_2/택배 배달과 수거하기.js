// Lv. 2 택배 배달과 수거하기

/**
 * @param {number} cap 트럭에 실을 수 있는 재활용 택배 상자의 최대 개수
 * @param {number} n 배달할 집의 개수
 * @param {number[]} deliveries 각 집에 배달할 재활용 택배 상자의 개수
 * @param {number[]} pickups 각 집에서 수거할 빈 재활용 택배 상자의 개수
 * @returns {number} 트럭 하나로 모든 배달과 수거를 마치고 물류 창고까지 돌아올 수 있는 최소 이동 거리
 */

const solution = (cap, n, deliveries, pickups) => {
    let distance = 0;

    const getFarthest = (array) => array[array.length - 1];
    const isClear = (array) =>
        array.length !== 0 && array[array.length - 1] === 0;

    while (isClear(deliveries)) deliveries.pop();
    while (isClear(pickups)) pickups.pop();
    while (deliveries.length || pickups.length) {
        distance += Math.max(deliveries.length, pickups.length) * 2;

        // 배달
        let loads = 0;
        while (deliveries.length > 0 && loads <= cap) {
            // 가장 먼 집의 배달량을 포함하는 현재 적재량이 한도 초과일 경우
            if (getFarthest(deliveries) + loads > cap) {
                deliveries[deliveries.length - 1] -= cap - loads;
                break;
            }
            // 가장 먼 집의 배달량을 포함할 수 있는 경우
            loads += getFarthest(deliveries);
            deliveries.pop();
        }

        // 수거
        loads = 0;
        while (pickups.length > 0 && loads <= cap) {
            // 가장 먼 집의 수거량을 포함하는 현재 적재량이 한도 초과일 경우
            if (getFarthest(pickups) + loads > cap) {
                pickups[pickups.length - 1] -= cap - loads;
                break;
            }
            // 가장 먼 집의 수거량을 포함할 수 있는 경우
            loads += getFarthest(pickups);
            pickups.pop();
        }
    }

    return distance;
};

// 테스트케이스
console.log(solution(2, 2, [1, 0], [0, 0])); // 2
console.log(solution(2, 2, [1, 0], [1, 0])); // 2
console.log(solution(2, 2, [0, 0], [0, 0])); // 0
console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); // 16
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])); // 30
