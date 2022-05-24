// 소수 만들기
function solution(nums) {
    let count = 0;

    const isPrime = (n) => {
        for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
        return true;
    };

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (isPrime(nums[i] + nums[j] + nums[k])) count++;
            }
        }
    }

    return count;
}
