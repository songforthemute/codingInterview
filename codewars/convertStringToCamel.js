// 6 kyu: Convert string to camel case
function toCamelCase(str) {
    let result = "";
    let isTurnToLarger = false;

    for (const char of str) {
        if (
            (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) ||
            (char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
        ) {
            if (isTurnToLarger) {
                result += char.toUpperCase();
                isTurnToLarger = !isTurnToLarger;
            } else {
                result += char;
            }
        } else {
            isTurnToLarger = !isTurnToLarger;
        }
    }

    return result;
}
