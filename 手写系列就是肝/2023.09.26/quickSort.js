// 请编写一个函数，实现数组的快速排序。

/**
 * [快速排序 quick sort]是一种基于分治策略的排序算法，运行高效，应用广泛。
 *
 * 快速排序的核心操作是“哨兵划分”, 其目标是：选择数组中的某个元素作为“基准数”, 将所有小于基准数的元素移到其左侧, 而大于基准数的元素移到右侧。
 *
 * 整体流程是
 * 1. 首选，对原数组执行一次“哨兵划分”，得到未排序的左子数组和右子数组。
 * 2. 然后，对左子数组和右子数组分别递归进行“哨兵划分”。
 * 3. 持续递归，直到子数组长度为1时终止，从而完成整个数组的排序。
 */

// 交换元素
function swap(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

// 哨兵划分
function partition(nums, left, right) {
  let i = left;
  let j = right;
  while (i < j) {
    while (i < j && nums[j] >= nums[left]) j--;
    while (i < j && nums[i] <= nums[left]) i++;

    swap(nums, i, j);
  }

  swap(nums, i, left); // 将基准数交换至两子数组的分界线
  return i; // 返回基准数的索引
}

function quickSort(nums, left, right) {
  // 子数组长度为1时终止递归
  if (left >= right) return;
  // 哨兵划分
  const pivot = partition(nums, left, right);
  // 对两个子数组中较短的那个执行快排
  if (pivot - left < right - pivot) {
    quickSort(nums, left, pivot - 1);
    left = pivot + 1; // 剩余未排序区间为 [pivot + 1, right]
  } else {
    quickSort(nums, pivot + 1, right);
    right = pivot - 1; // 剩余未排序区间为 [left, pivot - 1]
  }

  return nums;
}

console.log(quickSort([2, 4, 1, 0, 3, 5], 0, 5));

// 哨兵划分，增加基准数优化
function partition1(nums, left, right) {
  let med = medianThree(nums, left, parseInt((left + right) / 2), right);
  swap(nums, left, med);
  partition(nums, left, right);
}

function medianThree(nums, left, mid, right) {
  if ((nums[left] < nums[mid]) ^ (nums[left] < nums[right])) {
    return left;
  } else if ((nums[mid] < nums[left]) ^ (nums[mid] < nums[right])) {
    return mid;
  } else {
    return right;
  }
}
