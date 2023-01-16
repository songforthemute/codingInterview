// 6. Zigzag Conversion
function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;

    const arr: string[] = new Array(numRows).fill("");

    let strCnt = 0;
    let arrCnt = 0;
    let isIncline = true;

    while (strCnt < s.length) {
        arr[arrCnt] += s[strCnt++];

        if (isIncline) {
            arrCnt++;
            if (arrCnt === arr.length - 1) {
                isIncline = !isIncline;
            }
        } else {
            arrCnt--;
            if (arrCnt === 0) {
                isIncline = !isIncline;
            }
        }
    }

    return arr.join("");
}
