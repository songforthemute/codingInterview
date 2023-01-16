// Lv. 2 [3차] 파일명 정렬

/**
 * @param {string[]} files 문자열 파일명이 들어있는 배열
 * @return {string[]} HEAD, NUMBER, TAIL에 따라 정렬된 문자열 배열
 */

const solution = (files) => {
    const separator = (file = "") => {
        let head = "";
        let num = "";

        let i = 0;

        while (!(parseInt(file[i]) >= 0)) {
            head += file[i++];
        }

        while (parseInt(file[i]) >= 0) {
            num += file[i++];
        }

        return [head.toLowerCase(), parseInt(num)];
    };

    return files.sort((a, b) => {
        const [head1, num1] = separator(a);
        const [head2, num2] = separator(b);

        // Compare HEAD
        if (head1 !== head2) {
            for (let i = 0; i < Math.max(head1.length, head2.length); i++) {
                const code1 = head1.charCodeAt(i) || undefined;
                const code2 = head2.charCodeAt(i) || undefined;

                if (!code1 || !code2) {
                    return !code1 ? -1 : 1;
                }

                if (code1 === code2) continue;
                else return code1 - code2;
            }
        }

        // Compare NUMBER or when smae
        return num1 !== num2 ? num1 - num2 : 0;
    });
};
