// K번째수
function solution(arr, com) {
    const result = [];

    for (const elem of com) {
        const piece = arr.slice(elem[0] - 1, elem[1]).sort((a, b) => a - b);
        result.push(piece[elem[2] - 1]);
    }

    return result;
}
