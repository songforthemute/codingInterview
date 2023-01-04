// Lv. 2 방문 길이

/**
 * @param {string} dirs 명령어
 * @return {number} 캐릭터가 처음 걸어본 길의 길이
 */

const solution = (dirs) => {
    let current = [0, 0];
    const history = {};

    const processing = (geo, command) => {
        let [x, y] = geo;

        switch (command) {
            case "U":
                return [x, Math.min(y + 1, 5)];
            case "D":
                return [x, Math.max(y - 1, -5)];
            case "R":
                return [Math.min(x + 1, 5), y];
            case "L":
                return [Math.max(x - 1, -5), y];
            default:
                return;
        }
    };

    for (const dir of dirs) {
        let [nextX, nextY] = processing(current, dir);

        if (`${current}` !== `${[nextX, nextY]}`) {
            let [currentX, currentY] = current;
            let key, val;

            if (currentX !== nextX) {
                key = [Math.min(currentX, nextX), currentY];
                val = [Math.max(currentX, nextX), currentY];
            } else {
                key = [currentX, Math.min(currentY, nextY)];
                val = [currentX, Math.max(currentY, nextY)];
            }

            if (history[key] === undefined) {
                history[key] = [`${val}`];
            } else {
                history[key].push(`${val}`);
            }

            current = [nextX, nextY];
        }
    }

    return Object.values(history).reduceRight(
        (prev, curr) =>
            curr.length > 1 ? new Set(curr).size + prev : curr.length + prev,
        0
    );
};
