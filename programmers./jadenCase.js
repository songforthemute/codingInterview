// JadenCase 문자열 만들기
function solution(s) {
    return s
        .split(" ")
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
        )
        .join(" ");
}
