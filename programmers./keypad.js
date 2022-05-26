// 키패드 누르기
function solution(nums, hand) {
    let str = "";
    const left = { x: 3, y: 0 };
    const right = { x: 3, y: 2 };
    let k = 0;

    while (k < nums.length) {
        const now = nums[k];
        if (now % 3 === 0 && now !== 0) {
            // arr[?][2] - 3, 6, 9
            right["x"] = now / 3 - 1;
            right["y"] = 2;
            str += "R";
        } else if (now % 3 === 1) {
            // arr[?][0] - 1, 4, 7
            left["x"] = Math.floor(now / 3);
            left["y"] = 0;
            str += "L";
        } else {
            // arr[?][1] - 2, 5, 8, 0
            let i = 0;
            now === 0 ? (i = 3) : (i = Math.floor(now / 3));
            const j = 1;
            const leftDif = Math.abs(left["x"] - i) + Math.abs(left["y"] - j);
            const rightDif =
                Math.abs(right["x"] - i) + Math.abs(right["y"] - j);
            if (leftDif < rightDif) {
                // near Left side
                left["x"] = i;
                left["y"] = j;
                str += "L";
            } else if (leftDif > rightDif) {
                // near Right side
                right["x"] = i;
                right["y"] = j;
                str += "R";
            } else {
                // ===
                if (hand === "right") {
                    right["x"] = i;
                    right["y"] = j;
                    str += "R";
                } else {
                    left["x"] = i;
                    left["y"] = j;
                    str += "L";
                }
            }
        }
        k++;
        if (k >= nums.length) break;
    }
    return str;
}
