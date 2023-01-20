// Lv. 0 로그인 성공?

/**
 * @param {[string, string]} id_pw
 * @param {[string, string][]} db
 * @return {string}
 */

const solution = (id_pw, db) => {
    const [id, pw] = id_pw;

    for (const set of db) {
        const [tryId, tryPw] = set;

        if (id === tryId) {
            if (pw === tryPw) {
                return "login";
            } else {
                return "wrong pw";
            }
        }
    }

    return "fail";
};
