// H-Index
function solution(citations) {
    const sorted = citations.sort((a, b) => b - a);
    let h = 0;

    while (h + 1 <= sorted[h]) {
        h++;
    }

    return h;
}
