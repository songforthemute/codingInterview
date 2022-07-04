// 소수 찾기
function solution(numbers) {
    const set = new Set();

    const DFS = (data, n) => {
        const result = [];
        if (n === 1) return data.map((e) => [e]);

        data.forEach((dataVal, dataIdx, dataSet) => {
            const rest = dataSet.filter((val, idx) => idx !== dataIdx);
            DFS(rest, n - 1)
                .map((value) => dataVal + value)
                .forEach((v) => result.push(v));
        });

        return result;
    };

    const isPrime = (n) => {
        if (n <= 1) return false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }

        return n >= 2;
    };

    for (let i = 1; i <= numbers.length; i++) {
        const now = DFS([...numbers], i)
            .flat()
            .map((v) => parseInt(v));

        for (const e of now) set.add(e);
    }

    return [...set].filter((v) => isPrime(v)).length;
}
