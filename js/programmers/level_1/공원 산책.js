// Lv. 1 공원 산책

/**
 * @param {string[]} park 공원을 나타내는 문자열 배열
 * @param {string[]} routes 로봇 강아지가 수행할 명령이 담긴 문자열 배열
 * @return {number[]} 로봇 강아지가 모든 명령을 수행 후 놓인 위치
 */

const solution = (park, routes) => {
    // parse command of routes
    const getDirection = (str = " ") => {
        const [direction, amount] = str.split(" ");

        switch (direction) {
            case "E":
                return [0, Number(amount)];
            case "W":
                return [0, -Number(amount)];
            case "N":
                return [-Number(amount), 0];
            case "S":
                return [Number(amount), 0];
            default:
                return;
        }
    };

    // for init
    const init = () => {
        let [x, y] = [0, 0];

        for (let i = 0; i < park.length; i++) {
            for (let j = 0; j < park[i].length; j++) {
                if (park[i][j] === "S") {
                    x = i;
                    y = j;
                    return [x, y];
                }
            }
        }

        return [x, y];
    };

    // init for start
    let [x, y] = init();

    // test and conduct each route
    routes.forEach((route) => {
        const [dirX, dirY] = getDirection(route);
        const [curX, curY] = [x, y];

        // case: calc X
        if (dirX) {
            const start = Math.min(curX, curX + dirX);
            const end = Math.max(curX, curX + dirX);

            for (let i = start; i <= end; i++) {
                if (i < 0 || i >= park.length || park[i][curY] === "X") return;
            }
        }
        // case: calc Y
        else {
            const start = Math.min(curY, curY + dirY);
            const end = Math.max(curY, curY + dirY);

            for (let i = start; i <= end; i++) {
                if (i < 0 || i >= park[curX].length || park[curX][i] === "X")
                    return;
            }
        }

        x += dirX;
        y += dirY;
    });

    return [x, y];
};

// test cases
console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]
