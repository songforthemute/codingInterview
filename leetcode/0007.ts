// 7. Reverse Integer
function reverse(x: number): number {
    if (x > -10 && x < 10) return x;

    const isPositive = x > 0 ? true : false;
    const toStr = isPositive ? String(x) : String(x).slice(1);
    let reversed = "";

    for (let i = toStr.length - 1; i >= 0; i--) {
        reversed += toStr[i];
    }

    let result = isPositive ? Number(reversed) : -Number(reversed);
    return result >= (-2) ** 31 && result <= 2 ** 31 - 1 ? result : 0;
}
