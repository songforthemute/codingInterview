// 기능개발
function solution(progresses, speeds) {
    const result = [];

    let developing = progresses.reverse();
    let velocity = speeds.reverse();

    while (developing.length !== 0) {
        let i = developing.length - 1;

        while (i >= 0) {
            developing[i] += velocity[i];
            i--;
        }
        if (developing[developing.length - 1] >= 100) {
            let complete = 0;

            while (developing[developing.length - 1] >= 100) {
                developing.pop();
                velocity.pop();
                complete++;
            }
            result.push(complete);
        }
    }
    return result;
}
