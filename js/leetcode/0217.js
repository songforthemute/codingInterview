// 217. Contains Duplicate

const containsDuplicate = (nums) => {
    return nums.length === new Set([...nums]).size ? false : true;
};
