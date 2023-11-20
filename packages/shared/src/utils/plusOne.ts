export const plusOne = (nums: number[]) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 9) {
      nums[i] += 1;
      return nums;
    } else {
      nums[i] = 0;
    }
  }

  nums.unshift(1);
  return nums;
};
