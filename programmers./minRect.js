// 최소직사각형
function solution(sizes) {
    let w = 0,
        h = 0;

    for (const card of sizes) {
        if (card[0] > card[1]) {
            w = Math.max(w, card[0]);
            h = Math.max(h, card[1]);
        } else {
            w = Math.max(w, card[1]);
            h = Math.max(h, card[0]);
        }
    }

    return w * h;
}
