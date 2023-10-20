/**
 * [二分查找 binary search] 基于分治策略的高效搜索。它利用数组的有序性，每轮减少一半的搜索范围，直到找到目标元素位或者搜索区间为空为止。
 *
 * @remarks
 *
 * 二分查找分为两种：双闭区间和左闭右开，推荐双闭区间，
 */

/**
 * @param {有序数组} nums
 * @param {目标元素} target
 */
function binarySearch(nums, target) {
  let i = 0;
  let j = nums.length;
  while (i < j) {
    const m = parseInt(i + (j - i) / 2);
    if (nums[m] < target) {
      i = m + 1;
    } else if (nums[m] > target) {
      j = m;
    } else {
      return m;
    }
  }
  return -1;
}
