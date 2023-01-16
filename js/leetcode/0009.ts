// 9. Palindrome Number
const isPalindrome = (x: number): boolean => {
    const num = String(x);
    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        if (num[left] !== num[right]) return false;
        left++;
        right--;
    }

    return true;
};
