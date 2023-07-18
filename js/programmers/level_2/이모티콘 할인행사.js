// Lv.2 이모티콘 할인행사

/**
 * @param {number[][]} users [비율, 가격][]
 * @param {number[]} emoticons i+1번 이모티콘의 정가[]
 * @returns {number[]} [이모티콘 플러스 서비스 가입자, 이모티콘 매출액]
 */

function solution(users, emoticons) {
    const disRatios = [10, 20, 30, 40];
    const combinations = [];

    // Get all combinations of discount ratios
    (function combinate(arr = []) {
        if (arr.length === emoticons.length) {
            combinations.push(arr);
            return;
        }

        for (let i = 0; i < disRatios.length; i++) {
            combinate([...arr, disRatios[i]]);
        }
    })();

    let [maxRegistered, maxEarning] = [0, 0]; // [registered, earning]
    const applyDis = (price, ratio) => price - price * (ratio * 0.01);

    combinations.forEach((comb) => {
        // [discount ratio, applied price][]
        const currEmoji = emoticons.map((emoji, i) => [
            comb[i],
            applyDis(emoji, comb[i]),
        ]);

        let [registered, earning] = [0, 0];

        // apply && calculate current
        users.forEach(([userRatio, userMoney]) => {
            const totalPurchased = currEmoji.reduce((pre, [ratio, price]) => {
                return pre + (ratio >= userRatio ? price : 0);
            }, 0);

            // condition: register the service
            if (totalPurchased >= userMoney) registered++;
            else earning += totalPurchased;
        });

        if (maxRegistered < registered) {
            maxRegistered = registered;
            maxEarning = earning;
        } else if (maxRegistered === registered) {
            maxEarning = Math.max(maxEarning, earning);
        }
    });

    return [maxRegistered, maxEarning];
}

// Test Cases
console.log(
    solution(
        [
            [40, 10000],
            [25, 10000],
        ],
        [7000, 9000]
    )
); // [1,5400]

console.log(
    solution(
        [
            [40, 2900],
            [23, 10000],
            [11, 5200],
            [5, 5900],
            [40, 3100],
            [27, 9200],
            [32, 6900],
        ],
        [1300, 1500, 1600, 4900]
    )
); // [4,13860]
