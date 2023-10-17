/**
 * [快速排序 quick sort] 是一种基于分治策略的排序算法，运行高效，应用广泛
 *
 * 整体流程：
 * 1. 找到数组的顶端、末端和中间三个数的中位数，将三者交互
 * 2. 以基准数为准将数组拆分为左子数组和右子数组
 * 3. 分别对左右子数组进行快速排序
 */

function quickSort(arr, left, right) {
  while (left < right) {
    // 得到基准数索引
    const pivot = partition(arr, left, right);
    if (pivot - left < right - pivot) {
      quickSort(arr, left, pivot - 1);
      left = pivot + 1; // 未排序区间[pivot + 1, right]
    } else {
      quickSort(arr, pivot + 1, right);
      right = pivot - 1; // 未排序区间[left, pivot - 1]
    }
  }
}

// 对数组进行排序, 得到基准数的索引
function partition(arr, left, right) {
  // 找到头，中，尾三者中的中位数
  const med = medianThree(arr, left, right);
  // 将中位数交换到最左边作为基准数
  swap(arr, left, med);
  // 以基准数为准，将左右两边的数进行交换
  let i = left;
  let j = right;
  while (i < j) {
    while (i < j && arr[j] >= arr[left]) j--;
    while (i < j && arr[i] <= arr[left]) i++;

    swap(arr, i, j);
  }
  // 再将基准数交换到中间，这样就形成了左右两段的数组[左, 基准数, 右]
  swap(arr, i, left);
  return i;
}

function medianThree() {
  const mid = parseInt((left + right) / 2);
  let med = mid;
  // 异或运算
  if ((arr[left] < arr[mid]) ^ (arr[left] < arr[right])) {
    med = left;
  } else if ((arr[right] < arr[mid]) ^ (arr[right] < arr[mid])) {
    med = right;
  }
  return med;
}

function swap(nums, left, right) {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}
