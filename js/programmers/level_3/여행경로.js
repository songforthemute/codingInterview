// Lv. 3 여행경로

/**
 * @param {string[][]} tickets 항공권 정보가 담긴 2차원 배열
 * @return {string[]} 방문하는 공항 경로
 */

function solution(tickets) {
    const graph = {};

    tickets.sort().forEach(([from, to]) => {
        if (!graph[from]) graph[from] = { [to]: 1 };
        else if (!graph[from][to]) graph[from][to] = 1;
        else graph[from][to]++;
    });

    const results = [];
    const queue = [[["ICN"], { ...graph }]];

    while (queue.length) {
        const [route, map] = queue.shift();
        const current = route[route.length - 1];

        // breakpoint
        if (route.length === tickets.length + 1) {
            if (
                Object.values(map)
                    .map((to) => Object.values(to))
                    .flat()
                    .every((rest) => rest === 0)
            ) {
                results.push(route);
            }
            continue;
        }

        // search candidate city
        if (map[current]) {
            for (const dest in map[current]) {
                if (map[current][dest] > 0) {
                    const temp = {
                        ...map,
                        [current]: {
                            ...map[current],
                            [dest]: map[current][dest] - 1,
                        },
                    };

                    queue.push([[...route, dest], temp]);
                }
            }
        }
    }

    return results[0];
}

// test cases
console.log(
    solution([
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"],
    ])
); // ["ICN", "JFK", "HND", "IAD"]

console.log(
    solution([
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"],
    ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

console.log(
    solution([
        ["ICN", "SFO"],
        ["SFO", "ICN"],
        ["ICN", "SFO"],
        ["SFO", "QRE"],
    ])
); // ["ICN", "SFO", "ICN", "SFO", "QRE"]

console.log(
    solution([
        ["ICN", "B"],
        ["ICN", "C"],
        ["C", "D"],
        ["D", "C"],
        ["B", "D"],
        ["D", "B"],
        ["B", "ICN"],
        ["C", "B"],
    ])
); // ["ICN", "B", "D", "B", "ICN", "C", "D", "C", "B"]
