// 다리를 지나는 트럭
function solution(bridge_length, limit, truck_weights) {
    let count = 0;
    let nowWeigth = 0;
    const onBridge = [];
    const trucks = [...truck_weights];

    while (trucks.length + onBridge.length !== 0) {
        if (onBridge[0] && onBridge[0][1] === bridge_length) {
            nowWeigth -= onBridge[0][0];
            onBridge.shift();
        }

        if (nowWeigth + trucks[0] <= limit && trucks[0]) {
            nowWeigth += trucks[0];
            onBridge.push([trucks[0], 0]);
            trucks.shift();
        }

        onBridge.forEach((elem) => elem[1]++);
        count++;
    }

    return count;
}
