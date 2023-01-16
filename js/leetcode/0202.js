// 202. Happy Number
const isHappy = (n) => {
    if (n === 1) return 1;

    let v = n;
    let visited = {};

    while (v !== 1) {
        let now = 0;

        for (const char of `${v}`) {
            now += Number(char) ** 2;
        }

        if (!visited[now]) {
            visited[now] = true;
        } else {
            return false;
        }

        v = now;
    }

    return v === 1 ? true : false;
};

console.log(isHappy(1111111));
