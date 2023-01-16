// Lv. 2 주차 요금 계산

/**
 *
 * @param {number[]} fees [기본 시간(분), 기본 요금(원), 단위 시간(분), 단위 요금(원)]
 * @param {string[]} records "시각(시:분) 차량번호 내역"
 * @returns {number[]} 차량번호가 작은 자동차부터 청구할 주차 요금을 차례 대료 정수 배열에 담아서 반환
 */

function solution(fees, records) {
    const [regTime, regFee, unitTime, unitFee] = fees;
    const rec = records.map((v) => v.split(" "));
    const list = {};
    const result = [];

    for (const r of rec) {
        if (!list[r[1]]) list[r[1]] = [r[0]];
        else list[r[1]].push(r[0]);
    }

    for (const t in list) {
        let car = list[t].map((v) => v.split(":"));
        let fee = [t, 0];
        let parkingTime = 0;

        for (let i = 1; i < car.length; i += 2) {
            parkingTime +=
                Number(car[i][0]) * 60 +
                Number(car[i][1]) -
                (Number(car[i - 1][0]) * 60 + Number(car[i - 1][1]));
        }

        if (car.length % 2 !== 0) {
            parkingTime +=
                23 * 60 +
                59 -
                (Number(car[car.length - 1][0]) * 60 +
                    Number(car[car.length - 1][1]));
        }

        fee[1] += regFee;

        if (parkingTime > regTime) {
            fee[1] += Math.ceil((parkingTime - regTime) / unitTime) * unitFee;
        }

        result.push(fee);
    }

    return result.sort((a, b) => Number(a[0]) - Number(b[0])).map((v) => v[1]);
}
