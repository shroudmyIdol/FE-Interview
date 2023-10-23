function mergeSort(nums, left, right) {
  // 终止条件
  if (left >= right) return;
  let mid = Math.floor((left + right) / 2);

  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);

  console.log(left, mid, right);
  merge(nums, left, mid, right);
}

/* 合作左子数组和右子数组 */
// 左子数组区间[left, mid]
// 左子数组区间[mid, right + 1]
function merge(nums, left, mid, right) {
  // 初始化辅助数组
  let tmp = nums.slice(left, right + 1);
  // 左子数组的起始索引和结束索引
  let leftStart = left - left;
  let leftEnd = mid - left;
  // 右子数组的起始索引和结束索引
  let rightStart = mid + 1 - left;
  let rightEnd = right - left;
  // i, j分别指向左子数组、右子数组的首元素
  let i = leftStart;
  let j = rightStart;
  // 通过覆盖原数组nums来合并左子数组和右子数组 [3,7] [2,6]
  for (let k = left; k <= right; k++) {
    if (i > leftEnd) {
      //若"左子数组已经全部合并"，则选取右子数组元素，并且j++
      nums[k] = tmp[j++];
    } else if (j > rightEnd || tmp[i] <= tmp[j]) {
      //否则，若“右子数组和已经全部合并完”或“左子数组元素 <= 右子数组元素”，则选取左子数组元素，并且 i++
      nums[k] = tmp[i++];
    } else {
      //否则，若“左右子数组都未全部合并完”且“左子数组元素 > 右子数组元素”，则选取右子数组元素，并且 j++
      nums[k] = tmp[j++];
    }
  }
}

let arr = [7, 3, 2, 6, 0, 1, 5, 4];

mergeSort(arr, 0, 7);

console.log(arr);