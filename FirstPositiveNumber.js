let firstMissingPositive = (nums) => {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  console.log(obj);
  let result;
  for (let i = 1; i <= nums.length + 1; i++) {
    if (!obj[i]) {
      result = i;
      break;
    }
  }
  return result;
};
console.log(firstMissingPositive([1]));
