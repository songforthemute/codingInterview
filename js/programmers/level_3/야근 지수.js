// Lv. 3 야근 지수

/**
 * @function solution
 *  야근 피로도 = 야근을 시작한 시점에서 남은 일의 작업량을 제곱하여 더한 값
 *  1시간 => 1 work
 * @param {number} n 퇴근까지 남은 시간
 * @param {number[]} works 각 일에 대한 작업량
 * @return {number} 야근 피로도를 최소한 값을 리턴.
 */

const solution = (n, works) => {
    let reserve = n;
    const willProcess = [...works].sort((a, b) => a - b);

    const bubbleUp = () => {
        let newIndex = willProcess.length - 1;
        let prevIndex = newIndex - 1;

        while (willProcess[prevIndex] !== undefined) {
            if (willProcess[newIndex] >= willProcess[prevIndex]) break;

            [willProcess[newIndex], willProcess[prevIndex]] = [
                willProcess[prevIndex],
                willProcess[newIndex],
            ];
            newIndex--;
            prevIndex--;
        }
    };

    while (reserve !== 0 && willProcess[willProcess.length - 1] !== 0) {
        willProcess[willProcess.length - 1]--;
        reserve--;

        bubbleUp();
    }

    return willProcess.reduce((prev, curr) => prev + curr ** 2, 0);
};
