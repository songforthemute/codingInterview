// 6 kyu: Detect Pangram
function isPangram(string) {
    const obj = {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false,
    };

    for (const char of string.toLowerCase()) {
        obj[char] = true;
    }

    for (const e of Object.keys(obj)) {
        if (!obj[e]) return false;
    }

    return true;
}
